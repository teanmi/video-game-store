import React from "react";
import CartButton from "../components/general/cartButton";
import Footer from "../components/general/footer";
import Nav from "../components/general/nav";
import SearchBar from "../components/search/searchBar";

const Search = () => {
  return (
    <div>
      <Nav links="search" />
      <CartButton />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Search;
