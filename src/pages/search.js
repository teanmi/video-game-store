import React from "react";
import CartButton from "../components/general/cartButton";
import Footer from "../components/general/footer";
import Nav from "../components/general/nav";
import SearchBar from "../components/search/searchBar";
import Slideshow from "../components/search/slideshow";

const Search = () => {
  return (
    <div>
      <Nav links="search" />
      <CartButton />
      <SearchBar />
      <Slideshow />
      <Footer />
    </div>
  );
};

export default Search;
