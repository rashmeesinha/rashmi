import React from 'react'
import "../../App.css"
import Lebo from "./png/LeBo.png"
import Market from "./png/Market.png"
import Swap from "./png/swap.png"
import Bridge from "./png/bridge.png"
import Staking from "./png/staking.png"
import Farm from "./png/farm.png"
import Liquidity from "./png/liquidity.png"


function NavBar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src={Lebo} alt="Logo-LeBo"></img>
        </div>
        <div className='right'>
            <span className='nav-link'><span><img src={Market} alt="market"/>Market</span></span>
            <span className='nav-link'><span><img src={Swap} alt="market"/>Swap</span></span>
            <span className='nav-link'><span><img src={Bridge} alt="market"/>Bridge</span></span>
            <span className='nav-link'><span><img src={Staking} alt="market"/>Staking</span></span>
            <span className='nav-link'><span><img src={Farm} alt="market"/>Farm</span></span>
            <span className='nav-link'><span><img src={Liquidity} alt="market"/>Liquidity</span></span>
        </div>

    </div>
  )
}

export default NavBar