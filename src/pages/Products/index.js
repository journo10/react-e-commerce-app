import axios from 'axios'
import { useState, useEffect } from 'react'
import Product from '../Product';
import Search from "../Search"

const apiUrl = "http://localhost:5000/products";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProductsData()
  }, [])

  const getProductsData = async () => {
    try {
      const { data } = await axios.get(apiUrl)
      //console.log(data)
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <Search search={search} setSearch={setSearch} />
      <div className='row'>
        {products.filter((p) => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ).map((product) => (
          <div key={product.id} className='col-md-4 mt-3'>
            <Product product={product} getProductsData={getProductsData} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products