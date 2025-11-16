import { portfolioBase } from '~/airtable';

export function getListOfInterestedPeople() {
    portfolioBase('Customers')
        .select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 10,
            view: 'Grid view'
        })
        .eachPage(
            function page(records, fetchNextPage) {
                // This function (`page`) will get called for each page of records.

                records.forEach(function (record) {
                    console.log(
                        record.get('First name'),
                        record.get('Last name'),
                        record.get('Email'),
                        record.get('Note')
                    );
                });

                // To fetch the next page of records, call `fetchNextPage`.
                // If there are more records, `page` will get called again.
                // If there are no more records, `done` will get called.
                fetchNextPage();
            },
            function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            }
        );
}
