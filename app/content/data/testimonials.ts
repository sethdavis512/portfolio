import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
    {
        id: 'testimonial-virtruv',
        workSlug: 'virtruv',
        quote: 'Seth shows his value through a utter brilliance in the basics. In my experience, practitioners try to impress with the most modern tooling or whatever new gimmick on the market—not Seth. He has the know-how and expertise, and, yet, he has a grasp of what drives projects and what businesses need as opposed to the frills. We will use him for all of our branding and web presence needs for years to come.',
        author: 'Owner',
        role: 'Virtruv',
        sortOrder: 1
    }
];

export function getTestimonialsByWorkSlug(slug: string) {
    return testimonials
        .filter(function (t) {
            return t.workSlug === slug;
        })
        .sort(function (a, b) {
            return a.sortOrder - b.sortOrder;
        });
}
