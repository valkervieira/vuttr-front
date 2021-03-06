import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectors } from "../selectors/getTools";
import { actions } from "../actions/getTools";

import { useDebouncedCallback } from "use-debounce";

import { TextInput } from "../components/Input";

const Search = () => {
  const byTag = useSelector(selectors.getByTagFilter);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(actions.toggleByTag());

  const [debouncedSearch] = useDebouncedCallback(value => {
    byTag
      ? dispatch(actions.searchByTag(value))
      : dispatch(actions.searchTools(value));
  }, 1000);

  return (
    <div>
      <TextInput
        type="text"
        placeholder="Search"
        onChange={e => debouncedSearch(e.target.value)}
      />
      <input
        type="checkbox"
        name="toggle-tag"
        id="toggle-tag"
        onChange={handleToggle}
      />
      <label htmlFor="toggle-tag">Tags only</label>
      <button>+ Add</button>
      {/* <p>{searchTerm}</p> */}
    </div>
  );
};

export default Search;
