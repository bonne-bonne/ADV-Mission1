import React from 'react'
import styles from './main.module.css'
import banner from './Tina.png'
import cars from './cars.png'

export default function main() {
  return (
    <div className={styles.outer_container}>
        <main>

            <img src={banner} className={styles.banner}/>
            <h1>1000's of Quality Cars for Sale</h1>
            <p>Turners Cars is the largest used car network in New Zealand with 20 car dealer locations nationwide. With a huge range of around 3,000 cars for sale (and 1,500 being made ready for sale at any one time) there is truly something for everyone. We’ve been helping Kiwis buy and sell used cars for over 50 years. And if you want car finance or car insurance, we can sort that out for you as well.</p>
            
            <img src={cars} className={styles.cars} />
            <df-messenger
                chat-icon="https:&#x2F;&#x2F;cdn-icons-png.flaticon.com&#x2F;512&#x2F;134&#x2F;134914.png"
                intent="WELCOME"
                chat-title="Timmy the Turners Chatbot 🤖"
                agent-id="6b458254-063b-4f30-b4ac-83f96e72b5e7"
                language-code="en"
                ></df-messenger>

        </main>
       
    </div>
  )
}
