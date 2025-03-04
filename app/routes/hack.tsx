import { redirect } from 'react-router';

export async function loader() {
    return redirect(
        'https://facetime.apple.com/join#v=1&p=00okx2zVEe+Yzb69hduHtg&k=IwFxWMnijmlI-mvsLsLu6GPNAxu_nlci8j6rRxRg27k'
    );
}
