// import type { ActionFunction, LoaderFunction } from "remix";
import { Outlet } from 'remix';
import austinFCStyles from '../austin-fc.css';
import logo from '../images/austin-fc-logo.svg';

export function links() {
    return [{ rel: 'stylesheet', href: austinFCStyles }];
}

// export const meta = () => {
//    return [{ rel: "stylesheet", href: '' }];
// };

// export const loader: LoaderFunction = async () => {
//    return { ok: true };
// };

// export const action: ActionFunction = async ({ request }) => {
//     console.log(request);
//     return null;
// };

export default function AustinFCRoute() {
    return (
        <div className="sm:w-3/4 m-auto max-w-xl">
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
