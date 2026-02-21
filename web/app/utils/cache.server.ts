import { FlatCache } from 'flat-cache';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { client } from '~/utils/graphql.server';

const cache = new FlatCache({
    ttl: 0, // TTL managed per-call via explicit expiry metadata
    lruSize: 500
});

interface CacheEntry<T> {
    data: T;
    expiresAt: number;
}

export async function cachedRequest<TData>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document: TypedDocumentNode<TData, any>,
    variables?: Record<string, unknown>,
    ttlMs = 15 * 60 * 1000 // 15 minutes default
): Promise<TData> {
    const key = JSON.stringify({
        query: document,
        variables: variables ?? null
    });

    const entry = cache.get<CacheEntry<TData>>(key);

    if (entry && entry.expiresAt > Date.now()) {
        return entry.data;
    }

    const data = await client.request<TData>(document, variables);

    cache.set(key, {
        data,
        expiresAt: Date.now() + ttlMs
    } satisfies CacheEntry<TData>);

    return data;
}
