import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="text-xl">
      <div 
      className="flex-1 flex justify-center gap-8">
        <Link to='/' className="hover:text-cyan-500">Home</Link>
        <Link to='/Users' className="hover:text-cyan-500">Users</Link>
    </div>
    </nav>
    
  )
}
export default Header;