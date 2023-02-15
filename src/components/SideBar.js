import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-lg p-5">
      <ul>
        <Link to={"/"}><li>🏠 Home</li></Link>
        <li>📻 Shorts</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar;