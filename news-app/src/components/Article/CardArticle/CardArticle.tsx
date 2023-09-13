import React,{FC,} from 'react'
import {Link} from 'react-router-dom'
import './CardArticle.css'
interface CardArticle{
    id:number
    name:string;
    publishedAt:string;
    title:string;
    description:string;
    urlToImage:string;
    url:string;
}
const CardArticle:FC<CardArticle> = ({ 
    id,
    name,
    publishedAt,
    title,
    description,
    urlToImage,
    url})=> {


    const back = {
        backgroundImage: `url(${urlToImage?urlToImage:'https://i6.imageban.ru/out/2023/03/07/aa34c7bd121dd2682d42d1bdbaf41720.jpg'})`,
    }


    return (
    <div className='card-article_container'>
        <div className="card-article_image" style={back} >
            <div className="card-article_image__text-data">{name}<br />{publishedAt}</div>
        </div>
        <div className="card-article_discription">
            <div className="card-article_title">{title}</div>
            <div className="card-article_text-dist">{description}</div>
            <Link to={`article/${id}`} className="card-article_title-more">{'Read More'}</Link>
        </div>
    </div>
)

}
export default CardArticle;