import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ProductContext } from "../../../context";

export function SearchInput() {
  const { dispatch } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "SEARCH", payload: search });
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <input
        // value={state.filters.search}
        type="text"
        onChange={(e) => {
          dispatch({ type: "SEARCH", payload: e.target.value });
        }}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </>
  );
}