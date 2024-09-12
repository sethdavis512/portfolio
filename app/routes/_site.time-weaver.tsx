import { HammerIcon } from 'lucide-react';
import { Tooltip } from '@lemonsqueezy/wedges';

import ExternalLink from '~/components/ExternalLink';
import Flex from '~/components/Flex';
import Panel from '~/components/Panel';
import ReactLogo from '~/components/ReactLogo';
import RemixLogo from '~/components/RemixLogo';
import WedgesLogo from '~/components/WedgesLogo';
import { BORDER_COLOR, largeIconProps } from '~/constants';
import Heading from '~/components/Heading';
import MongoLogo from '~/components/MongoLogo';
import timeWeaverScreenshot from '../images/tw-screenshot-1.png';

export default function CRMRoute() {
    const logoProps = { className: 'h-6 w-6' };

    return (
        <Panel
            icon={<HammerIcon {...largeIconProps} />}
            heading="TimeWeaver"
            className="space-y-6"
        >
            <Flex className="gap-4">
                <div>
                    <p>Stack:</p>
                </div>
                <Tooltip content="React">
                    <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ReactLogo {...logoProps} />
                    </a>
                </Tooltip>
                <Tooltip content="Remix">
                    <a
                        href="https://remix.run/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <RemixLogo {...logoProps} />
                    </a>
                </Tooltip>
                <Tooltip content="Wedges UI">
                    <a
                        href="https://www.lemonsqueezy.com/wedges"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <WedgesLogo {...logoProps} />
                    </a>
                </Tooltip>
                <Tooltip content="MongoDB">
                    <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MongoLogo {...logoProps} />
                    </a>
                </Tooltip>
            </Flex>
            <img
                className={`w-full ${BORDER_COLOR} rounded-lg`}
                src={timeWeaverScreenshot}
                alt="Screenshot of browser displaying Tech with Seth Customer Relations Manager web application"
            />
            <Heading>Description</Heading>
            <p>
                TimeWeaver is a tool to help manage events across multiple
                timelines. Events that are approaching the current time are
                intensified with borders and colors. Countdown timers inform
                users how much time they have until the next item on the agenda.
            </p>
            <Heading>Features</Heading>
            <ul className="list-inside list-disc space-y-2">
                <li>View timelines collection</li>
                <li>View timeline of events</li>
                <li>Create timelines (Coming soon)</li>
                <li>Create timeline events (Coming soon)</li>
            </ul>
            <Heading>Schema</Heading>
            <pre
                className={`m-0 rounded-lg bg-zinc-200 px-4 dark:bg-zinc-900 ${BORDER_COLOR}`}
            >
                <code>{`
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
}

model User {
    id             String          @id @default(auto()) @map("_id") @db.ObjectId
    createdAt      DateTime        @default(now())
    updatedAt      DateTime        @updatedAt
    email          String          @unique
    password       String
    profile        Profile?
    timelines      Timeline[]
    timelineEvents TimelineEvent[]
}

model Profile {
    id        String   @id @default(auto()) @map("_id") @db.ObjectId
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    firstName String?
    lastName  String?
    bio       String?
    user      User     @relation(fields: [userId], references: [id])
    userId    String   @unique @db.ObjectId
}

model Timeline {
    id          String          @id @default(auto()) @map("_id") @db.ObjectId
    createdAt   DateTime        @default(now())
    createdBy   User            @relation(fields: [createdById], references: [id])
    createdById String          @db.ObjectId
    updatedAt   DateTime        @updatedAt
    slug        String          @unique
    name        String
    description String
    events      TimelineEvent[] @relation(fields: [eventIds], references: [id])
    eventIds    String[]        @db.ObjectId
    start       DateTime
    end         DateTime
}

model TimelineEvent {
    id          String     @id @default(auto()) @map("_id") @db.ObjectId
    createdAt   DateTime   @default(now())
    createdBy   User       @relation(fields: [createdById], references: [id])
    createdById String     @db.ObjectId
    updatedAt   DateTime   @updatedAt
    name        String
    description String
    slug        String     @unique
    timelines   Timeline[] @relation(fields: [timelineIds], references: [id])
    timelineIds String[]   @db.ObjectId
    start       DateTime
    end         DateTime
}
            `}</code>
            </pre>
            <Heading>Shareables</Heading>
            <Flex className="flex-col items-start">
                <ExternalLink to="https://github.com/sethdavis512/time-weaver">
                    View the code
                </ExternalLink>
                <ExternalLink to="https://time-weaver.fly.dev/">
                    Visit the project
                </ExternalLink>
            </Flex>
        </Panel>
    );
}
