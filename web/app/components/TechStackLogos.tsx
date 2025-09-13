import type { ReactNode } from 'react';
import { cx } from 'cva.config';

import { BetterAuthLogo } from './BetterAuthLogo';
import { DocusaurusLogo } from './DocusaurusLogo';
import { GitHubLogo } from './GitHubLogo';
import { MCPLogo } from './MCPLogo';
import { ObsidianLogo } from './ObsidianLogo';
import { PostgresLogo } from './PostgresLogo';
import { PrismaLogo } from './PrismaLogo';
import { RailwayLogo } from './RailwayLogo';
import { ReactLogo } from './ReactLogo';
import { ReactRouterLogo } from './ReactRouterLogo';
import { TailwindLogo } from './TailwindLogo';
import { TypescriptLogo } from './TypescriptLogo';
import Tooltip from './Tooltip';
import Linky from './Linky';

interface TechStackLogosProps {
    logos: string[];
}

export function TechStackLogos({ logos }: TechStackLogosProps) {
    const logoProps = { className: cx('block w-6 h-6') };

    const logoMap: Record<string, (props: any) => ReactNode> = {
        mcp: (props) => <MCPLogo {...logoProps} {...props} />,
        typescript: (props) => <TypescriptLogo {...logoProps} {...props} />,
        react: (props) => <ReactLogo {...logoProps} {...props} />,
        'react-router': (props) => (
            <ReactRouterLogo {...logoProps} {...props} />
        ),
        tailwind: (props) => <TailwindLogo {...logoProps} {...props} />,
        'better-auth': (props) => <BetterAuthLogo {...logoProps} {...props} />,
        prisma: (props) => <PrismaLogo {...logoProps} {...props} />,
        postgres: (props) => <PostgresLogo {...logoProps} {...props} />,
        railway: (props) => <RailwayLogo {...logoProps} {...props} />,
        keystone: (props) => <MCPLogo {...logoProps} {...props} />,
        docusaurus: (props) => <DocusaurusLogo {...logoProps} {...props} />,
        github: (props) => <GitHubLogo {...logoProps} {...props} />,
        obsidian: (props) => <ObsidianLogo {...logoProps} {...props} />
    };

    const titleMap: Record<string, string> = {
        mcp: 'Model Context Protocol',
        typescript: 'TypeScript',
        react: 'React',
        'react-router': 'React Router',
        tailwind: 'Tailwind CSS',
        'better-auth': 'Better Auth',
        prisma: 'Prisma',
        postgres: 'PostgreSQL',
        railway: 'Railway',
        keystone: 'Keystone',
        docusaurus: 'Docusaurus',
        github: 'GitHub',
        obsidian: 'Obsidian'
    };

    const urlMap: Record<string, string> = {
        mcp: 'https://modelcontextprotocol.org/',
        typescript: 'https://www.typescriptlang.org/',
        react: 'https://react.dev/',
        'react-router': 'https://reactrouter.com/',
        tailwind: 'https://tailwindcss.com/',
        'better-auth': 'https://betterauth.dev/',
        prisma: 'https://www.prisma.io/',
        postgres: 'https://www.postgresql.org/',
        railway: 'https://railway.app/',
        keystone: 'https://keystonejs.com/',
        docusaurus: 'https://docusaurus.io/',
        github: 'https://github.com/',
        obsidian: 'https://obsidian.md/'
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
