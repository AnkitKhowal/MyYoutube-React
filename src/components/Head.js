import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

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
        <input type="text" className="w-1/2 border border-gray-700 p-2 rounded-l-full"></input>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200 px-5'>🔍</button>
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