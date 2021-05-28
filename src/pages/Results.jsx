//static output for now? calendar app...
import React, { useCallback, useRef, useState } from "react";
import { render } from "react-dom";

import TUICalendar from "@toast-ui/react-calendar";
import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import {
  
    Link
  } from "react-router-dom";
import Calendar from '../components/Calendar';
//import "./styles.css";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));
const schedules = [
  {
    calendarId: "1",
    category: "time",
    isVisible: true,
    title: "Study",
    id: "1",
    body: "Test",
    start,
    end
  },
  {
    calendarId: "2",
    category: "time",
    isVisible: true,
    title: "Meeting",
    id: "2",
    body: "Description",
    start: new Date(new Date().setHours(start.getHours() + 1)),
    end: new Date(new Date().setHours(start.getHours() + 2))
  }
];

const calendars = [
  {
    id: "1",
    name: "Instagram",
    color: "#ffffff",
    bgColor: "#DD2A7B",
    dragBgColor: "#DD2A7B",
    borderColor: "#515BD4"
  },
  {
    id: "2",
    name: "Twiter",
    color: "#ffffff",
    bgColor: "#08A0E9",
    dragBgColor: "#08A0E9",
    borderColor: "#08A0E9"
  },
  {
    id: "3",
    name: "Tiktok",
    color: "#ffffff",
    bgColor: "#69C9D0",
    dragBgColor: "#69C9D0",
    borderColor: "#EE1D52"
  },
  {
    id: "4",
    name: "Facebook",
    color: "#ffffff",
    bgColor: "#3B5998",
    dragBgColor: "#3B5998",
    borderColor: "#3B5998"
  },
  {
    id: "5",
    name: "LinkedIn",
    color: "#ffffff",
    bgColor: "#0077B5",
    dragBgColor: "#0077B5",
    borderColor: "#0077B5"
  }
];

function Results() {
  
  const [calendarView, setCalendarView] = useState("month")
  return (
    <div className="App">
      <Link  className="float-left mb-5" to="/topics">
                  <button  class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2">Back</button>
      </Link>
      <div class="float-right mb-5">
        <label   for="view">Choose a view: </label>
        <select   name="view" id="view" onChange={e=>setCalendarView(e.target.value)}>
          <option value="day">Day</option>
          <option value="week" >Week</option>
          <option value="month" selected>Month</option>
        </select>
      </div>
      <h1 class="mb-8">Zen Planner</h1>

     
      <Calendar calendars ={calendars} schedules ={schedules} calendarView = {calendarView}></Calendar>
     
    </div>
  );
}

export default Results;