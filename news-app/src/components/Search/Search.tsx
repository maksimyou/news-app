import React, {  FC, Dispatch, SetStateAction, useEffect } from 'react'
import './Search.css'
import Button from '../UI/Button/Button'
import Articles from '../types/types'

interface Search{
  nameNews:string[];
  articles: Articles[];
  setArticles:Dispatch<SetStateAction<Articles[]>>;
  setIsLoader:Dispatch<SetStateAction<boolean>>;
  setSourcNews:Dispatch<SetStateAction<string>>;
}

const Search:FC<Search> = ({setSourcNews,nameNews,setArticles,setIsLoader,articles})=> {

  const filterNameNews = (text:HTMLInputElement):void=>{
    setIsLoader(true);

    setArticles(articles.filter(e=>{
      if(e.title.toLocaleLowerCase().includes(text.value.toLocaleLowerCase())){
        e.show = true;
      }else if(text.value === ''){
        e.show = true;
      }else{
        e.show = false;
      }
      return e;
    }) as SetStateAction<Articles[]>);

    setIsLoader(false);
  }
  const sourcSetNews = (text:string):void=>{
    setIsLoader(true);

    setArticles(articles.map(e=>{
      if(text === 'all'){
        e.show = true;
      }else if(e.source.id === text){
        e.show = true;
      }else{
        e.show = false;
      }
        return e;
    }) as SetStateAction<Articles[]>);

    setIsLoader(false);
  }

  return (
    <div className='search-wrapper'>
        <div className="search-list">
          {nameNews.map(e=>{
            return e===null?<Button  setSourcNews={setSourcNews} sourcSetNews = {sourcSetNews}  >{'other'}</Button>:<Button  setSourcNews={setSourcNews} sourcSetNews = {sourcSetNews} >{e}</Button>
          })}
        </div>
        <div className="search-input-panel-button">
            <input onInput={(e)=>{
            filterNameNews((e.target) as HTMLInputElement)
            }} placeholder='Title' className="search-input-panel" type="search" name="" id="" />
            <button className='panel-button'>SEARCH</button>
        </div>
    </div>
  )
}
export default  Search