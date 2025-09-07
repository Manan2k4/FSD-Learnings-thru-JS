import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import './Style.css'
function App() {
  const [ProductData,setProductData] = useState([]);

  React.useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>setProductData(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <>
      <div className="main"></div>
        {ProductData.map((product) => (
          <div key={product.id}>
            <img src="{product.image}" alt="" />
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
        </div>
      ))}
    </>
  )
}

export default App;