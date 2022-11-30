import React from 'react'
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

export default function Home(props) {
  return (
    <div>
      <Header handleSearch={props.handleSearch} setInputSearchValue={props.setInputSearchValue}/>
      <Main />
      <Footer />

    </div>
  )
}
