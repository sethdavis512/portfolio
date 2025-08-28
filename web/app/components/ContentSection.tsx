export function ContentSection({
    children,
    className = ''
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <section className={`py-8 ${className}`}>{children}</section>;
}
