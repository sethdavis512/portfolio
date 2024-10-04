export function getUniqueId(
    prefix: string = 'my-prefix',
    length: number = 8,
    characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string {
    const hash = [...Array(length)]
        .map(() =>
            characters.charAt(Math.floor(Math.random() * characters.length))
        )
        .join('');

    return `${prefix ? `${prefix}-` : ''}${hash}`;
}

export function formatToUSD(number: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number);
}
