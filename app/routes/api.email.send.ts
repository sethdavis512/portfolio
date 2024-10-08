import { type ActionFunctionArgs, json } from '@remix-run/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const buildEmail = (record: { name: string; url: string; code: string }) => {
    return `<div>
<p>Hey ${record.name} 👋🏻</p>
<p>
    I'd like to invite you to my backyard birthday party. We'll be celebrating with a bonfire and some tasty food.
</p>
<p>
    If you could RSVP as soon as possible that
    would be most helpful. (Significant others and kids welcome)
</p>
<p>
    Instructions:
</p>
<ul
    style={{
        listStyleType: 'disc',
        listStylePosition: 'inside',
    }}
>
    <li>
        Follow this link: <a href="${record.url}">${record.url}</a>
    </li>
    <li>Enter the passcode: ${record.code}</li>
    <li>Fill out the form</li>
    <li>Click "Send"</li>
</ul>
<p>Hope to see you there 🎈</p>
</div>`;
};

export async function action({ request }: ActionFunctionArgs) {
    if (request.method === 'POST') {
        const form = await request.formData();

        const from = 'Seth Davis <hey@sethdavis.io>';
        const to = JSON.parse(String(form.get('to')));
        const subject = `Invitation to Seth's birthday party`;
        const record = JSON.parse(String(form.get('record')));
        const html = buildEmail(record);
        const payload = {
            from,
            to,
            subject,
            html,
        };

        console.log({ payload });

        const { data, error } = await resend.emails.send(payload);

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
