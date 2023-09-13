import { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import ArticlePage from './components/pages/ArticlePage/ArticlePage'
import Articles from './components/types/types'
import PageUndefined from './components/PageUndefined/PageUndefined'
import axios from 'axios'




function App() {
  
  const [articles, setArticles] = useState<Articles[]>([]);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const [nameNews, setNameNews] = useState<string[]>([]);
  const [sourcNews, setSourcNews] = useState<string>('');
  const [result, setResult] = useState<boolean>(false);
  


  useEffect(()=>{
    let str = window.navigator.language.substr(0,2)
    if(sourcNews){
      sourcSetNews();
    }else{
      getNewsApi(str);
    }
  },[]);


  const sourcSetNews = ():void=>{
    setIsLoader(true);
  
    setArticles(articles.map(e=>{
      if(sourcNews === 'all'){
        e.show = true;
      }else if(e.source.id === sourcNews){
        e.show = true;
      }else{
        e.show = false;
      }
        return e;
    }));
  
    setIsLoader(false);
  }

  
  const getNewsApi = async (lang:string)=>{
      setIsLoader(true);
    try {
      if(articles.length === 0){
        let names:string[] = ['all'];
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=8ed7d22033204c4697090b4fc040b0ea`)
        console.log(response.data);
        if(response.data.status==='ok'&&response.data.totalResults > 0) {
          let arr = response.data.articles.map((src:Articles,i:number)=>{
          if(!names.includes(src.source.id)) names.push(src.source.id)
            src.id = i;
            src.show = true;
            return src;
          })
          setNameNews(names);
          setArticles(arr);
          setIsLoader(false);
        }else{
          setIsLoader(false);
          setResult(true);
        }
        return response.data
      }
    } catch (error) {
      setIsLoader(false);
      setResult(true);
    }  
  }

  return (
    <>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home result={result} setSourcNews={setSourcNews} nameNews={nameNews} isLoader={isLoader}  setIsLoader={setIsLoader} setArticles = {setArticles} articles={articles}/>}/>
      <Route path='article/:id' element={<ArticlePage articles={articles}/>}/>
      <Route path='*' element={<PageUndefined/>}/>
    </Route>
  </Routes>
  </>
  )
}

export default App



