import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ image, title, price, rating, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/product-details/${id}/${title.replaceAll(" ", "-")}`)
      }
      className="cursor-pointer h-[420px] w-full group"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-indigo-100">
        {/* Product Image with hover effect */}
        <div className="relative overflow-hidden pt-[70%]">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover p-3 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Optional badge */}
          <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>

          {/* Price section */}
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-indigo-600">
                $ {price.toLocaleString()}
              </p>
              {/* Rating (optional) */}
              <div className="flex items-center bg-amber-100 px-2 py-1 rounded-full">
                <svg
                  className="w-4 h-4 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-bold text-amber-800 ml-1">
                {rating}
                </span>
              </div>
            </div>

            {/* Optional: Add to cart button on hover */}
            <button
              className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-indigo-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart logic here
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
