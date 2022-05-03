import { ReactNode } from 'react';

const GradientHeading = ({
    children
}: {
    children: ReactNode;
}): JSX.Element => {
    return (
        <h2 className="text-3xl leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-emerald-600">
            {children}
        </h2>
    );
};

export default GradientHeading;
