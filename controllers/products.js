const getAllProductsStatic=async (req,res)=>{
res.status(200).json({msg:"Static page success"})

}


const getAllProducts=async (req,res)=>{
    res.status(200).json({msg:" page success"})
    
    }

module.exports={
        getAllProductsStatic, getAllProducts
    }