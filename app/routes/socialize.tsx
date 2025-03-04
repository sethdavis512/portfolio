import { redirect } from 'react-router';

export async function loader() {
    return redirect(
        'https://facetime.apple.com/join#v=1&p=hfAc33FREe+8FwYsLQZ+aQ&k=HijbaHltbQZTVHfedYU9fVd69AiZIO9PfK4Z3LMBTeI'
    );
}
