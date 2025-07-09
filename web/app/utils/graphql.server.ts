import { GraphQLClient } from 'graphql-request';

const endpoint =
    process.env.GRAPHQL_ENDPOINT || 'https://admin.sethdavis.tech/api/graphql';

if (!endpoint || endpoint === 'undefined') {
    throw new Error('GRAPHQL_ENDPOINT environment variable is not set');
}

export const client = new GraphQLClient(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
});
