import React,{FC,useState} from 'react'
import './Article.css'
import Articles from '../types/types'
import CardArticle from './CardArticle/CardArticle'
import loader from './loader.gif'
interface Art {
  articles: Articles[]
  isLoader:boolean;
  result:boolean;
}

 const Article:FC<Art> = ({ result,articles,isLoader })=> {


  return (
    <div className='article-wrapper'>
      {isLoader?<img src={loader}></img>:result?<div className='not-found'>Данные не получены страница пустая</div>:articles.map(e=>{
        if(e.show){
          let elem = <CardArticle
          id = {e.id}
          key={e.id}
          name = {e.source.name}
          publishedAt={e.publishedAt}
          url={e.url}
          urlToImage = {e.urlToImage}
          title={e.title}
          description={e.description}></CardArticle>
          return elem;
        }
      })}
      
    </div>
  )
}
export default Article;