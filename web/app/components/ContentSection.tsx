import { cx } from 'cva.config';

export function ContentSection({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section className={cx(`py-4 md:py-0`, className)}>{children}</section>
    );
}
