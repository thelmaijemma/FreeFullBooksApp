import React, { Component } from 'react';

class FreeFullBooksApp extends Component {

apiKey = "&key=AIzaSyAGmOrkv3geEJxyxAM7ybj0szmN9TnhTlQ"
url ='https://www.googleapis.com/books/v1/volumes?q=';

  constructor(props) {
    super(props);
    this.state = [
        {
        search: "book",
        type: "all",
        print: "all"
        
    }
]
  }

makeURL(search, bookType, printType){
    
    const fullURl = this.url.concat(search,"_&printType=",printType,"&filter=",bookType,this.apiKey);
    console.log("this is the full url: " + fullURl);
    return fullURl;
  }

handleSubmit(e) {
    e.preventDefault();
   // const bookmark = {title, url, description, rating};
    const options = {
      method: 'GET',
    };

    const search = this.state.search.split(/[ ,']+/).join('_');
    console.log(search);

    const bookType = this.state.type;
    console.log(bookType);
    const printType = this.state.print;
    console.log(printType);
    const fullUrl = this.makeURL(search, bookType, printType);



    fetch(fullUrl, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        const displayFinal = this.displayResults(data);
        this.props.changeScreen(displayFinal);
      }) 
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  displayResults(data){
    for(let i=0; i< 10; i++){
         return <div className="title">Title: data.items[i].title </div>
            } 
      }
  


  setPrint(printType) {
    this.setState({
    print: printType
    });
  }
  setBook(bookType) {
    this.setState({
    type: bookType
    });
  }

  searchUpdate(search){
      this.setState({
          search: search
      })
  }

  render() {

const bookOptions = ["full", "free-ebooks"]
const printOptions = ["all", "books", "magazines"]
         
return (
    <div> 
        <form className="search_form" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="bookType">Book Type:</label>
                <select
                    id="bookType"
                    name="bookType"
                    onChange={e => this.setBook(e.target.value)}>
                <option value="None">no filter...</option>
                <option value="full">{bookOptions[0]}</option>
                <option value="free-E">{bookOptions[1]}</option>
                </select>
                <label htmlFor="printType">Print Type:</label>
                        <select
                          id="printType"
                          name="printType"
                          onChange={e => this.setPrint(e.target.value)}>
                          <option value="none">select</option>
                          <option value="all">{printOptions[0]}</option>
                          <option value="books">{printOptions[1]}</option>
                          <option value="magazines">{printOptions[2]}</option>
                        </select>
                <label htmlFor="searchContent">Search Terms:</label>
                          <input
                              type="text"
                              name="search"
                              id="search"
                              placeholder="search"
                              value={this.state.search} 
                              onChange={e => this.searchUpdate(e.target.value)}/>
                <button type="submit" onClick={e => this.props.showResults(true)}>Submit</button>
              </form>
      </div>
    );
  }
}

export default FreeFullBooksApp;



{/* from inside data         this.setState({
          title: "",
          url: "",
          description: "",
          rating: 1
        });
    this.props.handleAdd(bookmark); */}