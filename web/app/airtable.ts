import Airtable from 'airtable';

export const portfolioBase = new Airtable({
    apiKey: process.env.AIRTABLE_PAT
}).base(process.env.AIRTABLE_BASE_ID!);
