import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="search" action="#" method="get">
        <input className="search__field" type="search" placeholder="Поиск" aria-label="Поиск по сайту" name="search"></input>
        <button className="search__submit" type="submit">Поиск</button>
      </form>
    );
  }
}

export default Search;
