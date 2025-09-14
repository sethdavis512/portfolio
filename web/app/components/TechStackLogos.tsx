import type { ReactNode } from 'react';
import { cx } from 'cva.config';

import { BetterAuthLogo } from './logos/BetterAuthLogo';
import { DocusaurusLogo } from './logos/DocusaurusLogo';
import { GitHubLogo } from './logos/GitHubLogo';
import { MCPLogo } from './logos/MCPLogo';
import { ObsidianLogo } from './logos/ObsidianLogo';
import { PostgresLogo } from './logos/PostgresLogo';
import { PrismaLogo } from './logos/PrismaLogo';
import { RailwayLogo } from './logos/RailwayLogo';
import { ReactLogo } from './logos/ReactLogo';
import { ReactRouterLogo } from './logos/ReactRouterLogo';
import { TailwindLogo } from './TailwindLogo';
import { Tooltip } from './Tooltip';
import { TriggerDevLogo } from './logos/TriggerDevLogo';
import { TypescriptLogo } from './logos/TypescriptLogo';
import { Linky } from './Linky';
import { VibeCodeLogo } from './logos/VibeCodeLogo';
import { PolarLogo } from './logos/PolarLogo';
import { KeystoneLogo } from './logos/KeystoneLogo';
import { CloudinaryLogo } from './logos/CloudinaryLogo';

export type LogoName =
    | 'better-auth'
    | 'cloudinary'
    | 'docusaurus'
    | 'github'
    | 'keystone'
    | 'mcp'
    | 'obsidian'
    | 'postgres'
    | 'polar'
    | 'prisma'
    | 'railway'
    | 'react'
    | 'react-router'
    | 'tailwind'
    | 'trigger'
    | 'typescript'
    | 'vibe';

interface TechStackLogosProps {
    logos: LogoName[];
}

export function TechStackLogos({ logos }: TechStackLogosProps) {
    const logoProps = { className: cx('block w-6 h-6') };

    const logoConfig: Record<
        LogoName,
        {
            component: (props: any) => ReactNode;
            title: string;
            url: string;
        }
    > = {
        'better-auth': {
            component: (props) => <BetterAuthLogo {...logoProps} {...props} />,
            title: 'Better Auth',
            url: 'https://betterauth.dev/'
        },
        cloudinary: {
            component: (props) => <CloudinaryLogo {...logoProps} {...props} />,
            title: 'Cloudinary',
            url: 'https://cloudinary.com/'
        },
        'react-router': {
            component: (props) => <ReactRouterLogo {...logoProps} {...props} />,
            title: 'React Router',
            url: 'https://reactrouter.com/'
        },
        docusaurus: {
            component: (props) => <DocusaurusLogo {...logoProps} {...props} />,
            title: 'Docusaurus',
            url: 'https://docusaurus.io/'
        },
        github: {
            component: (props) => <GitHubLogo {...logoProps} {...props} />,
            title: 'GitHub',
            url: 'https://github.com/'
        },
        keystone: {
            component: (props) => <KeystoneLogo {...logoProps} {...props} />,
            title: 'Keystone',
            url: 'https://keystonejs.com/'
        },
        mcp: {
            component: (props) => <MCPLogo {...logoProps} {...props} />,
            title: 'Model Context Protocol',
            url: 'https://modelcontextprotocol.org/'
        },
        obsidian: {
            component: (props) => <ObsidianLogo {...logoProps} {...props} />,
            title: 'Obsidian',
            url: 'https://obsidian.md/'
        },
        postgres: {
            component: (props) => <PostgresLogo {...logoProps} {...props} />,
            title: 'PostgreSQL',
            url: 'https://www.postgresql.org/'
        },
        polar: {
            component: (props) => <PolarLogo {...logoProps} {...props} />,
            title: 'Polar',
            url: 'https://polar.sh/'
        },
        prisma: {
            component: (props) => <PrismaLogo {...logoProps} {...props} />,
            title: 'Prisma',
            url: 'https://www.prisma.io/'
        },
        railway: {
            component: (props) => <RailwayLogo {...logoProps} {...props} />,
            title: 'Railway',
            url: 'https://railway.app/'
        },
        react: {
            component: (props) => <ReactLogo {...logoProps} {...props} />,
            title: 'React',
            url: 'https://react.dev/'
        },
        tailwind: {
            component: (props) => <TailwindLogo {...logoProps} {...props} />,
            title: 'Tailwind CSS',
            url: 'https://tailwindcss.com/'
        },
        trigger: {
            component: (props) => <TriggerDevLogo {...logoProps} {...props} />,
            title: 'Trigger.dev',
            url: 'https://trigger.dev/'
        },
        typescript: {
            component: (props) => <TypescriptLogo {...logoProps} {...props} />,
            title: 'TypeScript',
            url: 'https://www.typescriptlang.org/'
        },
        vibe: {
            component: (props) => <VibeCodeLogo {...logoProps} {...props} />,
            title: 'Vibe Code',
            url: 'https://www.ibm.com/think/topics/vibe-coding'
        }
    };

    return (
        <>
            {logos.map((logoName) => {
                const config = logoConfig[logoName];
                return (
                    <Tooltip content={config.title} key={logoName}>
                        <Linky to={config.url} external>
                            {config.component({ tabIndex: -1 })}
                        </Linky>
                    </Tooltip>
                );
            })}
        </>
    );
}
