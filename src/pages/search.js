import React from "react";
import CartButton from "../components/general/cartButton";
import Footer from "../components/general/footer";
import Nav from "../components/general/nav";
import SearchBar from "../components/search/searchBar";
import Slideshow from "../components/search/slideshow";
import "./search.css"

const Search = () => {
  return (
    <div className="search">
      <Nav links="search" />
      <SearchBar />
      <Slideshow />
      <CartButton />
      <Footer />
    </div>
  );
};

export default Search;
