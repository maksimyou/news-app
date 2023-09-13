import React,{FC, ReactNode, useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import './ArticlePage.css'
import Articles from '../../types/types'
interface Art {
  articles: Articles[];
}
const ArticlePage:FC<Art> = ({articles}) => {
  const [art, setArt] = useState<Articles>();
  console.log(articles);
  const parpam1 = useParams()
  console.log(parpam1)

const createArtic = ()=>{
  let arr:Articles = articles.filter((e)=>{
    console.log(e.id, parpam1.id)
    if(e.id.toString() === parpam1.id) return true;
  })[0];
  console.log(arr);
  setArt(arr)
}

useEffect(()=>{
  createArtic();
})


  return (
    <div className='article-page-container'>
        <div className="data-publishen" >{`Источник новостей: ${art?.author}`}</div>
        <br/>
        <div className='data-discription'>{`Описание: ${art?.description}`}</div>
        <img className="image-article" src={art?.urlToImage?art?.urlToImage:'https://i6.imageban.ru/out/2023/03/07/aa34c7bd121dd2682d42d1bdbaf41720.jpg'} ></img>
        <div className="fill-text-publishen" >{art?.content}</div>
        <div className="block-navigation">
          <a href={art?.url} className="back-home" >Подробнее...</a>
          <Link to='/' className="back-home">Назад</Link>
        </div>
    </div>
  )

}

export default  ArticlePage;

//прочитать статью полностью. Должно быть 
//изображение,
//источник, полный текст статьи,
//дата публикации, 
//ссылка для возврата на главную страницу.