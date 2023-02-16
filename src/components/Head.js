import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // Make an api call after every keypress
    //But if the diff between 2 api calls is <200 ms
    //Decline  the api call

    const timer = setTimeout(() => {
      if (searchQuery in searchCache) {
        console.log("Getting from cache");
        setSearchSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions()
      }
    }, 1000);

    //called when component destroyed
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * This is very important
   * key - i
   *  - render the component
   *  - UseEffect called
   *  - start timer => Make an api call after 200 ms
   * 
   *  - key - ip
   *  - Destroy the existing component since searchQuery has changed 
   *  - which clear the  setTimeout even before it makes the api call
   *  - render the component
   *  - useEffect()
   *  - start Timer => make an Api  call after 200 ms
   * 
   *  -setTimeout(200) - Make an api call
   */

  const getSearchSuggestions = async () => {
    console.log("API call " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTION + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(cacheResults({[searchQuery]: json[1]}))
    
    // console.log(json[1]);
  }

  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          className="h-8 cursor-pointer"
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
          alt="Menu icon"
          onClick={() => toggleSideBar()}
        />
        <a href="/">
          <img
            className='h-8 mx-2'
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="Youtube Logo"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-700 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onScroll={() => setShowSuggestions(false)}
          ></input>
          <button
            className='border border-gray-400 p-2 rounded-r-full bg-gray-200 px-5'
          >🔍</button>
        </div>
        {showSuggestions && <div className="fixed bg-white py-2 px-2 w-[42rem] rounded-3xl absolute ">
          <ul>
            {searchSuggestions.map(suggestion => (
              <li
                key={suggestion} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍  {suggestion}</li>))}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img
          className='h-8'
          alt="User Icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  )
}

export default Head;