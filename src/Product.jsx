import React from 'react';
import './Product.css'; 
import lap from './assests/lap.png'
import icons from './assests/icons.png'
import stats from './assests/stats.png'

function Product({ name, price }) {
    return (
        <div className='  '>

      
        <div className="product-card flex justify-center   ">

    <img className='w-[172px] h-[150px] mt-2' src={lap} alt="" />

    <img className=' h-[40px] w-[20px] '  src={icons} alt=''/>
 

</div>
<div className=' '>
    <h2 className=' font-medium ' >{name}</h2>
            <div className=' text-[#DB4444] font-medium flex '>${price} <img className=' w-[148px] h-[20px]' src={stats} alt="" /> </div>
    </div>
        </div>
    );
}

export default Product;