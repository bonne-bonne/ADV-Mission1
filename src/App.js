
import './App.css';
import Home from "./components/Home"
import Search from "./components/SearchPage"
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [inputSearchValue, setInputSearchValue]= useState("")
  const [searchResults, setSearchResults]= useState([])
  const [searchLength, setSearchLength]= useState("")
  const [numOfResultsPages, setNumOfResultsPages] = useState(0)
  const uri = encodeURI(inputSearchValue);
  const subscriptionKey= process.env.REACT_APP_KEY;


  const requestOptions = {
    method:"GET",
    headers:{
      "Ocp-Apim-Subscription-Key": subscriptionKey,
    },
  };
  
  const handleSearch = () => {
    console.log("is this working")
    console.log(inputSearchValue)
    fetch(
      `https://api.bing.microsoft.com/v7.0/custom/search?q=${uri}&customconfig=969f4215-c360-4d2c-8d8a-5823062f73d4&mkt=en-NZ&setLang=EN&safesearch=Moderate&count=20`, requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(result.webPages.value)
        setSearchResults(result.webPages.value)
        setSearchLength(result.webPages.value.length)
        console.log(result.webPages.value.length);
        console.log(result.webPages.value.slice(0,2))
        setNumOfResultsPages(Math.ceil(searchLength / 10))
        // console.log(numOfResultsPages)
      })
  }
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home handleSearch={handleSearch}  setInputSearchValue={setInputSearchValue}/>}></Route>
          <Route path="/search" element={<Search handleSearch={handleSearch} setInputSearchValue={setInputSearchValue} searchResults={searchResults} inputSearchValue={inputSearchValue}  numOfResultsPages={numOfResultsPages}/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
