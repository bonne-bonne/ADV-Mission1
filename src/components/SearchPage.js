import React from 'react'
import { useState } from 'react'
import Header from "./header"
import ReactPaginate from 'react-paginate';



import Footer from "./footer"
import styles from './SearchPage.module.css'

export default function SearchPage(props) {

 

    // ====================
const [currentPage, setCurrentPage] = useState(0) // maybe should be one instead? He calls it pageNumber


const searchResultsPerPage = 10;
const searchResultIndex = currentPage * searchResultsPerPage

// const pageCount = 3

const displaySearchResults = props.searchResults.slice(searchResultIndex, searchResultIndex + searchResultsPerPage).map((result, index) =>{
    return (
        <div key={index}>
            <img src={result.thumbnailUrl} className="image" alt="search result"/>
            <h3><a href={result.url}>{result.name}</a></h3>
            <p>{result.snippet}</p>
            <p><a href={result.url} className={styles.bottom_url_link}>{result.displayUrl}</a></p>
        </div>
    )
})

const changePage = ({selected}) => {
    setCurrentPage(selected)
}


// function handleSlice(e) {
//     const numOfPages = Math.ceil(props.searchLength / 10)
//     setSlice1(e.currentTarget.n1)
//     console.log(e.currentTarget.n1)
// }
const pageCount= Math.ceil(props.searchResults.length / searchResultsPerPage)
  //  =============== 


  return (
    <div>
        <Header handleSearch={props.handleSearch} setInputSearchValue={props.setInputSearchValue} />

            <main className={styles.main_outer_container}>
                <div className={styles.search_outer_container}>

                    {props.searchLength <= 1 ? <p>Sorry no search results found.</p> : <p>Search results for {props.inputSearchValue}</p>}
                    <div className={styles.search_result_item}>
                        {/* {props.searchResults ? props.searchResults.slice(n1, n2).map((result, index) => {
                            return(
                            <div key={index}>
                            <img src={result.thumbnailUrl} className="image"/>
                            <h3><a href={result.url}>{result.name}</a></h3>
                            <p>{result.snippet}</p>
                            <p><a href={result.url} className={styles.bottom_url_link}>{result.displayUrl}</a></p>
                            </div>
                            )
                        }) : ""} */}

                        {props.searchResults ? displaySearchResults : "" }
                    </div>
                        
                        {/* <h1>Pages: {pageArray.map((page, index) => {
                            return(
                                <div key={index} onClick={handleSlice} n1={page.numberN1} n2={page.numberN2}>{page.pageNumberIs}</div>
                            )

                        })}</h1> */}

                        <ReactPaginate 
                            previousLabel= {"Prev"}
                            nextLabel= {"Next"}
                            pageCount= {pageCount}
                            onPageChange= {changePage}
                            containerClassName= {styles.pagination_container}
                            previousLinkClassName= {styles.prev_btn}
                            nextLinkClassName= {styles.next_btn}
                            disabledClassName= {styles.disabled_btn}
                            activeClassName= {styles.active_btn}

                        
                        />

                </div>

            </main>

        <Footer />
    </div>
  )
}



