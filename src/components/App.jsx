import { Component } from "react";
import GifSearch from "./GifSearch/GifSearch";
import GifList from "./GifList/GifList";

export class App extends Component {

  state = {
    searchText: '',
  }


  handleSearch = (searchText) => {
    this.setState({searchText})
  }


  render() {
    return (
      <div>
        < GifSearch handleSearch={this.handleSearch}/>
        < GifList searchText={this.state.searchText}/>
      </div>
    );
  }
};
