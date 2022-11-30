import React from 'react'
import { useState, useEffect } from 'react'
import Header from "./header"
import ReactPaginate from 'react-paginate';

import Footer from "./footer"
import styles from './SearchPage.module.css'

export default function SearchPage(props) {

    const slice = (0,2)
    const n1 = 10
    const n2 = 23

    // ====================
    const [slice1, setSlice1] = useState(0)
    const [slice2, setSlice2] = useState(10)
    const [pageArrayDisplay, setPageArrayDisplay] = useState([])

    const [currentPage, setCurrentPage]= useState(1)
    const postsPerPage = 10;
    // const [searchResultsLength, setSearchResultsLength] = useState(0)

    // const searchResultsLength= 55;

// const numOfPages= Math.ceil(searchResultsLength/10)

// console.log(numOfPages);

console.log(props.searchLength)

let pageArray = []

// useEffect(() => {
//     function createArray() {
//         let pageNum = 0
//         let n1= 0
//         let n2= 10
//       for(let i=0; i< numOfPages; i++){
//         pageArray.push({pageNumberIs: i+1, numberN1: n1 + (i * 10), numberN2: n2 + (i * 10)});
//         console.log(pageArray);
        
//       }
//       }
    
//     createArray()
// }, props.searchResults)

// useEffect(() => {
//     function createArray() {
//         setPageArrayDisplay([])
//         let pageNum = 0
//         let n1= 0
//         let n2= 10
//       for(let i=0; i< props.nu; i++){
//         setPageArrayDisplay(current{pageNumberIs: i+1, numberN1: n1 + (i * 10), numberN2: n2 + (i * 10)});
//         console.log(pageArray);
        
//       }
//       }
    
//     createArray()
// }, props.searchResults)






function handleSlice(e) {
    const numOfPages = Math.ceil(props.searchLength / 10)
    setSlice1(e.currentTarget.n1)
    console.log(e.currentTarget.n1)
}

  //  =============== 


  return (
    <div>
        <Header handleSearch={props.handleSearch} setInputSearchValue={props.setInputSearchValue} />

            <main className={styles.main_outer_container}>
                <div className={styles.search_outer_container}>

                    {props.searchLength <= 1 ? <p>Sorry no search results found.</p> : <p>Search results for {props.inputSearchValue}</p>}
                    <div className={styles.search_result_item}>
                        {props.searchResults ? props.searchResults.slice(n1, n2).map((result, index) => {
                            return(
                            <div key={index}>
                            <img src={result.thumbnailUrl} className="image"/>
                            <h3><a href={result.url}>{result.name}</a></h3>
                            <p>{result.snippet}</p>
                            <p><a href={result.url} className={styles.bottom_url_link}>{result.displayUrl}</a></p>
                            </div>
                            )
                        }) : ""}
                    </div>
                        
                        <h1>Pages: {pageArray.map((page, index) => {
                            return(
                                <div key={index} onClick={handleSlice} n1={page.numberN1} n2={page.numberN2}>{page.pageNumberIs}</div>
                            )

                        })}</h1>

                </div>

            </main>

        <Footer />
    </div>
  )
}



