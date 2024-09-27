import { json } from '@remix-run/node';
import base from '../airtable.server';
import { useLoaderData } from '@remix-run/react';
import { Card, Code } from '@radix-ui/themes';

export async function loader() {
    try {
        const partyBase = await base('Invitees');
        const records = await partyBase.select({ view: 'Grid view' }).all();

        return json({
            records: records.map((record) => ({
                id: String(record.id),
                name: String(record.get('Name')),
                code: String(record.id.slice(-4).toUpperCase()),
                url: String(record.get('URL')),
            })),
        });
    } catch (error) {
        throw Error('Airtable failed to fetch');
    }
}

export default function BirthdayManageRoute() {
    const { records } = useLoaderData<typeof loader>();

    return (
        <>
            <ul>
                {records.map((record) => (
                    <li key={record.id}>
                        <Card className="max-w-3xl whitespace-pre border border-green-500">
                            <Code>
                                {`<div>
<p>Hey ${record.name as string} 👋🏻</p>
<p>
    I'd like to formally invite you to my
    birthday party!
</p>
<p>
    If you could RSVP as soon as possible that
    would be most helpful.
</p>
<ul
    style={{
        listStyleType: 'disc',
        listStylePosition: 'inside',
    }}
>
    <li>
        Follow this link:{' '}
        <a href="${record.url}">
            ${record.url}
        </a>
    </li>
    <li>Enter the passcode: ${record.code}</li>
    <li>Fill out the form</li>
    <li>Hit Send</li>
</ul>
<p>Hope to see you there 🎈</p>
</div>`}
                            </Code>
                        </Card>
                    </li>
                ))}
            </ul>
        </>
    );
}
