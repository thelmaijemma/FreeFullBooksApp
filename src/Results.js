import React, { Component} from 'react';

class Results extends Component{
    render(){
    
   
            return (
<div>
    {this.props.title.map((data, index) => (
        <div key={index}>
            <img src={this.props.title[index].volumeInfo.imageLinks.smallThumbnail} alt ="thumbnail for book {index}"/>
            {this.props.title[index].volumeInfo.title}
            {this.props.title[index].volumeInfo.authors}
            <a href={this.props.title[index].accessInfo.webReaderLink}>{this.props.title[index].accessInfo.webReaderLink}</a>
             </div>
    ))}
</div>
          )
        }
    }

export default Results; 