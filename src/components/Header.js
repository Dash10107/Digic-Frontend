import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {BsSearch} from "react-icons/bs";
const Header = () => {
  return (
<>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className=" text-white">Free Shipping Over $100 & Free Returns</p>
          </div>
          <div className="col-6">
            <p className='text-end text-white'>
              Hotline: <a href="tel:+1234567890" className='text-white'>+123-456-7890</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2"><h2 ><Link className='text-white'>Digic</Link></h2></div>
          <div className="col-5">
          <div className="input-group mb-3">
  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"></input>
  <span className="input-group-text p-3" id="basic-addon2">
    <BsSearch className='fs-5'/>
  </span>
</div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
         <div className=""><Link to="compareproduct" className='text-white d-flex align-items-center  gap-10'><img src="/images/compare.svg" alt=""/> <p className='mb-0'>Compare <br/> Products</p></Link></div>
         <div className=""><Link to="wishlist" className='text-white d-flex align-items-center  gap-10'><img src="/images/wishlist.svg" alt=""/><p className='mb-0'>Favourite <br/> Wishlist</p></Link></div>
         <div className=""><Link to="/login" className='text-white d-flex align-items-center  gap-10'><img src="/images/user.svg" alt=""/>    <p className='mb-0'>Log In <br/> My Account</p></Link></div>
         <div className=""><Link to="/cart" className='text-white d-flex align-items-center  gap-10'><img src="/images/cart.svg" alt=""/><div className="d-flex flex-column gap-10"><span className="badge bg-white text-dark">0</span><p className='mb-0'>$ 00.00</p></div> </Link></div>
         </div>
          </div>
        </div>
      </div>
    </header>
    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row"><div className="col-12">
          <div className="menu-bottom d-flex align-items-center gap-30">
            <div >
            <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="images/menu.svg" alt=""></img> <span className='me-5 d-inline-block'>Show Categories</span> 
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link to="/"  className="dropdown-item text-white" href="/">Action</Link></li>
    <li><Link to="/"  className="dropdown-item text-white" href="/">Another action</Link></li>
    <li><Link to="/"  className="dropdown-item text-white" href="/">Something else here</Link></li>
  </ul>
</div>
            </div>
            <div className="menu-links">
              <div className="d-flex align-items-center gap-15">
                <NavLink  to="/">Home</NavLink>
                <NavLink  to="/product">Our Store</NavLink>
                <NavLink  to="/blogs">Blogs</NavLink>
                <NavLink  to="/contact">Contact</NavLink>
              </div>
            </div>

          </div>
          </div></div> 
      </div>
    </header>
</>
  )
}

export default Header