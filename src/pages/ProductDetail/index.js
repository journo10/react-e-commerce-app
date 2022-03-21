/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const apiUrl = "http://localhost:5000/products";
const ProductDetail = () => {
    const { p_id } = useParams()
    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        const getProductDetail = async () => {
            const { data } = await axios.get(apiUrl + `/${p_id}`)
            //console.log(data);
            setProductDetail(data)
        }
        getProductDetail()
    }, [p_id])
    
    return (
        <div className='container-fluid'>
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <img src={productDetail.imageUrl} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">{productDetail.name}</h3>
                            <h4 className="card-title">$ {productDetail.price}</h4>
                            <p className="card-text"> <strong>{productDetail.unitsInStock}</strong> adet<strong> {productDetail.name}</strong> kaldı.</p>
                            <p className="card-text">{productDetail.description}</p>
                            <Link to="/" className="btn btn-sm btn-outline-success mt-5 ">Anasayfaya git</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail