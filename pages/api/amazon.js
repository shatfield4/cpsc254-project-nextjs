export default function handler(req, res) {
    // if (req.method === 'POST') {
    //     const { product_name } = req.body;
    //     res.status(200).json({ product_name: product_name })
    //   // Process a POST request
    // } else {
    //   // Handle any other HTTP method
    const { product_name } = req.body;
    res.status(200).json({ product_name: product_name })
    }

// import { NextApiRequest, NextApiResponse } from "next";
// import { connect } from "../../utils/connectMongo";
// import { ResponseFuncs } from "../../utils/types"

// const handler = async (req, res) => {
//   //capture request method, we type it as a key of ResponseFunc to reduce typing later
//   const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

//   //function for catch errors
//   const catcher = (error) => res.status(400).json({ error })

//   // Potential Responses
//   const handleCase: ResponseFuncs = {
//     // RESPONSE FOR GET REQUESTS - gets existing ABIs from mongo
//     GET: async (req: NextApiRequest, res: NextApiResponse) => {
//       const { ABI } = await connect() // connect to database
//       const { address } = req.query

//       let response = await ABI.findOne({ address: address }).catch(catcher)
//       if(response === null) {
//         response = { address: "", abi: "", network_id: "" }
//       }
//       res.status(200).json(response)
//     },

//     // RESPONSE POST REQUESTS - inserts new ABIs into mongo
//     POST: async (req: NextApiRequest, res: NextApiResponse) => {
//       const { ABI } = await connect() // connect to database
//       const { address, abi, network_id } = req.body;
//       res.status(200).json(await ABI.create({ address: address, abi: abi, network_id: network_id }).catch(catcher))
//     },
//   }

//   // Check if there is a response for the particular method, if so invoke it, if not response with an error
//   const response = handleCase[method]
//   if (response) response(req, res)
//   else res.status(400).json({ error: "No Response for This Request" })
// }

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: '1mb',
//     },
//   },
// }

// export default handler