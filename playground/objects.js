// Object Destructuring

const product = {
     label: 'Red Book',
     price: 5,
     stock: 200,
     salePrice: null,
};

// const {label, stock} = product;
// console.log(label, stock);

// const {label: productLabel, stock, rating} = product;
// console.log(label, stock, rating);

// const {label: productLabel, stock, rating = 5 } = product;
// console.log(label, stock, rating);

// const new_product = {
//      ...product, ...{ rating: '4.5' }
// };

// const {label: productLabel, stock, rating = 5 } = new_product;
// console.log(productLabel, stock, rating);

const transaction = ((type, { label, stock }) => {
     console.log(type, label, stock);
});

transaction('order', product);

