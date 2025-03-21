import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaArrowRightLong, FaRegHeart, FaTruckArrowRight } from "react-icons/fa6";
import { LuCodesandbox, LuShoppingCart } from "react-icons/lu";
import { TbClock24 } from "react-icons/tb";
import { RiShieldCheckFill } from "react-icons/ri";
import Feature from "../../feature/Feature";
import Hero from "../../hero/Hero";
function Home() {

const [producs, setProducs]= useState(null)

const getdata = async(link)=>{
const req = await fetch(link)
const data = await req.json()
setProducs(data


)
}
useEffect(()=>{
  getdata("https://fakestoreapi.com/products")
},[])
console.log(producs);


  return (
    <>
      <div className="home">
        <div className="container">
          <Hero/>
       
          <div className="discont_home">
            <div className="delivers">
            <LuCodesandbox className="lux_box"/>
            <div className="delive_box">
              <h3>Discount</h3>
              <p>Every week new sales</p>
            </div>
            </div>
            <div className="delivers">
            <FaTruckArrowRight  className="lux_box"/>
            <div className="delive_box">
              <h3>Free Delivery</h3>
              <p>100% Free for all orders</p>
            </div>
            </div>
            <div className="delivers">
            <TbClock24 className="lux_box"/>
            <div className="delive_box">
              <h3>Great Support 24/7</h3>
              <p>We care your experiences</p>
            </div>
            </div>
            <div className="delivers">
            <RiShieldCheckFill className="lux_box"/>
            <div className="delive_box">
              <h3>secure Payment</h3>
              <p>100% Secure Payment Method</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section>
          <div className="container">
            <div className="zepirs">
              <div className="zep">
                <img src="/imgs/Logo (1).svg" alt="" />
              </div>
              <div className="zep">
                <img src="/imgs/Logo (2).svg" alt="" />
              </div> <div className="zep">
                <img src="/imgs/Logo (3).svg" alt="" />
              </div> <div className="zep">
                <img src="/imgs/Logo (4).svg" alt="" />
              </div> <div className="zep">
                <img src="/imgs/Logo (5).svg" alt="" />
              </div> <div className="zep">
                <img src="/imgs/Logo (6).svg" alt="" />
              </div> <div className="zep">
                <img src="/imgs/Logo (7).svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Feature/>
          </div>
        </section>
        <section>
          <div className="top_carigori">
            <div className="container">
              <h1>Top categories</h1>
              <div className="topCatigoris_cards">
                <div className="topCatigoies_card">
                  <img src="/imgs/Image (4).png" alt="" />
                 <div className="wing">
                 <h3>Wing Chair</h3>
                 <p>3,584 Products</p>
                 </div>
                </div>
                <div className="topCatigoies_card">
                  <img src="/imgs/Image (5).png" alt="" />
                 <div className="wing">
                 <h3>Wing Chair</h3>
                 <p>3,584 Products</p>
                 </div>
                </div>    <div className="topCatigoies_card">
                  <img src="/imgs/Image (6).png" alt="" />
                 <div className="wing">
                 <h3>Wing Chair</h3>
                 <p>3,584 Products</p>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="our_praducs">
            <div className="container">
              <div className="our_text">
                <h1>Our Products</h1>
                <div className="our_box">
                  <p>All</p>
                  <p>Newest</p>
                  <p>Trending</p>
                  <p>Best Sellers</p>
                  <p>Featured</p>
                </div>
              </div>
               <div className="ours_cards">

              {producs?.map((item)=>{
                return  <div className="ours_card">
                <div className="our_imgs">
                  <img src={item.image} alt="" />
                  <div className="ours_icons">
                    <FaRegHeart className="ouress_produ" />
                  </div>
                </div>
                <div className="ouree">
                  <div className="ouree_text">
                    <p>{item?.title.slice(0,35  )}...</p>
                    <span>${item?.price}...</span>
                  </div>
                  <LuShoppingCart className="ouree_cart"/>
                </div>
              </div>
              })}

           
        
          </div>
            </div>
          </div>
        </section>
        <section>
          <div className="what">
            <div className="container">
              <h1>What client says about us</h1>
              <div className="what_cards">
                <div className="what_card">
                <div className="what_text">
                  <span></span>
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                </div>
                <div className="what_kristin">
                  <div className="kris">
                    <img src="/imgs/Image.svg" alt="" />
                    <div>
                      <h3>Kristin Watson</h3>
                      <p>Fashion Designer</p>
                    </div>
                  </div>
                  <img src="/imgs/Group.svg" alt="" />
                </div>
                </div>
                <div className="what_card">
                <div className="what_text">
                  <span></span>
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                </div>
                <div className="what_kristin">
                  <div className="kris">
                    <img src="/imgs/Image (1).svg" alt="" />
                    <div>
                      <h3>Esther Howard</h3>
                      <p>Fashion Designer</p>
                    </div>
                  </div>
                  <img src="/imgs/Group.svg" alt="" />
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="added">
            <div className="container">
              <Feature/>
            </div>
          </div>
          <hr />
        </section>
      </main>
    </>
  );
}

export default Home;
