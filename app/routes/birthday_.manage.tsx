import { json } from '@remix-run/node';
import base from '../airtable.server';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
    try {
        const partyBase = await base('Invitees');
        const records = await partyBase.select({ view: 'Grid view' }).all();
        console.log({ records });

        return json({
            records: records.map((record) => ({
                id: record.id,
                name: record.get('Name'),
                code: record.id.slice(-4).toUpperCase(),
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
            <pre>
                <code>{JSON.stringify(records, null, 4)}</code>
            </pre>
        </>
    );
}
