import { Callout } from '@radix-ui/themes';

export default function SuccessRoute() {
    return (
        <>
            <Callout.Root color="green">
                <Callout.Icon>🎉</Callout.Icon>
                <Callout.Text>
                    Success! Thank you for your response
                </Callout.Text>
            </Callout.Root>
        </>
    );
}
