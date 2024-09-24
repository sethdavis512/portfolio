import type { ActionFunctionArgs } from '@remix-run/node';
import ics from 'ics';
import kebabCase from 'lodash/kebabCase';

export async function action({ request }: ActionFunctionArgs) {
    if (request.method === 'POST') {
        const form = await request.formData();
        const title = String(form.get('title'));

        const year = 2024;
        const month = 10;
        const day = 11;
        const hour = 18;
        const minute = 0;
        const start: [number, number, number, number, number] = [
            year,
            month,
            day,
            hour,
            minute,
        ];

        const durationHours = 3;
        const durationMinutes = 3;
        const duration = { hours: durationHours, minutes: durationMinutes };

        const description = 'Bonfire at the Davis house';
        const location = '1109 Oakwood Drive Leander TX 78641';
        const url = 'https://sethdavis.io/birthday';

        const organizer = {
            name: 'Seth Davis',
            email: 'sethdavis512@gmail.com',
        };

        const { value } = ics.createEvent({
            start,
            duration,
            title,
            description,
            location,
            url,
            // geo: { lat: 40.0095, lon: 105.2669 },
            // categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
            // status: 'CONFIRMED',
            // busyStatus: 'BUSY',
            organizer,
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
