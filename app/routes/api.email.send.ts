import { type ActionFunctionArgs, json } from '@remix-run/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action({ request }: ActionFunctionArgs) {
    if (request.method === 'POST') {
        const form = await request.formData();
        form;

        const { data, error } = await resend.emails.send({
            from: 'Seth Davis <hey@sethdavis.io>',
            to: ['sethdavis512@gmail.com'],
            subject: 'Hello world',
            html: '<p>Is this mic on? Testing 1 2 3...</p>',
        });

        // await resend.batch.send([
        //     {
        //       from: 'Acme <onboarding@resend.dev>',
        //       to: ['foo@gmail.com'],
        //       subject: 'hello world',
        //       html: '<h1>it works!</h1>',
        //     },
        //     {
        //       from: 'Acme <onboarding@resend.dev>',
        //       to: ['bar@outlook.com'],
        //       subject: 'world hello',
        //       html: '<p>it works!</p>',
        //     },
        //   ]);

        if (error) {
            return json({ error }, 400);
        }

        return json(data, 200);
    } else if (request.method === 'PUT') {
        /* handle "PUT" */
    } else if (request.method === 'PATCH') {
        /* handle "PATCH" */
    } else if (request.method === 'DELETE') {
        /* handle "DELETE" */
    }
}
