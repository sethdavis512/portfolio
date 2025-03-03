import Airtable from 'airtable';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_PAT,
});

export default Airtable.base(process.env.AIRTABLE_BASE_ID!);
