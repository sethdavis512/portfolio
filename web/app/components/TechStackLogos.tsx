import type { ReactNode } from 'react';
import { cx } from 'cva.config';

import { BetterAuthLogo } from './logos/BetterAuthLogo';
import { CSSLogo } from './logos/CSSLogo';
import { DocusaurusLogo } from './logos/DocusaurusLogo';
import { GitHubLogo } from './logos/GitHubLogo';
import { JavaScriptLogo } from './logos/JavaScriptLogo';
import { VueLogo } from './logos/VueLogo';
import { MCPLogo } from './logos/MCPLogo';
import { ObsidianLogo } from './logos/ObsidianLogo';
import { PostgresLogo } from './logos/PostgresLogo';
import { PrismaLogo } from './logos/PrismaLogo';
import { RailwayLogo } from './logos/RailwayLogo';
import { ReactLogo } from './logos/ReactLogo';
import { ReactRouterLogo } from './logos/ReactRouterLogo';
import { RemotionLogo } from './logos/RemotionLogo';
import { TailwindLogo } from './logos/TailwindLogo';
import { Tooltip } from './Tooltip';
import { TriggerDevLogo } from './logos/TriggerDevLogo';
import { TypescriptLogo } from './logos/TypescriptLogo';
import { Linky } from './Linky';
import { VibeCodeLogo } from './logos/VibeCodeLogo';
import { PolarLogo } from './logos/PolarLogo';
import { KeystoneLogo } from './logos/KeystoneLogo';
import { CloudinaryLogo } from './logos/CloudinaryLogo';
import { DaisyUILogo } from './logos/DaisyUILogo';
import { WordPressLogo } from './logos/WordPressLogo';

export type LogoName =
    | 'better-auth'
    | 'cloudinary'
    | 'css'
    | 'daisy'
    | 'docusaurus'
    | 'github'
    | 'javascript'
    | 'keystone'
    | 'mcp'
    | 'obsidian'
    | 'postgres'
    | 'polar'
    | 'prisma'
    | 'railway'
    | 'react'
    | 'react-router'
    | 'remotion'
    | 'tailwind'
    | 'trigger'
    | 'typescript'
    | 'vibe'
    | 'vuejs'
    | 'wordpress';

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
        css: {
            component: (props) => <CSSLogo {...logoProps} {...props} />,
            title: 'CSS',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        'react-router': {
            component: (props) => <ReactRouterLogo {...logoProps} {...props} />,
            title: 'React Router',
            url: 'https://reactrouter.com/'
        },
        daisy: {
            component: (props) => <DaisyUILogo {...logoProps} {...props} />,
            title: 'DaisyUI',
            url: 'https://daisyui.com/'
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
        javascript: {
            component: (props) => <JavaScriptLogo {...logoProps} {...props} />,
            title: 'JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
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
        remotion: {
            component: (props) => <RemotionLogo {...logoProps} {...props} />,
            title: 'Remotion',
            url: 'https://www.remotion.dev/'
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
        },
        vuejs: {
            component: (props) => <VueLogo {...logoProps} {...props} />,
            title: 'Vue.js',
            url: 'https://vuejs.org/'
        },
        wordpress: {
            component: (props) => <WordPressLogo {...logoProps} {...props} />,
            title: 'WordPress',
            url: 'https://wordpress.org/'
        }
    };

    return (
        <>
            {logos.map((logoName, index) => {
                const config = logoConfig[logoName];
                return (
                    <Tooltip
                        content={config.title}
                        key={`${logoName}-${index}`}
                    >
                        <Linky to={config.url} external>
                            {config.component({ tabIndex: -1 })}
                        </Linky>
                    </Tooltip>
                );
            })}
        </>
    );
}
