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

interface TechStackLogosProps {
    logos: string[];
}

export function TechStackLogos({ logos }: TechStackLogosProps) {
    const logoProps = { className: cx('block w-6 h-6') };

    const logoMap: Record<string, (props: any) => ReactNode> = {
        'better-auth': (props) => <BetterAuthLogo {...logoProps} {...props} />,
        'react-router': (props) => (
            <ReactRouterLogo {...logoProps} {...props} />
        ),
        docusaurus: (props) => <DocusaurusLogo {...logoProps} {...props} />,
        github: (props) => <GitHubLogo {...logoProps} {...props} />,
        keystone: (props) => <MCPLogo {...logoProps} {...props} />,
        mcp: (props) => <MCPLogo {...logoProps} {...props} />,
        obsidian: (props) => <ObsidianLogo {...logoProps} {...props} />,
        postgres: (props) => <PostgresLogo {...logoProps} {...props} />,
        prisma: (props) => <PrismaLogo {...logoProps} {...props} />,
        railway: (props) => <RailwayLogo {...logoProps} {...props} />,
        react: (props) => <ReactLogo {...logoProps} {...props} />,
        tailwind: (props) => <TailwindLogo {...logoProps} {...props} />,
        trigger: (props) => <TriggerDevLogo {...logoProps} {...props} />,
        typescript: (props) => <TypescriptLogo {...logoProps} {...props} />
    };

    const titleMap: Record<string, string> = {
        'better-auth': 'Better Auth',
        'react-router': 'React Router',
        docusaurus: 'Docusaurus',
        github: 'GitHub',
        keystone: 'Keystone',
        mcp: 'Model Context Protocol',
        obsidian: 'Obsidian',
        postgres: 'PostgreSQL',
        prisma: 'Prisma',
        railway: 'Railway',
        react: 'React',
        tailwind: 'Tailwind CSS',
        trigger: 'Trigger.dev',
        typescript: 'TypeScript'
    };

    const urlMap: Record<string, string> = {
        'better-auth': 'https://betterauth.dev/',
        'react-router': 'https://reactrouter.com/',
        docusaurus: 'https://docusaurus.io/',
        github: 'https://github.com/',
        keystone: 'https://keystonejs.com/',
        mcp: 'https://modelcontextprotocol.org/',
        obsidian: 'https://obsidian.md/',
        postgres: 'https://www.postgresql.org/',
        prisma: 'https://www.prisma.io/',
        railway: 'https://railway.app/',
        react: 'https://react.dev/',
        tailwind: 'https://tailwindcss.com/',
        trigger: 'https://trigger.dev/',
        typescript: 'https://www.typescriptlang.org/'
    };

    const LogoComponent: React.FunctionComponent<{
        logoName: string;
        [key: string]: any;
    }> = ({ logoName, ...props }) => logoMap[logoName](props);

    return (
        <>
            {logos.map((logoName) => (
                <Tooltip content={titleMap[logoName]} key={logoName}>
                    <Linky to={urlMap[logoName]} external>
                        <LogoComponent logoName={logoName} tabIndex={-1} />
                    </Linky>
                </Tooltip>
            ))}
        </>
    );
}
