/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Form, useLoaderData } from '@remix-run/react';
import {
    Button,
    Card,
    Heading,
    Select,
    TextArea,
    TextField,
} from '@radix-ui/themes';
import {
    ActionFunctionArgs,
    json,
    LoaderFunctionArgs,
    redirect,
} from '@remix-run/node';
import invariant from 'tiny-invariant';

import base from '../airtable.server';
import Divider from '~/components/Divider';

enum Column {
    CODE = 'Code',
    NAME = 'Name',
    ATTENDING = 'Attending',
    PEOPLE_ATTENDING = 'People attending',
    NOTE = 'Note',
}

export async function loader({ params }: LoaderFunctionArgs) {
    invariant(params.email, 'Email param not found');

    try {
        const [record] = await base('Invitees')
            .select({
                maxRecords: 1,
                filterByFormula: `{Email} = "${params.email}"`,
            })
            .all();

        return json({ record }, 200);
    } catch (error) {
        throw Error('Airtable failed to fetch');
    }
}

export async function action({ request }: ActionFunctionArgs) {
    const form = await request.formData();
    const attending = String(form.get('attending'));
    const peopleAttending = Number(form.get('peopleAttending'));
    const recordId = String(form.get('recordId'));
    const note = String(form.get('note'));

    try {
        const partyBase = await base('Invitees');
        await partyBase.update([
            {
                id: recordId,
                fields: {
                    [Column.ATTENDING]: attending,
                    [Column.PEOPLE_ATTENDING]:
                        attending === 'No' ? 0 : peopleAttending,
                    [Column.NOTE]: note,
                },
            },
        ]);

        return redirect('/birthday/rsvp/success');
    } catch (error) {
        throw Error('Update failed', error as Error);
    }
}

export default function BirthdayRSVPRoute() {
    const { record } = useLoaderData<typeof loader>();
    const relevant = record.fields;

    const [passcode, setPasscode] = useState('');
    const [isAttending, setIsAttending] = useState('Yes');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setPasscode(event.target.value.toUpperCase());

    const isCodeCorrect = passcode === relevant[Column.CODE];

    return (
        <Card>
            <Heading as="h3" size="4" className="mb-4">
                RSVP
            </Heading>
            <fieldset className={`mb-${isCodeCorrect ? 4 : 0} space-y-2`}>
                <label
                    htmlFor="passcode"
                    className={`${isCodeCorrect ? '' : ''} block font-bold`}
                >
                    Passcode
                    <span className="block text-sm text-zinc-400">
                        Enter 4 character code from the email
                    </span>
                </label>
                <TextField.Root
                    className="max-w-xs uppercase"
                    id="passcode"
                    size="3"
                    radius="large"
                    onChange={handleChange}
                />
            </fieldset>
            {isCodeCorrect && (
                <>
                    <Divider />
                    <Form method="POST">
                        <input
                            type="hidden"
                            name="recordId"
                            value={record.id}
                        />
                        <div className="space-y-4">
                            <Heading as="h2" size="4" className="mt-4 block">
                                Hey {relevant[Column.NAME] as string} 👋🏻
                            </Heading>
                            <fieldset className="flex flex-col gap-2">
                                <label htmlFor="attending">
                                    Will you be attending?
                                </label>
                                <Select.Root
                                    defaultValue="Yes"
                                    name="attending"
                                    onValueChange={(value) =>
                                        setIsAttending(value)
                                    }
                                    value={isAttending}
                                >
                                    <Select.Trigger id="attending" />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Item value="Yes">
                                                Yes
                                            </Select.Item>
                                            <Select.Item value="No">
                                                No
                                            </Select.Item>
                                            <Select.Item value="Maybe">
                                                Maybe
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                                <label htmlFor="peopleAttending">
                                    How many humans altogether?
                                </label>
                                <Select.Root
                                    defaultValue="1"
                                    name="peopleAttending"
                                    disabled={isAttending === 'No'}
                                >
                                    <Select.Trigger id="peopleAttending" />
                                    <Select.Content>
                                        <Select.Group>
                                            <Select.Item value="1">
                                                1
                                            </Select.Item>
                                            <Select.Item value="2">
                                                2
                                            </Select.Item>
                                            <Select.Item value="3">
                                                3
                                            </Select.Item>
                                            <Select.Item value="4">
                                                4
                                            </Select.Item>
                                            <Select.Item value="5">
                                                5
                                            </Select.Item>
                                        </Select.Group>
                                    </Select.Content>
                                </Select.Root>
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                                <label htmlFor="note">Note</label>
                                <TextArea id="note" name="note" />
                            </fieldset>
                            <fieldset className="flex flex-col gap-2">
                                <Button type="submit" size="4">
                                    Send ✈
                                </Button>
                            </fieldset>
                        </div>
                    </Form>
                </>
            )}
        </Card>
    );
}
