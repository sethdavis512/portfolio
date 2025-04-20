export function getUniqueId(
    prefix = 'my-prefix',
    length = 8,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
) {
    const getRandomChar = (chars: string) =>
        chars.charAt(Math.floor(Math.random() * chars.length));

    const hash = [...Array(length)]
        .map(() => getRandomChar(characters))
        .join('');

    return `${prefix ? `${prefix}-` : ''}${hash}`;
}

export function formatToUSD(number: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number);
}

export function formatToDate(date: Date) {
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date value');
    }
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: '2-digit'
    }).format(date);
}
