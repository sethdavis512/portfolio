import Airtable from 'airtable';

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_PAT });

export const portfolioBase = airtable.base(process.env.AIRTABLE_BASE_ID!);
