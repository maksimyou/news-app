import React, { FC, Dispatch, SetStateAction } from 'react'
import './Button.css'
interface Search{
  children:string;
  sourcSetNews:Function;
  setSourcNews:Dispatch<SetStateAction<string>>;
}
const Button:FC<Search> = ({setSourcNews,sourcSetNews,children}) => {

  return (
    <div onClick={()=>{
    setSourcNews(children);
    sourcSetNews(children);
    }}
  className='button-frame'>
        <span>{children.toUpperCase()}</span>
    </div>
  )
}

export default  Button
