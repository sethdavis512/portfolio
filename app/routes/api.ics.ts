import type { ActionFunctionArgs } from '@remix-run/node';
import ics from 'ics';
import kebabCase from 'lodash/kebabCase';

export async function action({ request }: ActionFunctionArgs) {
    if (request.method === 'POST') {
        const form = await request.formData();
        const title = String(form.get('title'));

        const { value } = ics.createEvent({
            start: [2024, 10, 11, 18, 0],
            duration: { hours: 3, minutes: 0 },
            title,
            description: 'Bonfire at the Davis house',
            location: '1109 Oakwood Drive Leander TX 78641',
            // url: 'http://www.bolderboulder.com/',
            // geo: { lat: 40.0095, lon: 105.2669 },
            // categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
            // status: 'CONFIRMED',
            // busyStatus: 'BUSY',
            organizer: {
                name: 'Seth Davis',
                email: 'sethdavis512@gmail.com',
            },
            // attendees: [
            //     {
            //         name: 'Adam Gibbons',
            //         email: 'adam@example.com',
            //         rsvp: true,
            //         partstat: 'ACCEPTED',
            //         role: 'REQ-PARTICIPANT',
            //     },
            //     {
            //         name: 'Brittany Seaton',
            //         email: 'brittany@example2.org',
            //         dir: 'https://linkedin.com/in/brittanyseaton',
            //         role: 'OPT-PARTICIPANT',
            //     },
            // ],
        });

        const icsBuffer = Buffer.from(value!, 'utf-8');

        return new Response(icsBuffer, {
            status: 200,
            headers: {
                'Content-Disposition': `attachment; filename="${kebabCase(title)}.ics"`,
                'Content-Type': 'text/calendar;charset=utf-8',
            },
        });
    }
}
