import { ApifyClient } from 'apify-client';

export default async function handler(req, res) {
    const { itemToSearch } = req.query;

    // Initialize the ApifyClient with API token
    const client = new ApifyClient({
        token: 'apify_api_oFDUjvK1v1GWB7DS6pqTjjqfXpvVAW1bl7My',
    });

    // Prepare actor input
    const input = {
        "queries": [
            itemToSearch.toString()
        ],
        "maxPostCount": 30,
        "extendOutputFunction": ($) => {
            const result = {};
            // Uncomment to modify the title of each item of the output
            // result.title = 'Test Title';
            return result;
        }
    };

    let responseArray = [];
    // Run the actor and wait for it to finish
    const run = await client.actor("emastra/google-shopping-scraper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        responseArray.push(item);
    });
    res.status(200).json({ response: responseArray })
}
