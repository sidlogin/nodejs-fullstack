// Object Destructuring

const product = {
     label: 'Red Book',
     price: 5,
     stock: 200,
     salePrice: null,
};

const {label, stock} = product;
console.log('Example1: ', label, stock);

const product1 = { label1: 'Red Book', price1: 5, stock1: 200, salePrice1: null };
const { label1: productLabel1, stock1, rating1 } = product1;

// Expected output: rating1 will be defined as it is not exist.
console.log('Example2: ', productLabel1, stock1, rating1);

const product2 = { label2: 'Red Book', price2: 5, stock2: 200, salePrice2: null };
const { label2: productLabel2, stock2, rating2 = 5 } = product2;

// Expected output: rating2 will be return default value 5 as it is not exist in object.
console.log('Example3: ', productLabel2, stock2, rating2);

const new_product = { ...product2, ...{ rating3: '4.5' } };
const {label2: productLabel3, stock3, rating3 = 5 } = new_product;

// Expected output: stock3 will be return undefined & raiting3 would be 4.5 as it is not exist in object.
console.log('Example4: ', productLabel3, stock3, rating3);

const transaction = ((type, { label2, stock2 }) => {
     console.log('Example5: ', type, label2, stock2);
});

transaction('order', product2);

