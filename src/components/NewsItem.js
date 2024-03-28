import React, { Component } from 'react'
//bootstrap card use
export class NewsItem extends Component {
  render() {
    let {imageUrl,title,description,newsurl}=this.props
    return (
      <div>
        <div className="card" style={{width: ''}}>
  <img src={!imageUrl?"https://img.etimg.com/thumb/msid-108470490,width-1070,height-580,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title mx-4"> {title}...</h5>
    <p className="card-text mx-4">{description}...</p>
    <a rel="noreferrer"href={newsurl} className="btn btn-dark"> Read More </a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem
