import { z } from 'zod';

export const contactFormSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, 'First name is required')
        .max(100, 'First name is too long'),
    lastName: z
        .string()
        .trim()
        .min(1, 'Last name is required')
        .max(100, 'Last name is too long'),
    email: z
        .string()
        .trim()
        .min(1, 'Email is required')
        .max(320, 'Email is too long')
        .email('Please enter a valid email address'),
    note: z.string().trim().max(2000, 'Note is too long').optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function validateContactForm(formData: FormData):
    | { success: true; data: ContactFormData }
    | { success: false; fieldErrors: ContactFieldErrors } {
    const result = contactFormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        note: formData.get('note') || undefined
    });

    if (result.success) {
        return { success: true, data: result.data };
    }

    const fieldErrors: ContactFieldErrors = {};
    for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
            fieldErrors[field] = issue.message;
        }
    }

    return { success: false, fieldErrors };
}
