interface Source{
    id: string;
    name: string;
  }
interface Article{
  show:boolean; 
  id:number;
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}


export default Article