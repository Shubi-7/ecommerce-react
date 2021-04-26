import React,{useState, useEffect, Fragment} from 'react'
import Navbar from '../layouts/Navbar'
import {read,listRelated} from './uiApi'

const ProductDetails = (props) => {
    const [product,setProduct]=useState({})
    const [error,setError]=useState(false)
    const [relatedProduct,setRelatedProduct]=useState([])

    const loadSingleProduct=productId=>{
        read(productId).then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setProduct(data)

                //after fetching single product fetch related products
                listRelated(data.id).then(data=>{
                    if(data.error){
                        setError(data.error)
                    }
                    else{
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }

    useEffect(()=>{
        const productId=props.match.params.productId
        loadSingleProduct(productId)
    },[props])
    return (
        <>
            <Navbar/>
        </>
    )
}

export default ProductDetails
