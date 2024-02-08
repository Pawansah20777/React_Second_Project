import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'



export class News extends Component {
  
  static defaultProps={
    country:"in",
    pagesize:9,
    category:"science"
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }
  
  



    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12ec88e5784f4c6d94e1f7b9f923c8fe&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({articles:parsedData.articles ,totalResults:parsedData.totalResults})
    }
  
    async componentDidMount(){
      this.updateNews();
    }

    handlePrevclick=async()=>{
      this.setState({page:this.state.page-1});
      this.updateNews();
    }

    handleNextclick=async()=>{
      this.setState({page:this.state.page+1});
      this.updateNews(); 
    }



  render() {
    return (
      <div className="container my-3">

        <h1 className="text-center" style={{margin:"35px 0px"}}>NewsMokney-Top HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} 
          imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>   
          </div>
        })};  
       </div>
       <div className="container d-flex justify-content-between">

       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}

export default News
