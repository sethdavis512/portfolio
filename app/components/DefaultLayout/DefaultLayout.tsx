import { ReactNode } from 'react';

const DefaultLayout = ({
    header,
    main
}: {
    header: ReactNode;
    main: ReactNode;
}) => {
    return (
        <div className="w-full h-full px-6 py-4 flex flex-col items-center justify-center">
            <header className="">{header}</header>
            <main className="w-full">{main}</main>
        </div>
    );
};

export default DefaultLayout;
