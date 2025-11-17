import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Airtable = require('airtable') as typeof import('airtable');

const airtableClient = new Airtable({
    apiKey: process.env.AIRTABLE_PAT
});

export const portfolioBase = airtableClient.base(process.env.AIRTABLE_BASE_ID!);
