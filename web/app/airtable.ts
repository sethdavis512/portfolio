import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Airtable = require('airtable') as typeof import('airtable');

let portfolioBaseInstance: ReturnType<InstanceType<typeof Airtable>['base']> | null = null;

export function getPortfolioBase() {
    if (!portfolioBaseInstance) {
        const airtableClient = new Airtable({
            apiKey: process.env.AIRTABLE_PAT
        });
        portfolioBaseInstance = airtableClient.base(process.env.AIRTABLE_BASE_ID!);
    }
    return portfolioBaseInstance;
}
