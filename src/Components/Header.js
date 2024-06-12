import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faShop, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", alignContent:"center", margin:"20px auto"}}>
        <div><img src='Images/logo.svg'/></div>
        <div><input placeholder='Search for products, brands and more'/></div>
        <div style={{display:"flex", justifyContent:"space-around",gap:"10px", alignContent:"center"}}>
        <button><FontAwesomeIcon icon={faUser} />Login</button>
        <button><FontAwesomeIcon icon={faCartShopping} />Cart</button>
        <button><FontAwesomeIcon icon={faShop} />Become a seller</button>
        <button><FontAwesomeIcon icon={faBars} /></button>
        </div>
    </div>
  )
}

export default Header