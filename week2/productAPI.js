//create mini-express app(sepatare route)
import exp from 'express'
export const productApp=exp.Router()
//create reqs for
//create product API with below operations
let products=[]
   productApp.get('/products',(req,res)=>{
    //send res to client
    res.json({message:"all products",payload:products})
   })

   productApp.get('/products/:brand',(req,res)=>{
    //get brand from product from url parametr
      let brandOfURL=req.params.brand
      //find product
      let product=products.find(productObj=>productObj.brand==brandOfURL)
      //if product not found
      if(product==undefined)
         return res.json({message:"product not found"})
      res.json({message:"product:",payload:product})
   })
   
   //route to handle POST request of client
   productApp.post('/products',(req,res)=>{
      //get product from client
      const newProduct=req.body
      //push product into products
      products.push(newProduct)
      //send res
      res.json({message:"Product created"})
   })

   //route to handle PUT request of client
   productApp.put('/products',(req,res)=>{
    //get modified product from client{}
    let modifiedProduct=req.body;
    //get index of existing product in products array
    let index=products.findIndex(productObj=>productObj.productId==modifiedProduct.productId)
    //if product not foung
    if(index==-1)
      return res.json({message:"product not found"})
    //update product with index
    products.splice(index,1,modifiedProduct)
    //send response
      res.json({message:"product modified"})

   })
   //route to handle DELETE request of client
   productApp.delete('/products/:productId',(req,res)=>{
      //get id from product from url parameter
      let idOfURL=Number(req.params.productId)
      //find index of product
      let index=products.findIndex(productObj=>productObj.productId==idOfURL)
      //if product not found
      if(index==-1)
         return res.json({message:"Product not found to delete"})
      //delete product by id
      products.splice(index,1)
      //send res
      res.json({message:"product removed"})
   })
  //create new product ({productId,name,brand,price})
  //real all products
  //read product by brand
  //update a product
  //delete a product by id 