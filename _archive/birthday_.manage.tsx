import { json } from '@remix-run/node';
import base from '../airtable.server';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { Button, Card } from '@radix-ui/themes';

export async function loader() {
    try {
        const partyBase = await base('Invitees');
        const records = await partyBase.select({ view: 'Grid view' }).all();

        return json({
            records: records
                .filter((record) => !record.get('Attending'))
                .map((record) => ({
                    id: String(record.id),
                    code: String(record.id.slice(-4).toUpperCase()),
                    email: String(record.get('Email')),
                    name: String(record.get('Name')),
                    url: String(record.get('URL')),
                })),
        });
    } catch (error) {
        throw Error('Airtable failed to fetch');
    }
}

export default function BirthdayManageRoute() {
    const { records } = useLoaderData<typeof loader>();
    const emailFetcher = useFetcher();

    return (
        <div className="p-8">
            <ul className="space-y-4">
                {records.map((record) => (
                    <li key={record.id}>
                        <Card className="flex max-w-3xl justify-between gap-4 whitespace-pre border border-green-500">
                            <h2 className="text-2xl">{record.name}</h2>
                            <div></div>
                            <div>
                                <emailFetcher.Form
                                    method="POST"
                                    action="/api/email/send"
                                    onSubmit={() => {
                                        if (
                                            confirm(
                                                `Send ${JSON.stringify(record, null, 4)}`
                                            )
                                        ) {
                                            emailFetcher.submit({ record });
                                        }
                                    }}
                                >
                                    <input
                                        type="hidden"
                                        name="to"
                                        value={JSON.stringify([record.email])}
                                    />
                                    <input
                                        type="hidden"
                                        name="record"
                                        value={JSON.stringify(record)}
                                    />
                                    <Button type="submit">
                                        Send {record.name} an email
                                    </Button>
                                </emailFetcher.Form>
                            </div>

                            {/* <Code>
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
                            </Code> */}
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
}
