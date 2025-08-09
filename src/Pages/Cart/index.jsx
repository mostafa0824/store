import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, clearCart } from '../../Store/slices/CartSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const {items, totalPrice} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const Navigate=useNavigate()

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
                <div className="bg-gray-100 p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-700 mt-4">Your cart is empty</h2>
                    <p className="text-gray-500 mt-2">Looks like you haven't added any items yet</p>
                    <button 
                        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 cursor-pointer"
                        onClick={() => Navigate('/product')}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Your Shopping Cart</h1>
                <button 
                    onClick={() => dispatch(clearCart())}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer">
                    Clear Cart
                </button>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                        <li key={item.id} className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-shrink-0">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="h-24 w-24 object-contain rounded-md"
                                    />
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                                    <p className="text-sm text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                                </div>
                                
                                <div className="flex items-center justify-between sm:justify-end sm:gap-8">
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button 
                                            onClick={() => dispatch(removeItem(item.id))}
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-200 cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="px-3 py-1 text-gray-800">{item.cartQuantity}</span>
                                        <button 
                                            onClick={() => dispatch(addItem(item))}
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-200 cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <div className="w-24 text-right">
                                        <p className="text-sm font-medium text-gray-900">
                                            ${(item.price * item.cartQuantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
                <div className="px-4 py-5 sm:px-6 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Total</h3>
                        <p className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                
                <div className="px-4 py-4 sm:px-6 bg-gray-50 text-right">
                    <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors cursor-pointer">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}