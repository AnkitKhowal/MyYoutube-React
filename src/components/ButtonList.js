import React from 'react';
import Button from './Button';

const buttonsArr = ["All", "Music", "Mixes", "Live", "Javascript", "Stocks", "Thoughts", "Big Boss", "Gaming", "Songs", "Cricket", "Soccer", "News", "Valentines"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonsArr.map((element, index)=><Button key={index} name ={element}/>)}
    </div>
  )
};

export default ButtonList;