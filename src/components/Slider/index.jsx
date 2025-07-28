import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Loading from '../Loding'
import { useNavigate } from 'react-router-dom'

export default function Slider() {
  const navigate=useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    })()
    
  }, [])
  if(!products) return <Loading/>
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="rounded-xl shadow-lg my-10">
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <div onClick={() => navigate(`/product-details/${product.id}/${product.title.replaceAll(' ','-')}`)} className="cursor-pointer p-4 bg-white shadow rounded text-center">
            <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4 object-contain" />
            <h3 className="text-base font-semibold mb-2 truncate">{product.title}</h3>
            <p className="text-green-600 font-bold mb-6">${product.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
