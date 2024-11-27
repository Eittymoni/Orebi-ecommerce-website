import React from 'react'
import Container from '../components/Container'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux'
import { productDecrement,productIncrement,removeProduct } from '../components/slice/ProductSlice';

const Cart = () => {
let cartInfo = useSelector((state)=>state.product.cartItem)



 
  let dispatch = useDispatch()
  let handleIncrement = (i) =>{
    dispatch(productIncrement(i))
  }
  let handleDecrement = (i) =>{
    dispatch(productDecrement(i))
  }

  let handlePremove = (i) =>{
    dispatch(removeProduct(i))
  }

   let {totalPrice, totalQuantity} = cartInfo.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun

    console.log(acc);
    return acc
    
  },{totalPrice:0, totalQuantity:0})

  return (
    <section className="py-[55px]">
    <Container>
      <div className="">
        <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
          Cart
        </h3>
        <div className="flex items-center py-4">
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/">Home</Link>
          </h2>
          <IoIosArrowForward />
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/shop">Shop</Link>
          </h2>
          <IoIosArrowForward />
          <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
            <Link to="/myaccount">Cart</Link>
          </h2>
        </div>
      </div>
      <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Product
          </h4>
        </div>
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Price
          </h4>
        </div>
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Quantity
          </h4>
        </div>
        <div className="w-1/4">
          <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
            Total
          </h4>
        </div>
      </div>
      {cartInfo.length? (
        <>
          {cartInfo.map((item, i)=>(
  <div className="my-4">
        <div className="flex items-center py-[32px] pl-3 border">
          <div className="w-1/4">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="w-[10%]">
                  <button onClick={()=>handlePremove(i)}
                    className=""
                  
                  >
                    <ImCross />
                  </button>
                </div>
                <div className="w-[25%]">
                  <img src={item.thumbnail} alt="" className="w-full" />
                </div>
                <div className="w-[50%]">
                  <h3 className="font-sans font-bold text-[16px] text-[#262626] ">
                   {item.title} 
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
              ${item.price} 
            </h4>
          </div>
          <div className="w-1/4">
            <div className="inline-block border">
              <button className="px-5 py-1 border-none" onClick={()=>handleDecrement(i)}
              >
                -
              </button>
              <span className="px-4">
                {item.qun} 

              </span>
              <button onClick={()=>handleIncrement(i)} className="px-5 py-1 border-none">
                +
              </button>
            </div>
          </div>
          <div className="w-1/4">
            <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
              ${(item.price * item.qun).toFixed(2)} 
            </h4>
          </div>
        </div>
        </div>
))}
        </>
 
      ):(
        <div className="text-center min-h-[100px]">
            <h2 className="font-sans  text-[30px] text-[#262626]">
            There are no items in your cart.
            </h2>
          </div>
      )}
    
    <div className="pt-[50px]">
          <h3 className="text-right font-sans font-bold text-[20px] text-[#262626] px-3">
            Cart totals
          </h3>
          <div className="flex justify-end pt-[24px]">
            <table>
              <tr>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                  Quantity
                </td>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] ">
                 { totalQuantity}
                </td>
              </tr>
              <tr>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-bold text-[16px] text-[#262626]">
                  Total
                </td>
                <td className="w-[220px] h-[50px] border px-3 font-sans font-normal text-[16px] text-[#262626]">
                  ${totalPrice.toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
        </div>        
   <div className="text-end  mt-4">
        <Link to="/checkout">
        <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[12px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
        Proceed to Checkout
        </button>
        </Link>
        </div>

      </Container>
    </section>
  )
}

export default Cart
