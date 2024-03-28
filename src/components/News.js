import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
// news API top headlines okk
export class News extends Component {
    static defaultProps={
        page:10,
        country:"in",
        catagories:'general',
    }
   
    static propTypes={
        country:PropTypes.string,
        page:PropTypes.number,
        catagories:PropTypes.string,
    
        
    }
            constructor(){
               super();
                console.log("hellow i am cnstructor");
                this.state={
                   articles:[],
                   loading:false,
                   page:1
                }
            }

             async componentDidMount(){
                console.log("cdm");
                let Url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd3061fd5d9c4478b24013be3d1f04a2&page=1&pageSize=${this.props.page}`
                // news fetch 
                let data= await fetch(Url);
                let parsedData=await data.json()
                console.log(parsedData);
                this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})

            }
        
        
            handleprevClick = async()=>{
                console.log("prev");
                let Url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd3061fd5d9c4478b24013be3d1f04a2&page=${this.state.page - 1}&pageSize=${this.props.page}`;
                // news fetch 
                let data= await fetch(Url);
                let parsedData=await data.json()
                console.log(parsedData);
                this.setState({
                    page:this.state.page-1,
                    articles:parsedData.articles
                })

            }
            handleNextClick= async ()=>{
                console.log("next");
                let Url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd3061fd5d9c4478b24013be3d1f04a2&page=${this.state.page+1}&pageSize=${this.props.page}`;
                // news fetch 
               if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.page)){
               }
               else{
                let data=await fetch(Url);
                let parsedData=await data.json()
                console.log(parsedData);
                this.setState({
                    page:this.state.page+1,
                    articles:parsedData.articles
                })
               }
        }
            
        
  render() {
    return (
        <div className='container my-3'>
        <h1 className='text-center' style={{margin:"30px"}}>NewsMonkey-Top Headlines</h1>
            <div className='row'>  
            {this.state.articles.map((Element)=>{
                return < div className='col-md-4'key={Element.url}>
                    <NewsItem title={Element.title?Element.title.slice(0,88):" "} description={Element.description?Element.description.slice(0,115):""} imageUrl={Element.urlToImage} newsurl={Element.url}/>                                 
                </div>
  })}
        </div>
        
        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr;Previous</button>
        <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.page)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News
