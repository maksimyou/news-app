import React,{Dispatch, FC, SetStateAction} from 'react'
import Search from '../Search/Search'
import Article from '../Article/Article'
import Articles from '../types/types'
import './Home.css'

interface Art {
  nameNews:string[];
    isLoader:boolean;
    setIsLoader:Dispatch<SetStateAction<boolean>>;
    result:boolean;
    articles: Articles[];
    setArticles:Dispatch<SetStateAction<Articles[]>>;
    setSourcNews:Dispatch<SetStateAction<string>>;
  }

const Home:FC<Art> = ({result,setSourcNews,nameNews,setArticles,articles,isLoader,setIsLoader}) => {
  console.log(articles);
  return (
    <div className='wrapper-news'>
      <Search setSourcNews={setSourcNews} nameNews={nameNews} articles={articles} setArticles={setArticles} setIsLoader={setIsLoader}/>
      <Article result={result} articles={articles} isLoader={isLoader}/>
    </div>
  )
}

export default Home
