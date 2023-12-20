import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

interface SearchProps {
  onSearch: (searchQuery: string) => void; // Function to handle the search action
}

interface SearchState {
  searchQuery: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchQuery: '' };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchQuery);
  };

  render() {
    return (
      <form className="search-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search room by owner or room id"
          className="search-input border rounded-md border-beige-100 text-xl p-1"
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
        />
        <BiSearchAlt className="search-icon" />
        <button type="submit" style={{ display: "none" }}>
          Search
        </button>
      </form>
    );
  }
}

export default Search;
