import React from 'react';
import './App.css'; 
import Product from './Product'; 
import arrows from './assests/arrows.png'

const products = [
    { id: 1, name: 'Laptop', price: 999, description: ' laptop.' },
    { id: 2, name: 'Smartphone', price: 699, description: 'smartphone.' },
    { id: 3, name: 'Headphones', price: 199, description: 'headphones.' },
    { id: 4, name: 'Smartwatch', price: 199, description: 'smartwatch ' },
    { id: 5, name: 'Tablet', price: 499, description: ' tablet' },
    { id: 6, name: 'Bluetooth Speaker', price: 149, description: ' Bluetooth speaker' },
    { id: 7, name: 'Gaming Console', price: 299, description: ' gaming console' },
    { id: 8, name: '4K Monitor', price: 399, description: 'High-resolution monitor' },
    { id: 9, name: 'Wireless Mouse', price: 49, description: ' wireless mouse ' },
    { id: 10, name: 'Mechanical Keyboard', price: 89, description: 'mechanical keyboard ' },
];

function App() {
    return (
        <div className="app">
          <div className=' flex  items-center '>
            <div className=' w-[20px] h-[40px] bg-[#DB4444] mr-3 rounded-sm' >

            </div>
          <div className='font-semibold text-[#DB4444] ' >
          Our Products
          </div>
          </div>
        
          <div className=' flex justify-between'>
          <h1 className=' font-bold text-[36px]  ' >Explore Our Products</h1>
<img src={arrows} alt=' ' className=' w-[80px] h-[40px] '/>
          </div>
            <div className="product-list ">
                {products.map(product => (
                    <Product 
                  
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        description={product.description} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;