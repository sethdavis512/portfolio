import { ReactNode } from 'react';

const SocialButton = ({
    children,
    className,
    href
}: {
    children: ReactNode;
    href: string;
    className?: string;
}) => (
    <a className={`card text-green-500 w-full mb-3 ${className}`} href={href}>
        {children}
    </a>
);

export default SocialButton;
