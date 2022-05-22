// import type { ActionFunction, LoaderFunction } from "remix";

// export const meta = () => {
//    return [{ rel: "stylesheet", href: '' }];
// };

// export const links = () => {
//    return [{ rel: "stylesheet", href: '' }];
// };

// export const loader: LoaderFunction = async () => {
//    return { ok: true };
// };

// export const action: ActionFunction = async ({ request }) => {
//     console.log(request);
//     return null;
// };

export default function CodepenRoute() {
    return (
        <div className="">
            <h1>Codepen</h1>
            <p
                className="codepen"
                data-height="540"
                data-theme-id="dark"
                data-default-tab="html,result"
                data-slug-hash="jYMrEx"
                data-user="sethdavis512"
                // style="height: 540px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
            >
                <span>
                    See the Pen{' '}
                    <a href="https://codepen.io/sethdavis512/pen/jYMrEx">
                        React.js Wizard Flow
                    </a>{' '}
                    by Seth Davis (
                    <a href="https://codepen.io/sethdavis512">@sethdavis512</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                </span>
            </p>

            <script
                async
                src="https://cpwebassets.codepen.io/assets/embed/ei.js"
            ></script>
        </div>
    );
}
