import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Notify from '../../Utils/Notify'
import Loading from '../../components/Loding'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json()
        setProduct(data)
        Notify('success', 'Welcome')
      } catch (error) {
        console.log(error)
        Notify('error', 'Not found')
      }
    })()
  }, [id])

  if (!product) return <Loading />

  return (
     <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-2xl text-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-48 h-48 object-contain mx-auto mb-6"
      />
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-green-600 text-xl font-bold mb-3">${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-sm text-gray-500 italic mb-6">Category: {product.category}</p>

      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition duration-300 cursor-pointer"
          onClick={() => Notify('success', 'Added to cart')}
        >
          Add to Cart
        </button>

        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition duration-300 cursor-pointer"
          onClick={() => Notify('success', 'Buying now...')}
        >
          Buy Now
        </button>
      </div>
    </div>
  )

// return (
//   <div className="container mx-auto px-4 py-8 max-w-6xl">
//     <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Product Image */}
//       <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
//         <img 
//           src={product.image} 
//           alt={product.title} 
//           className="max-h-96 object-contain"
//         />
//       </div>
      
//       {/* Product Details */}
//       <div className="md:w-1/2 p-8 flex flex-col">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
        
//         <div className="flex items-center mb-6">
//           <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
//             {product.category}
//           </span>
//           <div className="ml-auto flex items-center">
//             <span className="text-yellow-400 text-2xl">★</span>
//             <span className="ml-1 text-gray-600">
//               {product.rating?.rate || 'N/A'} ({product.rating?.count || 0} reviews)
//             </span>
//           </div>
//         </div>
        
//         <p className="text-gray-600 mb-6">{product.description}</p>
        
//         <div className="mt-auto">
//           <p className="text-3xl font-bold text-gray-900 mb-6">
//             ${product.price}
//           </p>
          
//           <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

}