import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import SearchResult from "../SearchResult"
import { useNavigate } from "react-router-dom";
import SearchInput from "./component/SearchInput";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/products");
    dispatch({ type: "SEARCH", payload: state.filters.search });
  };

  return (
    <form onSubmit={submitHandler} className="nav__search-container">
      <SearchInput />
      <SearchResult />
    </form>
  );
};

export default Search;