
const products = [ 
    {
        "id": 1,
        "title": "Backpack lala",
        "price": 109.95,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "stock": 5
    }, {
        "id": 2,
        "title": "Slim Fit T-Shirts",
        "price": 22.3,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "stock": 7
    }, {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "stock": 8
    }, {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "stock": 9
    }, {
        "id": 5,
        "title": "Chain Bracelet",
        "price": 695,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "stock": 4
    }, {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "stock": 8
    }, {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "stock": 3
    }, {
        "id": 8,
        "title": "Pierced Owl Rose Gold",
        "price": 10.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "stock": 2
    }, {
        "id": 9,
        "title": "Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "stock": 8
    }, {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "stock": 4
    }, {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "price": 109,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "stock": 1
    }, {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "stock": 1
    }, {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "stock": 1
    }, {
        "id": 14,
        "title": "Samsung 49-Inch Monitor",
        "price": 999.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "stock": 7
    }, {
        "id": 15,
        "title": "Snowboard Jacket Winter Coats",
        "price": 56.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "stock": 4
    }, {
        "id": 16,
        "title": "Faux Leather Moto Biker Jacket",
        "price": 29.95,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "stock": 3
    }, {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker",
        "price": 39.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "stock": 7
    }, {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "stock": 6
    }, {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "stock": 5
    }, {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "currency": "EUR",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "stock": 7
    }
]

let selectAproduct = '';
let keepBuying = "yes";
const selectedProducts = [];

const calculateTotal = () => {
    let total = 0;

    while(keepBuying === "yes") {
        selectAproduct = prompt('what do you want to buy?');
        const product = products.find(product => product.title.toLowerCase().includes(selectAproduct));
        if (product && selectAproduct !== "") {
            alert(`this product cost ${product.price} ${product.currency}`);
            const buy = prompt('Please confirm if you want to buy this item replaying yes or not').toLowerCase();
            if (buy === 'yes'){
                selectedProducts.push(product);
                alert('Product added to cart');
            } else {
                alert('maybe for next time!');
            }
        } else {
            alert('Sorry, we dont have that item :(');
        }
        keepBuying = prompt('Do you want to keep buying products?');
    }
    console.log(selectedProducts)
    for (let i = 0; i < selectedProducts.length; i++) {
        total += selectedProducts[i].price;
    }
    if (selectedProducts.length) {
        alert(`Total to pay ${total}`);
    } else {
        alert('maybe for next time!');
    }
}

calculateTotal();