import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Notify from '../../Utils/Notify'
import Loading from '../../components/Loding'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../../Store/slices/CartSlice'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const cartQuantity=useSelector((state)=>state.cart.items)?.find(pr=>pr.id=== +id)?.cartQuantity;
  const dispatch=useDispatch()
  const navigate=useNavigate()
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
  const handleClick=()=>{
    dispatch(addItem(product))
    navigate('/cart')
  }
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
        {cartQuantity? (
         <div className='flex items-center gap-3'> 
        <button onClick={()=>dispatch(addItem(product))} className="w-15 h-15 rounded-lg text-white text-2xl bg-green-500 hover:bg-green-700 transition-all cursor-pointer">+</button>
        <span className="mx-3 text-gray-700 text-2xl">{cartQuantity}</span>
        <button onClick={()=>dispatch(removeItem(+id))} className="w-15 h-15 rounded-lg text-white text-2xl bg-red-500 hover:bg-red-700 transition-all cursor-pointer">-</button>
        </div>
      ):(<button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition duration-300 cursor-pointer"
          onClick={()=>dispatch(addItem(product))}>
          Add to Cart
        </button>
        )}
        
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition duration-300 cursor-pointer"
          onClick={handleClick}>
          Buy Now
        </button>
      </div>
    </div>
  )
}