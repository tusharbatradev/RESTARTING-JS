// Example for a callback function
// setTimeout(function () {
//   console.log("Tushar Batra");
// }, 2000);

// Fetching API and Playing with data
let products = [];

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    products = json.products;

    // Most expensive Product
    // let expensiveProduct = json.products[0]

    // for(let i=1 ; i< products.length ; i++){
    //     if(expensiveProduct.price > json.products){
    //         expensiveProduct = products[i]
    //     }
    // }
    // console.log(expensiveProduct);

    // average price of products
    // let sumOfPrice = 0;

    // for(let i=1 ; i<products.length ; i++){
    //     sumOfPrice += products[i].price
    // }
    // let averagePrice = sumOfPrice / products.length;
    // console.log(`Average Price of Products are ${averagePrice}`)

    // Find all products with a title that contains a specific word (e.g., "phone").
    // let titlePhone = products.filter((product) =>
    //   product.title.toLowerCase().includes("mascara")
    // );
    // console.log(titlePhone);

    // Sort the products by their price in ascending order.
    // let ascendingOrderedProduct = products.sort(products.price);
    // console.log(ascendingOrderedProduct)

    // Get the titles of all products that are out of stock. --- Doubt
    // let outOfStockProduct = products.filter((product)=>{
    //     product.stock === 1
    // })
    // console.log(outOfStockProduct)
  });



// Async and await 
async function fetchData(){
    try{
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log('Data' ,data)
    } catch(error){
        console.error('Error:', error);
    }
}
fetchData()