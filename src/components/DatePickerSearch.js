import React, { useState } from 'react';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import "../css/DatePickerSearch.css";
import { Button } from '@material-ui/core';
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from 'react-router-dom';

const DatePickerSearch = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="datepicker_search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() =>history.push("/search")} variant="outlined">Search Airbnb</Button>
        </div>
    )
}

export default DatePickerSearch