import React from 'react'
import styles from './header.module.css'
import mag from './magWhite.png'
import { Link } from "react-router-dom";

export default function header(props) {
  // setInputSearchValue={setInputSearchValue}
  
  
  
  
  
  
  
  return (
    <div className={styles.outer_container}>
        <div className={styles.banner}>
          <Link to="/"><img src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png" alt="Turners Cars logo" /></Link>
            <div className={styles.phone}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_569204.png" alt="profile icon"/><p className={styles.login}>LOGIN</p>
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="phone icon"/><p>0800 887 637</p></div>
        </div>

        <div className={styles.navbar}>
            <p>Find a Car</p>
            <p> How to Buy</p>
            <p>Sell you Car</p>
            <p>Finance & Insurance</p>
            <p> Turners Subscription</p>
            <p>Auctions</p>
            <p>Services & Info</p>
            <div className={styles.searchbar}>
              <input type="text" className={styles.input} placeholder="Search..." onChange={(e) =>{
        props.setInputSearchValue(e.target.value) 
      }} onKeyDown={props.handleEnter} />
              <Link to="/search" className={styles.search_btn}><div className={styles.search_btn} onClick={props.handleSearch}><img src={mag} className={styles.search_icon} alt="search icon" /></div></Link>
            </div>
        </div>

    </div>
  )
}
