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
        handleError(error);
    }
}

// Step 5: Write displayProducts(products):
// Select the #product-container element

function displayProducts(products) {
    const container = document.getElementById('product-container');
    if (!container) {
        console.error('An error has occurred:', '#product-container not found');
        return;
    }
    container.innerHTML = '';

    // Loop through the first 5 products returned by the API

    const firstFive = Array.isArray(products) ? products.slice(0, 5) : [];
    firstFive.forEach((item, i) => {
        const name = item?.fields?.name ?? item?.name ?? `Product ${i +1}`;
        const priceCents = item?.fields?.price ?? item?.price ?? 0;
        const price = (Number(priceCents)/100).toFixed(2);
        console.log(`Rendering product ${i + 1}`);

        // Create and append HTML elements to show each product’s name, image, and price

        const imgObj = item?.fields?.image?.[0];
        const imgSrc = 
        imgObj?.thumbnails?.large?.url ??
        imgObj?.url ?? 'https://via.placeholder.com/320x200?text=No+Image';

        const card = document.createElement('article');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = name;

        const title = document.createElement('h3');
        title.className = 'product-name';
        title.textContent = name;

        const priceEl = document.createElement('p');
        priceEl.className = 'product-price';
        priceEl.textContent = `$${price}`;

        card.append(img, title, priceEl);
        container.appendChild(card);
    });
    if (firstFive.length === 0) {
        container.innerHTML = '<p>No products available.</p>';
    }
}
// Step 6: Add a reusable handleError(error) function:
// Log a clear message like An error occurred: <message>

function handleError(error) {
    console.error(`An error has occurred: ${error?.message ?? error}`);
}



//Step 7
fetchProductsThen(); //moved down from prior step to avoid duplicate
fetchProductsAsync();
