import ApiResponse from '../utils/ApiResponse.js'
import asyncHandler from '../utils/asyncHandler.js'

export const verifyEsewaPayment = asyncHandler( async (req,res)=>{
    const {amt, refId, oid} = req.body

    try {
    const res = await axios.post('https://uat.esewa.com.np/epay/transrec',null,
        {
            params:{
            amt: amt,
            rif: refId,
            pid: oid,
            scd: "EPAYTEST"
        }
        }
    )

    if(res.data.include("Success")){
        res.status(200).json(
            new ApiResponse(200, "Payment verified Successfully")
        )
    }else{
        res.status(400).json(
            new ApiResponse(400, "Payment verification failed")
        )
    }       
    } catch (error) {
        res.status(500).json(
            new ApiResponse(500, "Server Error")
        )
    }
   
})