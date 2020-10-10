import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Banner.css";
import DatePickerSearch from "./DatePickerSearch";

const Banner = () => {
  const [showSearch, setShowSearch] =  useState(false);
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <DatePickerSearch/>}
        <Button onClick = {() => setShowSearch(!showSearch)} className="banner_search_button" variant="outlined">
        {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Give your routine a new home</h1>
        <h5>
          Settle in somewhere new. Discover nearby stays to live, work, or just
          relax.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
