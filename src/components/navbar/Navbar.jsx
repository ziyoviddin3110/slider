import React from 'react'
import "./Navbar.css"
import { IoSearch } from 'react-icons/io5'
import { FaBars, FaCartShopping, FaRegHeart, FaUser } from 'react-icons/fa6'
function Navbar() {
  return (
    <>
        
        <div className="free">
        <div className="container">
          <h3>Free shipping on all orders over $50</h3>
          <div className="nedd">
            <select>
              <option value="uz">uz</option>
              <option value="eng">eng</option>
              <option value="ru">ru</option>
            </select>
            <span>Faqs</span>
            <span>Need Help</span>
          </div>
        </div>
      </div>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/imgs/Logo.svg" alt="" />
            </div>
            <div className="imput_Nav">
              <input placeholder='Search here...' type="text" />
              <IoSearch className="search-icon"/>

            </div>
            <div className="nav_cards">
              <div className="nav_card">
              <FaCartShopping/>
                <p>Card</p>
                <span>2</span>
              </div>
              <div className="nav_card1">
              <FaRegHeart/>
              </div>
              <div className="nav_card1">
              <FaUser/>
              </div>
            </div>
          </div>
        </nav>
        <div className="all_categorisNav">
          <div className="container">
           <div className="all_box">
           <div className="all_catigori">
            <FaBars/>
              <h4>All Categories</h4>
            </div>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Product</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">About</a></li>
            </ul>
           </div>
                <h4>Contact:
                (808) 555-0111</h4>
          </div>
        </div>
    </>
  )
}

export default Navbar