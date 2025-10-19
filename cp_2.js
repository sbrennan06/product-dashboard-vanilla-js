//step 3: : In cp_2.js, define a function fetchProductsThen():
    // Use fetch() and .then() to retrieve external data
function fetchProductsThen() {
    const url = 'https://www.course-api.com/javascript-store-products';
    fetch(url)
    .then((res) => res.json())
    .then((products) => {
        products.forEach((item, i) => {
            const name = item?.fields?.name ?? item?.name ?? `(no name @ ${i})`;
            // Log each product’s name to the console
            console.log(`[then] product ${i + 1}: ${name}`);
        })
    })
    // Use .catch() to log any fetch errors
    .catch((err) => {
        console.error('[then] fetch error: could not load products',
            err?.message ?? '');
    });
}
fetchProductsThen();



    
