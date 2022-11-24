import React from 'react'
import styles from './header.module.css'

export default function header() {
  return (
    <div className={styles.outer_container}>
        <div className={styles.banner}>
            <img src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png" />
            <div className={styles.phone}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_569204.png"/><p className={styles.login}>LOGIN</p>
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"/><p>0800 887 637</p></div>
        </div>

        <div className={styles.navbar}>
            <p>Find a Car</p>
            <p> How to Buy</p>
            <p>Sell you Car</p>
            <p>Finance & Insurance</p>
            <p> Turners Subscription</p>
            <p>Auctions</p>
            <p>Services & Info</p>
        </div>

    </div>
  )
}
