import { MetaFunction, Outlet } from 'remix';
import austinFCStyles from '../austin-fc.css';
import logo from '../images/austin-fc-logo.svg';

export function links() {
    return [{ rel: 'stylesheet', href: austinFCStyles }];
}

export const meta: MetaFunction = () => {
    return {
        title: 'Austin FC Schedule | Tech with Seth',
        description: 'Austin FC soccer team schedule'
    };
};

export default function AustinFCRoute() {
    return (
        <div className="sm:w-3/4 m-auto max-w-xl py-10 px-6">
            <div className="flex items-center">
                <div className="mr-2">
                    <img src={logo} width="75" />
                </div>
                <div>
                    <h1 className="text-4xl">Austin FC</h1>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
