// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

import { graphql, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { Node as SlateNode } from 'slate';

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example
import {
    text,
    relationship,
    password,
    timestamp,
    select,
    integer,
    json,
    virtual
} from '@keystone-6/core/fields';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';

// Cloudinary image field for managed image uploads
import { cloudinaryImage } from '@keystone-6/cloudinary';

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { type Lists } from '.keystone/types';

// Shared Cloudinary configuration
const cloudinaryConfig = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
    apiKey: process.env.CLOUDINARY_API_KEY!,
    apiSecret: process.env.CLOUDINARY_API_SECRET!,
    folder: process.env.CLOUDINARY_API_FOLDER ?? 'portfolio'
};

export const lists = {
    User: list({
        // WARNING
        //   for this starter project, anyone can create, query, update and delete anything
        //   if you want to prevent random people on the internet from accessing your data,
        //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
        access: allowAll,

        // this is the fields for our User list
        fields: {
            // by adding isRequired, we enforce that every User should have a name
            //   if no name is provided, an error will be displayed
            name: text({ validation: { isRequired: true } }),

            email: text({
                validation: { isRequired: true },
                // by adding isIndexed: 'unique', we're saying that no user can have the same
                // email as another user - this may or may not be a good idea for your project
                isIndexed: 'unique'
            }),

            password: password({ validation: { isRequired: true } }),

            // we can use this field to see what Posts this User has authored
            //   more on that in the Post list below
            posts: relationship({ ref: 'Post.author', many: true }),

            createdAt: timestamp({
                // this sets the timestamp to Date.now() when the user is first created
                defaultValue: { kind: 'now' }
            }),

            prompts: relationship({ ref: 'Prompt.author', many: true })
        }
    }),

    Post: list({
        // WARNING
        //   for this starter project, anyone can create, query, update and delete anything
        //   if you want to prevent random people on the internet from accessing your data,
        //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
        access: allowAll,

        // this is the fields for our Post list
        fields: {
            createdAt: timestamp({
                defaultValue: { kind: 'now' },
                ui: {
                    createView: { fieldMode: 'hidden' },
                    listView: { fieldMode: 'read' },
                    itemView: { fieldMode: 'read' }
                }
            }),

            updatedAt: timestamp({
                defaultValue: { kind: 'now' },
                db: {
                    updatedAt: true
                },
                ui: {
                    createView: { fieldMode: 'hidden' },
                    listView: { fieldMode: 'read' },
                    itemView: { fieldMode: 'read' }
                }
            }),

            status: select({
                options: [
                    { label: 'Draft', value: 'DRAFT' },
                    { label: 'Published', value: 'PUBLISHED' },
                    { label: 'Archived', value: 'ARCHIVED' }
                ],
                defaultValue: 'DRAFT',
                validation: { isRequired: true },
                ui: {
                    displayMode: 'segmented-control'
                }
            }),

            title: text({
                validation: { isRequired: true },
                isIndexed: 'unique'
            }),

            slug: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
                isFilterable: true
            }),

            excerpt: virtual({
                field: graphql.field({
                    type: graphql.String,
                    args: {
                        length: graphql.arg({
                            type: graphql.nonNull(graphql.Int),
                            defaultValue: 250
                        })
                    },
                    resolve(item, { length }) {
                        if (
                            item &&
                            item.content &&
                            Array.isArray(item.content)
                        ) {
                            return item.content
                                .filter(Boolean)
                                .map((n) => SlateNode.string(n as any))
                                .join('\n')
                                .slice(0, length);
                        }
                    }
                }),
                ui: { query: '(length: 250)' }
            }),

            // the document field can be used for making rich editable content
            //   you can find out more at https://keystonejs.com/docs/guides/document-fields
            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1]
                ],
                links: true,
                dividers: true
            }),

            // with this field, you can set a User as the author for a Post
            author: relationship({
                // we could have used 'User', but then the relationship would only be 1-way
                ref: 'User.posts',

                // this is some customisations for changing how this will look in the AdminUI
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name', 'email'],
                    inlineEdit: { fields: ['name', 'email'] },
                    linkToItem: true,
                    inlineConnect: true
                },

                // a Post can only have one author
                //   this is the default, but we show it here for verbosity
                many: false
            }),

            // with this field, you can add some Tags to Posts
            tags: relationship({
                // we could have used 'Tag', but then the relationship would only be 1-way
                ref: 'Tag.posts',

                // a Post can have many Tags, not just one
                many: true,

                // this is some customisations for changing how this will look in the AdminUI
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name'],
                    inlineEdit: { fields: ['name'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['name'] }
                }
            })
        }
    }),

    // this last list is our Tag list, it only has a name field for now
    Tag: list({
        // WARNING
        //   for this starter project, anyone can create, query, update and delete anything
        //   if you want to prevent random people on the internet from accessing your data,
        //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
        access: allowAll,

        // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
        ui: {
            isHidden: true
        },

        // this is the fields for our Tag list
        fields: {
            name: text(),
            // this can be helpful to find out all the Posts associated with a Tag
            posts: relationship({ ref: 'Post.tags', many: true }),
            prompts: relationship({ ref: 'Prompt.tags', many: true }),
            works: relationship({ ref: 'Work.tags', many: true })
        }
    }),

    Prompt: list({
        access: allowAll,
        fields: {
            createdAt: timestamp({
                defaultValue: { kind: 'now' },
                ui: {
                    createView: { fieldMode: 'hidden' },
                    listView: { fieldMode: 'read' },
                    itemView: { fieldMode: 'read' }
                }
            }),

            updatedAt: timestamp({
                defaultValue: { kind: 'now' },
                db: {
                    updatedAt: true
                },
                ui: {
                    createView: { fieldMode: 'hidden' },
                    listView: { fieldMode: 'read' },
                    itemView: { fieldMode: 'read' }
                }
            }),

            title: text({
                validation: { isRequired: true },
                isIndexed: 'unique'
            }),

            slug: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
                isFilterable: true
            }),

            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1]
                ],
                links: true,
                dividers: true
            }),

            // with this field, you can set a User as the author for a Post
            author: relationship({
                // we could have used 'User', but then the relationship would only be 1-way
                ref: 'User.prompts',

                // this is some customisations for changing how this will look in the AdminUI
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name', 'email'],
                    inlineEdit: { fields: ['name', 'email'] },
                    linkToItem: true,
                    inlineConnect: true
                },

                // a Post can only have one author
                //   this is the default, but we show it here for verbosity
                many: false
            }),

            // with this field, you can add some Tags to Posts
            tags: relationship({
                // we could have used 'Tag', but then the relationship would only be 1-way
                ref: 'Tag.prompts',

                // a Post can have many Tags, not just one
                many: true,

                // this is some customisations for changing how this will look in the AdminUI
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name'],
                    inlineEdit: { fields: ['name'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['name'] }
                }
            })
        }
    }),

    Work: list({
        access: allowAll,
        ui: {
            listView: {
                initialColumns: [
                    'title',
                    'slug',
                    'status',
                    'sidebarType',
                    'sortOrder'
                ]
            }
        },
        fields: {
            createdAt: timestamp({
                defaultValue: { kind: 'now' },
                ui: {
                    createView: { fieldMode: 'hidden' },
                    listView: { fieldMode: 'read' },
                    itemView: { fieldMode: 'read' }
                }
            }),

            updatedAt: timestamp({
                defaultValue: { kind: 'now' },
                db: { updatedAt: true },
                ui: {
                    createView: { fieldMode: 'hidden' },
                    listView: { fieldMode: 'read' },
                    itemView: { fieldMode: 'read' }
                }
            }),

            title: text({
                validation: { isRequired: true },
                isIndexed: 'unique'
            }),

            slug: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
                isFilterable: true
            }),

            status: select({
                options: [
                    { label: 'Draft', value: 'DRAFT' },
                    { label: 'Published', value: 'PUBLISHED' },
                    { label: 'Archived', value: 'ARCHIVED' }
                ],
                defaultValue: 'DRAFT',
                validation: { isRequired: true },
                ui: { displayMode: 'segmented-control' }
            }),

            sortOrder: integer({ defaultValue: 0 }),

            description: text({
                validation: { isRequired: true },
                ui: { displayMode: 'textarea' }
            }),

            cta: text({
                defaultValue: 'See more',
                label: 'Call to action text'
            }),

            heroImage: cloudinaryImage({ cloudinary: cloudinaryConfig }),

            thumbnailImage: cloudinaryImage({ cloudinary: cloudinaryConfig }),

            about: text({ ui: { displayMode: 'textarea' } }),

            learned: text({ ui: { displayMode: 'textarea' } }),

            impact: text({ ui: { displayMode: 'textarea' } }),

            content: document({
                formatting: true,
                layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1]
                ],
                links: true,
                dividers: true
            }),

            techStack: json({
                defaultValue: [],
                ui: {
                    description:
                        'JSON array of logo identifiers, e.g. ["typescript", "react", "tailwind"]'
                }
            }),

            sourceUrl: text(),

            demoUrl: text(),

            demoUrlText: text(),

            purchaseUrl: text(),

            purchaseButtonText: text({ defaultValue: 'Purchase' }),

            sidebarTitle: text({ defaultValue: 'Get It Now' }),

            features: json({
                defaultValue: [],
                ui: {
                    description:
                        'JSON array of feature strings for product sidebar'
                }
            }),

            sidebarType: select({
                options: [
                    { label: 'None', value: 'none' },
                    { label: 'Purchase', value: 'purchase' },
                    { label: 'Interest Form', value: 'interest-form' }
                ],
                defaultValue: 'none'
            }),

            galleryImages: relationship({
                ref: 'WorkImage.work',
                many: true,
                ui: {
                    displayMode: 'cards',
                    cardFields: ['alt', 'sortOrder'],
                    inlineEdit: { fields: ['alt', 'sortOrder', 'image'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['alt', 'sortOrder', 'image'] }
                }
            }),

            author: relationship({
                ref: 'User',
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name', 'email'],
                    linkToItem: true,
                    inlineConnect: true
                },
                many: false
            }),

            tags: relationship({
                ref: 'Tag.works',
                many: true,
                ui: {
                    displayMode: 'cards',
                    cardFields: ['name'],
                    inlineEdit: { fields: ['name'] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ['name'] }
                }
            })
        }
    }),

    Skill: list({
        access: allowAll,
        ui: {
            listView: {
                initialColumns: ['name', 'sortOrder', 'status']
            }
        },
        fields: {
            name: text({
                validation: { isRequired: true },
                isIndexed: 'unique'
            }),
            sortOrder: integer({ defaultValue: 0 }),
            status: select({
                options: [
                    { label: 'Draft', value: 'DRAFT' },
                    { label: 'Published', value: 'PUBLISHED' }
                ],
                defaultValue: 'DRAFT',
                validation: { isRequired: true },
                ui: { displayMode: 'segmented-control' }
            })
        }
    }),

    Experience: list({
        access: allowAll,
        ui: {
            listView: {
                initialColumns: [
                    'title',
                    'company',
                    'type',
                    'sortOrder',
                    'status'
                ]
            }
        },
        fields: {
            title: text({ validation: { isRequired: true } }),
            company: text(),
            location: text({ defaultValue: 'Austin, TX' }),
            dates: text(),
            type: select({
                options: [
                    { label: 'Job', value: 'job' },
                    { label: 'Community', value: 'community' },
                    { label: 'Education', value: 'education' }
                ],
                defaultValue: 'job',
                validation: { isRequired: true },
                ui: { displayMode: 'segmented-control' }
            }),
            sortOrder: integer({ defaultValue: 0 }),
            bullets: json({
                defaultValue: [],
                ui: { description: 'JSON array of bullet point strings' }
            }),
            status: select({
                options: [
                    { label: 'Draft', value: 'DRAFT' },
                    { label: 'Published', value: 'PUBLISHED' }
                ],
                defaultValue: 'DRAFT',
                validation: { isRequired: true },
                ui: { displayMode: 'segmented-control' }
            })
        }
    }),

    Quote: list({
        access: allowAll,
        ui: {
            listView: {
                initialColumns: ['author', 'sortOrder', 'status']
            },
            labelField: 'author'
        },
        fields: {
            text: text({
                validation: { isRequired: true },
                isIndexed: 'unique',
                ui: { displayMode: 'textarea' }
            }),
            author: text({ validation: { isRequired: true } }),
            sortOrder: integer({ defaultValue: 0 }),
            status: select({
                options: [
                    { label: 'Draft', value: 'DRAFT' },
                    { label: 'Published', value: 'PUBLISHED' }
                ],
                defaultValue: 'DRAFT',
                validation: { isRequired: true },
                ui: { displayMode: 'segmented-control' }
            })
        }
    }),

    AboutFact: list({
        access: allowAll,
        ui: {
            listView: {
                initialColumns: ['title', 'emoji', 'sortOrder', 'status']
            }
        },
        fields: {
            emoji: text(),
            title: text({
                validation: { isRequired: true },
                isIndexed: 'unique'
            }),
            content: text({ ui: { displayMode: 'textarea' } }),
            linkUrl: text(),
            linkExternal: select({
                options: [
                    { label: 'External', value: 'true' },
                    { label: 'Internal', value: 'false' }
                ],
                defaultValue: 'true'
            }),
            sortOrder: integer({ defaultValue: 0 }),
            status: select({
                options: [
                    { label: 'Draft', value: 'DRAFT' },
                    { label: 'Published', value: 'PUBLISHED' }
                ],
                defaultValue: 'DRAFT',
                validation: { isRequired: true },
                ui: { displayMode: 'segmented-control' }
            })
        }
    }),

    WorkImage: list({
        access: allowAll,
        ui: {
            listView: {
                initialColumns: ['alt', 'sortOrder', 'work']
            },
            labelField: 'alt'
        },
        fields: {
            image: cloudinaryImage({ cloudinary: cloudinaryConfig }),

            alt: text({
                validation: { isRequired: true }
            }),

            sortOrder: integer({ defaultValue: 0 }),

            work: relationship({
                ref: 'Work.galleryImages',
                many: false,
                ui: {
                    displayMode: 'cards',
                    cardFields: ['title'],
                    linkToItem: true,
                    inlineConnect: true
                }
            })
        }
    })
} satisfies Lists;
