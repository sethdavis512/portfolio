import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AboutFact = {
  __typename?: 'AboutFact';
  content?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linkExternal?: Maybe<Scalars['String']['output']>;
  linkUrl?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AboutFactCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  linkExternal?: InputMaybe<Scalars['String']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutFactOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  emoji?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  linkExternal?: InputMaybe<OrderDirection>;
  linkUrl?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type AboutFactUpdateArgs = {
  data: AboutFactUpdateInput;
  where: AboutFactWhereUniqueInput;
};

export type AboutFactUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  linkExternal?: InputMaybe<Scalars['String']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AboutFactWhereInput = {
  AND?: InputMaybe<Array<AboutFactWhereInput>>;
  NOT?: InputMaybe<Array<AboutFactWhereInput>>;
  OR?: InputMaybe<Array<AboutFactWhereInput>>;
  content?: InputMaybe<StringFilter>;
  emoji?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  linkExternal?: InputMaybe<StringNullableFilter>;
  linkUrl?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type AboutFactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AuthenticatedItem = User;

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_space?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  default_image?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['String']['input']>;
  density?: InputMaybe<Scalars['String']['input']>;
  dpr?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fetch_format?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  gravity?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  opacity?: InputMaybe<Scalars['String']['input']>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  transformation?: InputMaybe<Scalars['String']['input']>;
  underlay?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  zoom?: InputMaybe<Scalars['String']['input']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  publicUrlTransformed?: Maybe<Scalars['String']['output']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Experience = {
  __typename?: 'Experience';
  bullets?: Maybe<Scalars['JSON']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  dates?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ExperienceCreateInput = {
  bullets?: InputMaybe<Scalars['JSON']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceOrderByInput = {
  company?: InputMaybe<OrderDirection>;
  dates?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  location?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type ExperienceUpdateArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};

export type ExperienceUpdateInput = {
  bullets?: InputMaybe<Scalars['JSON']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceWhereInput = {
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  company?: InputMaybe<StringFilter>;
  dates?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  location?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type ExperienceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSearchFields: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAboutFact?: Maybe<AboutFact>;
  createAboutFacts?: Maybe<Array<Maybe<AboutFact>>>;
  createExperience?: Maybe<Experience>;
  createExperiences?: Maybe<Array<Maybe<Experience>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createOffering?: Maybe<Offering>;
  createOfferings?: Maybe<Array<Maybe<Offering>>>;
  createPackage?: Maybe<Package>;
  createPackages?: Maybe<Array<Maybe<Package>>>;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createPrompt?: Maybe<Prompt>;
  createPrompts?: Maybe<Array<Maybe<Prompt>>>;
  createQuote?: Maybe<Quote>;
  createQuotes?: Maybe<Array<Maybe<Quote>>>;
  createSkill?: Maybe<Skill>;
  createSkills?: Maybe<Array<Maybe<Skill>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createValue?: Maybe<Value>;
  createValues?: Maybe<Array<Maybe<Value>>>;
  createWork?: Maybe<Work>;
  createWorkImage?: Maybe<WorkImage>;
  createWorkImages?: Maybe<Array<Maybe<WorkImage>>>;
  createWorks?: Maybe<Array<Maybe<Work>>>;
  deleteAboutFact?: Maybe<AboutFact>;
  deleteAboutFacts?: Maybe<Array<Maybe<AboutFact>>>;
  deleteExperience?: Maybe<Experience>;
  deleteExperiences?: Maybe<Array<Maybe<Experience>>>;
  deleteOffering?: Maybe<Offering>;
  deleteOfferings?: Maybe<Array<Maybe<Offering>>>;
  deletePackage?: Maybe<Package>;
  deletePackages?: Maybe<Array<Maybe<Package>>>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deletePrompt?: Maybe<Prompt>;
  deletePrompts?: Maybe<Array<Maybe<Prompt>>>;
  deleteQuote?: Maybe<Quote>;
  deleteQuotes?: Maybe<Array<Maybe<Quote>>>;
  deleteSkill?: Maybe<Skill>;
  deleteSkills?: Maybe<Array<Maybe<Skill>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteValue?: Maybe<Value>;
  deleteValues?: Maybe<Array<Maybe<Value>>>;
  deleteWork?: Maybe<Work>;
  deleteWorkImage?: Maybe<WorkImage>;
  deleteWorkImages?: Maybe<Array<Maybe<WorkImage>>>;
  deleteWorks?: Maybe<Array<Maybe<Work>>>;
  endSession: Scalars['Boolean']['output'];
  updateAboutFact?: Maybe<AboutFact>;
  updateAboutFacts?: Maybe<Array<Maybe<AboutFact>>>;
  updateExperience?: Maybe<Experience>;
  updateExperiences?: Maybe<Array<Maybe<Experience>>>;
  updateOffering?: Maybe<Offering>;
  updateOfferings?: Maybe<Array<Maybe<Offering>>>;
  updatePackage?: Maybe<Package>;
  updatePackages?: Maybe<Array<Maybe<Package>>>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updatePrompt?: Maybe<Prompt>;
  updatePrompts?: Maybe<Array<Maybe<Prompt>>>;
  updateQuote?: Maybe<Quote>;
  updateQuotes?: Maybe<Array<Maybe<Quote>>>;
  updateSkill?: Maybe<Skill>;
  updateSkills?: Maybe<Array<Maybe<Skill>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateValue?: Maybe<Value>;
  updateValues?: Maybe<Array<Maybe<Value>>>;
  updateWork?: Maybe<Work>;
  updateWorkImage?: Maybe<WorkImage>;
  updateWorkImages?: Maybe<Array<Maybe<WorkImage>>>;
  updateWorks?: Maybe<Array<Maybe<Work>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateAboutFactArgs = {
  data: AboutFactCreateInput;
};


export type MutationCreateAboutFactsArgs = {
  data: Array<AboutFactCreateInput>;
};


export type MutationCreateExperienceArgs = {
  data: ExperienceCreateInput;
};


export type MutationCreateExperiencesArgs = {
  data: Array<ExperienceCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateOfferingArgs = {
  data: OfferingCreateInput;
};


export type MutationCreateOfferingsArgs = {
  data: Array<OfferingCreateInput>;
};


export type MutationCreatePackageArgs = {
  data: PackageCreateInput;
};


export type MutationCreatePackagesArgs = {
  data: Array<PackageCreateInput>;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreatePromptArgs = {
  data: PromptCreateInput;
};


export type MutationCreatePromptsArgs = {
  data: Array<PromptCreateInput>;
};


export type MutationCreateQuoteArgs = {
  data: QuoteCreateInput;
};


export type MutationCreateQuotesArgs = {
  data: Array<QuoteCreateInput>;
};


export type MutationCreateSkillArgs = {
  data: SkillCreateInput;
};


export type MutationCreateSkillsArgs = {
  data: Array<SkillCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateValueArgs = {
  data: ValueCreateInput;
};


export type MutationCreateValuesArgs = {
  data: Array<ValueCreateInput>;
};


export type MutationCreateWorkArgs = {
  data: WorkCreateInput;
};


export type MutationCreateWorkImageArgs = {
  data: WorkImageCreateInput;
};


export type MutationCreateWorkImagesArgs = {
  data: Array<WorkImageCreateInput>;
};


export type MutationCreateWorksArgs = {
  data: Array<WorkCreateInput>;
};


export type MutationDeleteAboutFactArgs = {
  where: AboutFactWhereUniqueInput;
};


export type MutationDeleteAboutFactsArgs = {
  where: Array<AboutFactWhereUniqueInput>;
};


export type MutationDeleteExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type MutationDeleteExperiencesArgs = {
  where: Array<ExperienceWhereUniqueInput>;
};


export type MutationDeleteOfferingArgs = {
  where: OfferingWhereUniqueInput;
};


export type MutationDeleteOfferingsArgs = {
  where: Array<OfferingWhereUniqueInput>;
};


export type MutationDeletePackageArgs = {
  where: PackageWhereUniqueInput;
};


export type MutationDeletePackagesArgs = {
  where: Array<PackageWhereUniqueInput>;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeletePromptArgs = {
  where: PromptWhereUniqueInput;
};


export type MutationDeletePromptsArgs = {
  where: Array<PromptWhereUniqueInput>;
};


export type MutationDeleteQuoteArgs = {
  where: QuoteWhereUniqueInput;
};


export type MutationDeleteQuotesArgs = {
  where: Array<QuoteWhereUniqueInput>;
};


export type MutationDeleteSkillArgs = {
  where: SkillWhereUniqueInput;
};


export type MutationDeleteSkillsArgs = {
  where: Array<SkillWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteValueArgs = {
  where: ValueWhereUniqueInput;
};


export type MutationDeleteValuesArgs = {
  where: Array<ValueWhereUniqueInput>;
};


export type MutationDeleteWorkArgs = {
  where: WorkWhereUniqueInput;
};


export type MutationDeleteWorkImageArgs = {
  where: WorkImageWhereUniqueInput;
};


export type MutationDeleteWorkImagesArgs = {
  where: Array<WorkImageWhereUniqueInput>;
};


export type MutationDeleteWorksArgs = {
  where: Array<WorkWhereUniqueInput>;
};


export type MutationUpdateAboutFactArgs = {
  data: AboutFactUpdateInput;
  where: AboutFactWhereUniqueInput;
};


export type MutationUpdateAboutFactsArgs = {
  data: Array<AboutFactUpdateArgs>;
};


export type MutationUpdateExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpdateExperiencesArgs = {
  data: Array<ExperienceUpdateArgs>;
};


export type MutationUpdateOfferingArgs = {
  data: OfferingUpdateInput;
  where: OfferingWhereUniqueInput;
};


export type MutationUpdateOfferingsArgs = {
  data: Array<OfferingUpdateArgs>;
};


export type MutationUpdatePackageArgs = {
  data: PackageUpdateInput;
  where: PackageWhereUniqueInput;
};


export type MutationUpdatePackagesArgs = {
  data: Array<PackageUpdateArgs>;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdatePromptArgs = {
  data: PromptUpdateInput;
  where: PromptWhereUniqueInput;
};


export type MutationUpdatePromptsArgs = {
  data: Array<PromptUpdateArgs>;
};


export type MutationUpdateQuoteArgs = {
  data: QuoteUpdateInput;
  where: QuoteWhereUniqueInput;
};


export type MutationUpdateQuotesArgs = {
  data: Array<QuoteUpdateArgs>;
};


export type MutationUpdateSkillArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};


export type MutationUpdateSkillsArgs = {
  data: Array<SkillUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateValueArgs = {
  data: ValueUpdateInput;
  where: ValueWhereUniqueInput;
};


export type MutationUpdateValuesArgs = {
  data: Array<ValueUpdateArgs>;
};


export type MutationUpdateWorkArgs = {
  data: WorkUpdateInput;
  where: WorkWhereUniqueInput;
};


export type MutationUpdateWorkImageArgs = {
  data: WorkImageUpdateInput;
  where: WorkImageWhereUniqueInput;
};


export type MutationUpdateWorkImagesArgs = {
  data: Array<WorkImageUpdateArgs>;
};


export type MutationUpdateWorksArgs = {
  data: Array<WorkUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Offering = {
  __typename?: 'Offering';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
};

export type OfferingCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type OfferingManyRelationFilter = {
  every?: InputMaybe<OfferingWhereInput>;
  none?: InputMaybe<OfferingWhereInput>;
  some?: InputMaybe<OfferingWhereInput>;
};

export type OfferingOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
};

export type OfferingRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<OfferingWhereUniqueInput>>;
  create?: InputMaybe<Array<OfferingCreateInput>>;
};

export type OfferingRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<OfferingWhereUniqueInput>>;
  create?: InputMaybe<Array<OfferingCreateInput>>;
  disconnect?: InputMaybe<Array<OfferingWhereUniqueInput>>;
  set?: InputMaybe<Array<OfferingWhereUniqueInput>>;
};

export type OfferingUpdateArgs = {
  data: OfferingUpdateInput;
  where: OfferingWhereUniqueInput;
};

export type OfferingUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type OfferingWhereInput = {
  AND?: InputMaybe<Array<OfferingWhereInput>>;
  NOT?: InputMaybe<Array<OfferingWhereInput>>;
  OR?: InputMaybe<Array<OfferingWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntNullableFilter>;
};

export type OfferingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Package = {
  __typename?: 'Package';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  offerings?: Maybe<Array<Offering>>;
  offeringsCount?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type PackageOfferingsArgs = {
  cursor?: InputMaybe<OfferingWhereUniqueInput>;
  orderBy?: Array<OfferingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OfferingWhereInput;
};


export type PackageOfferingsCountArgs = {
  where?: OfferingWhereInput;
};

export type PackageCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offerings?: InputMaybe<OfferingRelateToManyForCreateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PackageOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
};

export type PackageUpdateArgs = {
  data: PackageUpdateInput;
  where: PackageWhereUniqueInput;
};

export type PackageUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offerings?: InputMaybe<OfferingRelateToManyForUpdateInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PackageWhereInput = {
  AND?: InputMaybe<Array<PackageWhereInput>>;
  NOT?: InputMaybe<Array<PackageWhereInput>>;
  OR?: InputMaybe<Array<PackageWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  offerings?: InputMaybe<OfferingManyRelationFilter>;
  order?: InputMaybe<IntNullableFilter>;
  price?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type PackageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Post_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostExcerptArgs = {
  length?: Scalars['Int']['input'];
};


export type PostTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON']['output'];
};


export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Prompt = {
  __typename?: 'Prompt';
  author?: Maybe<User>;
  content?: Maybe<Prompt_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PromptTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PromptTagsCountArgs = {
  where?: TagWhereInput;
};

export type PromptCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromptManyRelationFilter = {
  every?: InputMaybe<PromptWhereInput>;
  none?: InputMaybe<PromptWhereInput>;
  some?: InputMaybe<PromptWhereInput>;
};

export type PromptOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PromptRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PromptWhereUniqueInput>>;
  create?: InputMaybe<Array<PromptCreateInput>>;
};

export type PromptRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PromptWhereUniqueInput>>;
  create?: InputMaybe<Array<PromptCreateInput>>;
  disconnect?: InputMaybe<Array<PromptWhereUniqueInput>>;
  set?: InputMaybe<Array<PromptWhereUniqueInput>>;
};

export type PromptUpdateArgs = {
  data: PromptUpdateInput;
  where: PromptWhereUniqueInput;
};

export type PromptUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PromptWhereInput = {
  AND?: InputMaybe<Array<PromptWhereInput>>;
  NOT?: InputMaybe<Array<PromptWhereInput>>;
  OR?: InputMaybe<Array<PromptWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type PromptWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Prompt_Content_Document = {
  __typename?: 'Prompt_content_Document';
  document: Scalars['JSON']['output'];
};


export type Prompt_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  aboutFact?: Maybe<AboutFact>;
  aboutFacts?: Maybe<Array<AboutFact>>;
  aboutFactsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  experience?: Maybe<Experience>;
  experiences?: Maybe<Array<Experience>>;
  experiencesCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  offering?: Maybe<Offering>;
  offerings?: Maybe<Array<Offering>>;
  offeringsCount?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<Package>;
  packages?: Maybe<Array<Package>>;
  packagesCount?: Maybe<Scalars['Int']['output']>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  prompt?: Maybe<Prompt>;
  prompts?: Maybe<Array<Prompt>>;
  promptsCount?: Maybe<Scalars['Int']['output']>;
  quote?: Maybe<Quote>;
  quotes?: Maybe<Array<Quote>>;
  quotesCount?: Maybe<Scalars['Int']['output']>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  skillsCount?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Value>;
  values?: Maybe<Array<Value>>;
  valuesCount?: Maybe<Scalars['Int']['output']>;
  work?: Maybe<Work>;
  workImage?: Maybe<WorkImage>;
  workImages?: Maybe<Array<WorkImage>>;
  workImagesCount?: Maybe<Scalars['Int']['output']>;
  works?: Maybe<Array<Work>>;
  worksCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryAboutFactArgs = {
  where: AboutFactWhereUniqueInput;
};


export type QueryAboutFactsArgs = {
  cursor?: InputMaybe<AboutFactWhereUniqueInput>;
  orderBy?: Array<AboutFactOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AboutFactWhereInput;
};


export type QueryAboutFactsCountArgs = {
  where?: AboutFactWhereInput;
};


export type QueryExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type QueryExperiencesArgs = {
  cursor?: InputMaybe<ExperienceWhereUniqueInput>;
  orderBy?: Array<ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ExperienceWhereInput;
};


export type QueryExperiencesCountArgs = {
  where?: ExperienceWhereInput;
};


export type QueryOfferingArgs = {
  where: OfferingWhereUniqueInput;
};


export type QueryOfferingsArgs = {
  cursor?: InputMaybe<OfferingWhereUniqueInput>;
  orderBy?: Array<OfferingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: OfferingWhereInput;
};


export type QueryOfferingsCountArgs = {
  where?: OfferingWhereInput;
};


export type QueryPackageArgs = {
  where: PackageWhereUniqueInput;
};


export type QueryPackagesArgs = {
  cursor?: InputMaybe<PackageWhereUniqueInput>;
  orderBy?: Array<PackageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PackageWhereInput;
};


export type QueryPackagesCountArgs = {
  where?: PackageWhereInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QueryPromptArgs = {
  where: PromptWhereUniqueInput;
};


export type QueryPromptsArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  orderBy?: Array<PromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PromptWhereInput;
};


export type QueryPromptsCountArgs = {
  where?: PromptWhereInput;
};


export type QueryQuoteArgs = {
  where: QuoteWhereUniqueInput;
};


export type QueryQuotesArgs = {
  cursor?: InputMaybe<QuoteWhereUniqueInput>;
  orderBy?: Array<QuoteOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: QuoteWhereInput;
};


export type QueryQuotesCountArgs = {
  where?: QuoteWhereInput;
};


export type QuerySkillArgs = {
  where: SkillWhereUniqueInput;
};


export type QuerySkillsArgs = {
  cursor?: InputMaybe<SkillWhereUniqueInput>;
  orderBy?: Array<SkillOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: SkillWhereInput;
};


export type QuerySkillsCountArgs = {
  where?: SkillWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValueArgs = {
  where: ValueWhereUniqueInput;
};


export type QueryValuesArgs = {
  cursor?: InputMaybe<ValueWhereUniqueInput>;
  orderBy?: Array<ValueOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ValueWhereInput;
};


export type QueryValuesCountArgs = {
  where?: ValueWhereInput;
};


export type QueryWorkArgs = {
  where: WorkWhereUniqueInput;
};


export type QueryWorkImageArgs = {
  where: WorkImageWhereUniqueInput;
};


export type QueryWorkImagesArgs = {
  cursor?: InputMaybe<WorkImageWhereUniqueInput>;
  orderBy?: Array<WorkImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: WorkImageWhereInput;
};


export type QueryWorkImagesCountArgs = {
  where?: WorkImageWhereInput;
};


export type QueryWorksArgs = {
  cursor?: InputMaybe<WorkWhereUniqueInput>;
  orderBy?: Array<WorkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: WorkWhereInput;
};


export type QueryWorksCountArgs = {
  where?: WorkWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Quote = {
  __typename?: 'Quote';
  author?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type QuoteCreateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteOrderByInput = {
  author?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  text?: InputMaybe<OrderDirection>;
};

export type QuoteUpdateArgs = {
  data: QuoteUpdateInput;
  where: QuoteWhereUniqueInput;
};

export type QuoteUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type QuoteWhereInput = {
  AND?: InputMaybe<Array<QuoteWhereInput>>;
  NOT?: InputMaybe<Array<QuoteWhereInput>>;
  OR?: InputMaybe<Array<QuoteWhereInput>>;
  author?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
};

export type QuoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SkillCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SkillOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type SkillUpdateArgs = {
  data: SkillUpdateInput;
  where: SkillWhereUniqueInput;
};

export type SkillUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SkillWhereInput = {
  AND?: InputMaybe<Array<SkillWhereInput>>;
  NOT?: InputMaybe<Array<SkillWhereInput>>;
  OR?: InputMaybe<Array<SkillWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
};

export type SkillWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  prompts?: Maybe<Array<Prompt>>;
  promptsCount?: Maybe<Scalars['Int']['output']>;
  works?: Maybe<Array<Work>>;
  worksCount?: Maybe<Scalars['Int']['output']>;
};


export type TagPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type TagPostsCountArgs = {
  where?: PostWhereInput;
};


export type TagPromptsArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  orderBy?: Array<PromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PromptWhereInput;
};


export type TagPromptsCountArgs = {
  where?: PromptWhereInput;
};


export type TagWorksArgs = {
  cursor?: InputMaybe<WorkWhereUniqueInput>;
  orderBy?: Array<WorkOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: WorkWhereInput;
};


export type TagWorksCountArgs = {
  where?: WorkWhereInput;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  prompts?: InputMaybe<PromptRelateToManyForCreateInput>;
  works?: InputMaybe<WorkRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  prompts?: InputMaybe<PromptRelateToManyForUpdateInput>;
  works?: InputMaybe<WorkRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  prompts?: InputMaybe<PromptManyRelationFilter>;
  works?: InputMaybe<WorkManyRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  prompts?: Maybe<Array<Prompt>>;
  promptsCount?: Maybe<Scalars['Int']['output']>;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type UserPostsCountArgs = {
  where?: PostWhereInput;
};


export type UserPromptsArgs = {
  cursor?: InputMaybe<PromptWhereUniqueInput>;
  orderBy?: Array<PromptOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PromptWhereInput;
};


export type UserPromptsCountArgs = {
  where?: PromptWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
  prompts?: InputMaybe<PromptRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
  prompts?: InputMaybe<PromptRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
  prompts?: InputMaybe<PromptManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Value = {
  __typename?: 'Value';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ValueCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ValueOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type ValueUpdateArgs = {
  data: ValueUpdateInput;
  where: ValueWhereUniqueInput;
};

export type ValueUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ValueWhereInput = {
  AND?: InputMaybe<Array<ValueWhereInput>>;
  NOT?: InputMaybe<Array<ValueWhereInput>>;
  OR?: InputMaybe<Array<ValueWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ValueWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Work = {
  __typename?: 'Work';
  about?: Maybe<Scalars['String']['output']>;
  author?: Maybe<User>;
  content?: Maybe<Work_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  demoUrl?: Maybe<Scalars['String']['output']>;
  demoUrlText?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  galleryImages?: Maybe<Array<WorkImage>>;
  galleryImagesCount?: Maybe<Scalars['Int']['output']>;
  heroImage?: Maybe<CloudinaryImage_File>;
  id: Scalars['ID']['output'];
  impact?: Maybe<Scalars['String']['output']>;
  learned?: Maybe<Scalars['String']['output']>;
  purchaseButtonText?: Maybe<Scalars['String']['output']>;
  purchaseUrl?: Maybe<Scalars['String']['output']>;
  sidebarTitle?: Maybe<Scalars['String']['output']>;
  sidebarType?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  sourceUrl?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  techStack?: Maybe<Scalars['JSON']['output']>;
  thumbnailImage?: Maybe<CloudinaryImage_File>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WorkGalleryImagesArgs = {
  cursor?: InputMaybe<WorkImageWhereUniqueInput>;
  orderBy?: Array<WorkImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: WorkImageWhereInput;
};


export type WorkGalleryImagesCountArgs = {
  where?: WorkImageWhereInput;
};


export type WorkTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type WorkTagsCountArgs = {
  where?: TagWhereInput;
};

export type WorkCreateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  demoUrl?: InputMaybe<Scalars['String']['input']>;
  demoUrlText?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  galleryImages?: InputMaybe<WorkImageRelateToManyForCreateInput>;
  heroImage?: InputMaybe<Scalars['Upload']['input']>;
  impact?: InputMaybe<Scalars['String']['input']>;
  learned?: InputMaybe<Scalars['String']['input']>;
  purchaseButtonText?: InputMaybe<Scalars['String']['input']>;
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  sidebarTitle?: InputMaybe<Scalars['String']['input']>;
  sidebarType?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  techStack?: InputMaybe<Scalars['JSON']['input']>;
  thumbnailImage?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WorkImage = {
  __typename?: 'WorkImage';
  alt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  work?: Maybe<Work>;
};

export type WorkImageCreateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  work?: InputMaybe<WorkRelateToOneForCreateInput>;
};

export type WorkImageManyRelationFilter = {
  every?: InputMaybe<WorkImageWhereInput>;
  none?: InputMaybe<WorkImageWhereInput>;
  some?: InputMaybe<WorkImageWhereInput>;
};

export type WorkImageOrderByInput = {
  alt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
};

export type WorkImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<WorkImageWhereUniqueInput>>;
  create?: InputMaybe<Array<WorkImageCreateInput>>;
};

export type WorkImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<WorkImageWhereUniqueInput>>;
  create?: InputMaybe<Array<WorkImageCreateInput>>;
  disconnect?: InputMaybe<Array<WorkImageWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkImageWhereUniqueInput>>;
};

export type WorkImageUpdateArgs = {
  data: WorkImageUpdateInput;
  where: WorkImageWhereUniqueInput;
};

export type WorkImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  work?: InputMaybe<WorkRelateToOneForUpdateInput>;
};

export type WorkImageWhereInput = {
  AND?: InputMaybe<Array<WorkImageWhereInput>>;
  NOT?: InputMaybe<Array<WorkImageWhereInput>>;
  OR?: InputMaybe<Array<WorkImageWhereInput>>;
  alt?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  work?: InputMaybe<WorkWhereInput>;
};

export type WorkImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkManyRelationFilter = {
  every?: InputMaybe<WorkWhereInput>;
  none?: InputMaybe<WorkWhereInput>;
  some?: InputMaybe<WorkWhereInput>;
};

export type WorkOrderByInput = {
  about?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  cta?: InputMaybe<OrderDirection>;
  demoUrl?: InputMaybe<OrderDirection>;
  demoUrlText?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  impact?: InputMaybe<OrderDirection>;
  learned?: InputMaybe<OrderDirection>;
  purchaseButtonText?: InputMaybe<OrderDirection>;
  purchaseUrl?: InputMaybe<OrderDirection>;
  sidebarTitle?: InputMaybe<OrderDirection>;
  sidebarType?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  sortOrder?: InputMaybe<OrderDirection>;
  sourceUrl?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type WorkRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<WorkWhereUniqueInput>>;
  create?: InputMaybe<Array<WorkCreateInput>>;
};

export type WorkRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<WorkWhereUniqueInput>>;
  create?: InputMaybe<Array<WorkCreateInput>>;
  disconnect?: InputMaybe<Array<WorkWhereUniqueInput>>;
  set?: InputMaybe<Array<WorkWhereUniqueInput>>;
};

export type WorkRelateToOneForCreateInput = {
  connect?: InputMaybe<WorkWhereUniqueInput>;
  create?: InputMaybe<WorkCreateInput>;
};

export type WorkRelateToOneForUpdateInput = {
  connect?: InputMaybe<WorkWhereUniqueInput>;
  create?: InputMaybe<WorkCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkUpdateArgs = {
  data: WorkUpdateInput;
  where: WorkWhereUniqueInput;
};

export type WorkUpdateInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  demoUrl?: InputMaybe<Scalars['String']['input']>;
  demoUrlText?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  galleryImages?: InputMaybe<WorkImageRelateToManyForUpdateInput>;
  heroImage?: InputMaybe<Scalars['Upload']['input']>;
  impact?: InputMaybe<Scalars['String']['input']>;
  learned?: InputMaybe<Scalars['String']['input']>;
  purchaseButtonText?: InputMaybe<Scalars['String']['input']>;
  purchaseUrl?: InputMaybe<Scalars['String']['input']>;
  sidebarTitle?: InputMaybe<Scalars['String']['input']>;
  sidebarType?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  sourceUrl?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  techStack?: InputMaybe<Scalars['JSON']['input']>;
  thumbnailImage?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WorkWhereInput = {
  AND?: InputMaybe<Array<WorkWhereInput>>;
  NOT?: InputMaybe<Array<WorkWhereInput>>;
  OR?: InputMaybe<Array<WorkWhereInput>>;
  about?: InputMaybe<StringFilter>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  cta?: InputMaybe<StringFilter>;
  demoUrl?: InputMaybe<StringFilter>;
  demoUrlText?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  galleryImages?: InputMaybe<WorkImageManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  impact?: InputMaybe<StringFilter>;
  learned?: InputMaybe<StringFilter>;
  purchaseButtonText?: InputMaybe<StringFilter>;
  purchaseUrl?: InputMaybe<StringFilter>;
  sidebarTitle?: InputMaybe<StringFilter>;
  sidebarType?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  sortOrder?: InputMaybe<IntNullableFilter>;
  sourceUrl?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type WorkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Work_Content_Document = {
  __typename?: 'Work_content_Document';
  document: Scalars['JSON']['output'];
};


export type Work_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type GetAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageQuery = { __typename?: 'Query', aboutFacts?: Array<{ __typename?: 'AboutFact', id: string, emoji?: string | null, title?: string | null, content?: string | null, linkUrl?: string | null, linkExternal?: string | null, sortOrder?: number | null }> | null, quotes?: Array<{ __typename?: 'Quote', id: string, text?: string | null, author?: string | null, sortOrder?: number | null }> | null, values?: Array<{ __typename?: 'Value', id: string, title?: string | null, description?: string | null, sortOrder?: number | null }> | null };

export type GetPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPackagesQuery = { __typename?: 'Query', packages?: Array<{ __typename?: 'Package', id: string, name?: string | null, description?: string | null, type?: string | null, order?: number | null, price?: number | null, offerings?: Array<{ __typename?: 'Offering', id: string, name?: string | null, description?: string | null }> | null }> | null };

export type GetPostBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostBySlugQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, slug?: string | null, title?: string | null, excerpt?: string | null, createdAt?: any | null, content?: { __typename?: 'Post_content_Document', document: any } | null, author?: { __typename?: 'User', name?: string | null, id: string } | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null } | null, relatedPosts?: Array<{ __typename?: 'Post', id: string, slug?: string | null, title?: string | null }> | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, slug?: string | null, title?: string | null }> | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', works?: Array<{ __typename?: 'Work', id: string, title?: string | null, slug?: string | null, description?: string | null, purchaseUrl?: string | null, purchaseButtonText?: string | null, features?: any | null, thumbnailImage?: { __typename?: 'CloudinaryImage_File', publicUrl?: string | null, publicUrlTransformed?: string | null } | null }> | null };

export type GetPromptDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPromptDetailsQuery = { __typename?: 'Query', prompt?: { __typename?: 'Prompt', id: string, slug?: string | null, title?: string | null, author?: { __typename?: 'User', id: string, email?: string | null, name?: string | null } | null, content?: { __typename?: 'Prompt_content_Document', document: any } | null } | null };

export type GetPromptsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPromptsListQuery = { __typename?: 'Query', prompts?: Array<{ __typename?: 'Prompt', id: string, slug?: string | null, title?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null }> | null };

export type GetPublishedPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublishedPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, createdAt?: any | null, updatedAt?: any | null, slug?: string | null, title?: string | null, excerpt?: string | null, content?: { __typename?: 'Post_content_Document', document: any } | null, author?: { __typename?: 'User', name?: string | null, id: string } | null }> | null };

export type GetPublishedRelatedPostsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPublishedRelatedPostsQuery = { __typename?: 'Query', relatedPublishedPosts?: Array<{ __typename?: 'Post', id: string, slug?: string | null, title?: string | null, excerpt?: string | null, createdAt?: any | null, author?: { __typename?: 'User', name?: string | null, id: string } | null }> | null };

export type GetResumeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResumeQuery = { __typename?: 'Query', skills?: Array<{ __typename?: 'Skill', id: string, name?: string | null, sortOrder?: number | null }> | null, experiences?: Array<{ __typename?: 'Experience', id: string, title?: string | null, company?: string | null, location?: string | null, dates?: string | null, type?: string | null, sortOrder?: number | null, bullets?: any | null }> | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, name?: string | null }> | null };

export type GetWorkDetailQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetWorkDetailQuery = { __typename?: 'Query', work?: { __typename?: 'Work', id: string, title?: string | null, slug?: string | null, status?: string | null, description?: string | null, cta?: string | null, about?: string | null, learned?: string | null, impact?: string | null, techStack?: any | null, sourceUrl?: string | null, demoUrl?: string | null, demoUrlText?: string | null, purchaseUrl?: string | null, purchaseButtonText?: string | null, sidebarTitle?: string | null, features?: any | null, sidebarType?: string | null, createdAt?: any | null, updatedAt?: any | null, heroImage?: { __typename?: 'CloudinaryImage_File', publicUrl?: string | null, publicUrlTransformed?: string | null } | null, content?: { __typename?: 'Work_content_Document', document: any } | null, galleryImages?: Array<{ __typename?: 'WorkImage', id: string, alt?: string | null, sortOrder?: number | null, image?: { __typename?: 'CloudinaryImage_File', publicUrl?: string | null, publicUrlTransformed?: string | null } | null }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null } | null };

export type GetWorkListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkListQuery = { __typename?: 'Query', works?: Array<{ __typename?: 'Work', id: string, title?: string | null, slug?: string | null, description?: string | null, cta?: string | null, sortOrder?: number | null, sidebarType?: string | null, thumbnailImage?: { __typename?: 'CloudinaryImage_File', publicUrl?: string | null, publicUrlTransformed?: string | null } | null }> | null };

export type GetWorkNavItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkNavItemsQuery = { __typename?: 'Query', works?: Array<{ __typename?: 'Work', title?: string | null, slug?: string | null }> | null };

export type GetWorkSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkSlugsQuery = { __typename?: 'Query', works?: Array<{ __typename?: 'Work', slug?: string | null }> | null };


export const GetAboutPageDocument = gql`
    query GetAboutPage {
  aboutFacts(where: {status: {equals: "PUBLISHED"}}, orderBy: [{sortOrder: asc}]) {
    id
    emoji
    title
    content
    linkUrl
    linkExternal
    sortOrder
  }
  quotes(where: {status: {equals: "PUBLISHED"}}, orderBy: [{sortOrder: asc}]) {
    id
    text
    author
    sortOrder
  }
  values(where: {status: {equals: "PUBLISHED"}}, orderBy: [{sortOrder: asc}]) {
    id
    title
    description
    sortOrder
  }
}
    `;

export function useGetAboutPageQuery(options?: Omit<Urql.UseQueryArgs<GetAboutPageQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAboutPageQuery, GetAboutPageQueryVariables>({ query: GetAboutPageDocument, ...options });
};
export const GetPackagesDocument = gql`
    query GetPackages {
  packages(orderBy: {order: asc}) {
    id
    name
    description
    type
    order
    offerings {
      id
      name
      description
    }
    price
  }
}
    `;

export function useGetPackagesQuery(options?: Omit<Urql.UseQueryArgs<GetPackagesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPackagesQuery, GetPackagesQueryVariables>({ query: GetPackagesDocument, ...options });
};
export const GetPostBySlugDocument = gql`
    query GetPostBySlug($slug: String!) {
  post(where: {slug: $slug}) {
    id
    slug
    title
    excerpt
    createdAt
    content {
      document
    }
    author {
      name
      id
    }
    tags {
      id
      name
    }
  }
  relatedPosts: posts(
    where: {slug: {not: {contains: $slug}}, status: {equals: "PUBLISHED"}}
    take: 3
  ) {
    id
    slug
    title
  }
}
    `;

export function useGetPostBySlugQuery(options: Omit<Urql.UseQueryArgs<GetPostBySlugQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostBySlugQuery, GetPostBySlugQueryVariables>({ query: GetPostBySlugDocument, ...options });
};
export const GetPostsDocument = gql`
    query GetPosts {
  posts {
    id
    slug
    title
  }
}
    `;

export function useGetPostsQuery(options?: Omit<Urql.UseQueryArgs<GetPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPostsQuery, GetPostsQueryVariables>({ query: GetPostsDocument, ...options });
};
export const GetProductsDocument = gql`
    query GetProducts {
  works(
    where: {status: {equals: "PUBLISHED"}, sidebarType: {equals: "purchase"}}
    orderBy: [{sortOrder: asc}]
  ) {
    id
    title
    slug
    description
    purchaseUrl
    purchaseButtonText
    features
    thumbnailImage {
      publicUrl
      publicUrlTransformed(
        transformation: {width: "1280", crop: "scale", quality: "90", fetch_format: "auto"}
      )
    }
  }
}
    `;

export function useGetProductsQuery(options?: Omit<Urql.UseQueryArgs<GetProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductsQuery, GetProductsQueryVariables>({ query: GetProductsDocument, ...options });
};
export const GetPromptDetailsDocument = gql`
    query GetPromptDetails($slug: String!) {
  prompt(where: {slug: $slug}) {
    id
    author {
      id
      email
      name
    }
    slug
    title
    content {
      document
    }
  }
}
    `;

export function useGetPromptDetailsQuery(options: Omit<Urql.UseQueryArgs<GetPromptDetailsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPromptDetailsQuery, GetPromptDetailsQueryVariables>({ query: GetPromptDetailsDocument, ...options });
};
export const GetPromptsListDocument = gql`
    query GetPromptsList {
  prompts {
    id
    slug
    title
    tags {
      id
      name
    }
  }
}
    `;

export function useGetPromptsListQuery(options?: Omit<Urql.UseQueryArgs<GetPromptsListQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPromptsListQuery, GetPromptsListQueryVariables>({ query: GetPromptsListDocument, ...options });
};
export const GetPublishedPostsDocument = gql`
    query GetPublishedPosts {
  posts(where: {status: {equals: "PUBLISHED"}}) {
    id
    createdAt
    updatedAt
    slug
    title
    excerpt
    content {
      document
    }
    author {
      name
      id
    }
  }
}
    `;

export function useGetPublishedPostsQuery(options?: Omit<Urql.UseQueryArgs<GetPublishedPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPublishedPostsQuery, GetPublishedPostsQueryVariables>({ query: GetPublishedPostsDocument, ...options });
};
export const GetPublishedRelatedPostsDocument = gql`
    query GetPublishedRelatedPosts($slug: String!) {
  relatedPublishedPosts: posts(
    where: {slug: {not: {contains: $slug}}, status: {equals: "PUBLISHED"}}
    take: 3
  ) {
    id
    slug
    title
    excerpt
    createdAt
    author {
      name
      id
    }
  }
}
    `;

export function useGetPublishedRelatedPostsQuery(options: Omit<Urql.UseQueryArgs<GetPublishedRelatedPostsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPublishedRelatedPostsQuery, GetPublishedRelatedPostsQueryVariables>({ query: GetPublishedRelatedPostsDocument, ...options });
};
export const GetResumeDocument = gql`
    query GetResume {
  skills(where: {status: {equals: "PUBLISHED"}}, orderBy: [{sortOrder: asc}]) {
    id
    name
    sortOrder
  }
  experiences(where: {status: {equals: "PUBLISHED"}}, orderBy: [{sortOrder: asc}]) {
    id
    title
    company
    location
    dates
    type
    sortOrder
    bullets
  }
}
    `;

export function useGetResumeQuery(options?: Omit<Urql.UseQueryArgs<GetResumeQueryVariables>, 'query'>) {
  return Urql.useQuery<GetResumeQuery, GetResumeQueryVariables>({ query: GetResumeDocument, ...options });
};
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    name
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({ query: GetUsersDocument, ...options });
};
export const GetWorkDetailDocument = gql`
    query GetWorkDetail($slug: String!) {
  work(where: {slug: $slug}) {
    id
    title
    slug
    status
    description
    cta
    about
    learned
    impact
    techStack
    sourceUrl
    demoUrl
    demoUrlText
    purchaseUrl
    purchaseButtonText
    sidebarTitle
    features
    sidebarType
    heroImage {
      publicUrl
      publicUrlTransformed(
        transformation: {width: "1920", crop: "scale", quality: "90", fetch_format: "auto"}
      )
    }
    content {
      document
    }
    galleryImages(orderBy: [{sortOrder: asc}]) {
      id
      alt
      sortOrder
      image {
        publicUrl
        publicUrlTransformed(
          transformation: {width: "1280", crop: "scale", quality: "90", fetch_format: "auto"}
        )
      }
    }
    tags {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;

export function useGetWorkDetailQuery(options: Omit<Urql.UseQueryArgs<GetWorkDetailQueryVariables>, 'query'>) {
  return Urql.useQuery<GetWorkDetailQuery, GetWorkDetailQueryVariables>({ query: GetWorkDetailDocument, ...options });
};
export const GetWorkListDocument = gql`
    query GetWorkList {
  works(
    where: {status: {equals: "PUBLISHED"}, sidebarType: {not: {equals: "purchase"}}}
    orderBy: [{sortOrder: asc}]
  ) {
    id
    title
    slug
    description
    cta
    sortOrder
    sidebarType
    thumbnailImage {
      publicUrl
      publicUrlTransformed(
        transformation: {width: "1280", crop: "scale", quality: "90", fetch_format: "auto"}
      )
    }
  }
}
    `;

export function useGetWorkListQuery(options?: Omit<Urql.UseQueryArgs<GetWorkListQueryVariables>, 'query'>) {
  return Urql.useQuery<GetWorkListQuery, GetWorkListQueryVariables>({ query: GetWorkListDocument, ...options });
};
export const GetWorkNavItemsDocument = gql`
    query GetWorkNavItems {
  works(where: {status: {equals: "PUBLISHED"}}, orderBy: [{sortOrder: asc}]) {
    title
    slug
  }
}
    `;

export function useGetWorkNavItemsQuery(options?: Omit<Urql.UseQueryArgs<GetWorkNavItemsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetWorkNavItemsQuery, GetWorkNavItemsQueryVariables>({ query: GetWorkNavItemsDocument, ...options });
};
export const GetWorkSlugsDocument = gql`
    query GetWorkSlugs {
  works(where: {status: {equals: "PUBLISHED"}}) {
    slug
  }
}
    `;

export function useGetWorkSlugsQuery(options?: Omit<Urql.UseQueryArgs<GetWorkSlugsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetWorkSlugsQuery, GetWorkSlugsQueryVariables>({ query: GetWorkSlugsDocument, ...options });
};