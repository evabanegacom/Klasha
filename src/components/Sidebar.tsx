import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="flex-none w-1/5 md:w-1/6 lg:w-1/5 px-4 bg-gray-100">
        <Link to="/" className="block p-4 border-b border-gray-200">Home</Link>
        {/* <Link to="/products" className="block p-4 border-b border-gray-200">ProductsEdit</Link> */}
        <Link to="/productview" className="block p-4 border-b border-gray-200">ProductsView</Link>
        <Link to="/productedit" className="block p-4 border-b border-gray-200">ProductsEdit</Link>
    </div>
  )
}

export default Sidebar