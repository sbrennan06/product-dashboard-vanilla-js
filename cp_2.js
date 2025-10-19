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

// Step 4: Create a function fetchProductsAsync():
// Use async/await and try/catch to retrieve product data

async function fetchProductsAsync() {
    const url ='https://www.course-api.com/javascript-store-products';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error (`HTTP ${res.status}`);
        const data = await res.json();
        // Pass the results to a function displayProducts(products)
        displayProducts(data);
    }    
    // Call handleError(error) if the fetch fails
    catch (error) {
        console.error('An error has occurred:', error?.message ?? error);
    }
}

// Step 5: Write displayProducts(products):
// Select the #product-container element


// Loop through the first 5 products returned by the API
// Create and append HTML elements to show each product’s name, image, and price






    
