import { useState, } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../../contexts/CartContext';

const apiUrl = "http://localhost:5000/products";
const Product = ({ product, getProductsData }) => {
    const [readMore, setReadMore] = useState(false);
    const { addToCart, items } = useCart()

    const productDelete = async (id) => {
        const { data } = await axios.delete(apiUrl + `/${id}`)
        getProductsData(data)//button'a tıkladığında product'ın ekrandan silinmesi için
        console.log(`${product.name} silindi.`)
    }

    //sepete eklenmişse tekrar eklenmesini engellemek için
    const findCartItems = items.find((item) => item.id === product.id)

    return (
        <>
            <div className="card " style={{ width: "18rem" }}>
                <img src={product.imageUrl} className="card-img-top" alt={product.name} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>{readMore ? product.description : `${product.description.substring(0, 100)}...`}
                        <button style={{ border: "none" }} className='btn btn-outline-success btn-sm' onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Daha az göster" : "Daha fazla oku"}
                        </button>
                    </p>
                    <p className="card-text"><strong>{product.price} TL</strong></p>
                    <p className="card-text"> <strong>{product.unitsInStock}</strong> adet<strong> {product.name}</strong> kaldı.</p>
                    <button onClick={() => addToCart(product, findCartItems)} type="button" 
                            className={findCartItems ? "btn btn-outline-success btn-sm mx-2" :"btn btn-outline-primary btn-sm mx-2"}>
                        {findCartItems ? "Sepeten Çıkar" : "Sepete Ekle"}
                    </button>
                    <button onClick={() => productDelete(product.id)} type="button" className="btn btn-outline-danger btn-sm mx-2 ">Sil</button>
                    <button type="button" className="btn btn-outline-dark btn-sm mx-2">
                        <Link className='link' to={`/products/${product.id}`}>Detay</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product