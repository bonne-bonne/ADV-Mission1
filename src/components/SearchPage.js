import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import styles from './SearchPage.module.css'

//Component imports
import Header from "./header"
import Footer from "./footer"



export default function SearchPage(props) {

// ============================= PAGINATION SET UP =================================//
const [currentPage, setCurrentPage] = useState(0);
const searchResultsPerPage = 5;
const searchResultIndex = currentPage * searchResultsPerPage;



const displaySearchResults = props.searchResults.slice(searchResultIndex, searchResultIndex + searchResultsPerPage).map((result, index) =>{
    return (
        <div key={index} className={styles.individual_result}>
            {/* <img src={result.thumbnailUrl} className="image" alt="search result"/> */}
            <h3><a href={result.url}>{result.name}</a></h3>
            <p>{result.snippet}</p>
            <p><a href={result.url} className={styles.bottom_url_link}>{result.displayUrl}</a></p>
        </div>
    )
});

const changePage = ({selected}) => {
    // console.log(props.inputSearchValue[0])
    setCurrentPage(selected)
};

const pageCount= Math.ceil(props.searchResults.length / searchResultsPerPage);
// const blah = props.inputSearchValue[0].toUpperCase() + props.inputSearchValue.slice(1)

  //  ===========================================================================================================//
  function example() {
     props.searchLength <=1 ? <p className={styles.error_message}>Sorry no search results were found.</p>
          : !props.searchLength ? <p className={styles.error_message}>Sorry no search results were found.</p>
          : <p className={styles.error_message}>Search results found.</p>
  }




  //++++++++++++++

  return (
    <div>
        <Header handleSearch={props.handleSearch} setInputSearchValue={props.setInputSearchValue} handleEnter={props.handleEnter}/>

            <main className={styles.main_outer_container}>
                <div className={styles.search_outer_container}>

                    {props.searchLength <= 1 ? <p className={styles.error_message}>Sorry no search results were found.</p> : 
                    
                    <div className={styles.search_result_item}>

                        {props.searchResults ? displaySearchResults : "" }

                    </div> }
                    

                     {example}

            
                   
                        
    

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



// {props.searchLength <= 1 || !props.searchLength ? <p className={styles.error_message}>Sorry no search results were found.</p> : 
                    
// <div className={styles.search_result_item}>
//     {/* <p>Search results for {props.inputSearchValue}</p> */}
//     {props.searchResults ? displaySearchResults : "" }

// </div> }