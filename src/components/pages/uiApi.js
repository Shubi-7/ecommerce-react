//to fetch product by arrival date
export const getProducts=(sortBy)=>{
    return fetch(`http://localhost:5000/api/getproduct?sortBy=${sortBy}&order=desc&limit=8`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(error=>
      console.log(error));
    
}



//to fetch singleproduct
export const read=(productId)=>{
    return fetch(`http://localhost:5000/api/singleproduct/${productId}`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(error=>
      console.log(error));
    
}



//to fetch related product
export const listRelated=(productId)=>{
    return fetch(`http://localhost:5000/api/products/related/${productId}`,{
        method:'GET'
    })
    .then(response=>{
     return response.json() ;
  })
  .catch(error=>
      console.log(error));
    
}

