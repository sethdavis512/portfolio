import { redirect } from '@remix-run/node';

export async function loader() {
    return redirect('https://tidycal.com/sethdavis512');
}
