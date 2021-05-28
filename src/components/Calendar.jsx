import React, { useCallback, useRef } from "react";
import { render } from "react-dom";

import TUICalendar from "@toast-ui/react-calendar";
import { ISchedule, ICalendarInfo } from "tui-calendar";

import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

function Calendar({calendars,schedules,calendarView}){
    const cal = useRef(null);

    const onClickSchedule = useCallback((e) => {
      const { calendarId, id } = e.schedule;
      const el = cal.current.calendarInst.getElement(id, calendarId);
  
      console.log(e, el.getBoundingClientRect());
    }, []);
  
    const onBeforeCreateSchedule = useCallback((scheduleData) => {
      console.log(scheduleData);
  
      const schedule = {
        id: String(Math.random()),
        title: scheduleData.title,
        isAllDay: scheduleData.isAllDay,
        start: scheduleData.start,
        end: scheduleData.end,
        category: scheduleData.isAllDay ? "allday" : "time",
        dueDateClass: "",
        location: scheduleData.location,
        raw: {
          class: scheduleData.raw["class"]
        },
        state: scheduleData.state
      };
  
      cal.current.calendarInst.createSchedules([schedule]);
    }, []);
  
    const onBeforeDeleteSchedule = useCallback((res) => {
      console.log(res);
  
      const { id, calendarId } = res.schedule;
  
      cal.current.calendarInst.deleteSchedule(id, calendarId);
    }, []);
  
    const onBeforeUpdateSchedule = useCallback((e) => {
      console.log(e);
  
      const { schedule, changes } = e;
  
      cal.current.calendarInst.updateSchedule(
        schedule.id,
        schedule.calendarId,
        changes
      );
    }, []);
  
    function _getFormattedTime(time) {
      const date = new Date(time);
      const h = date.getHours();
      const m = date.getMinutes();
  
      return `${h}:${m}`;
    }
  
    function _getTimeTemplate(schedule, isAllDay) {
      var html = [];
  
      if (!isAllDay) {
        html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
      }
      if (schedule.isPrivate) {
        html.push('<span class="calendar-font-icon ic-lock-b"></span>');
        html.push(" Private");
      } else {
        if (schedule.isReadOnly) {
          html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
        } else if (schedule.recurrenceRule) {
          html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
        } else if (schedule.attendees.length) {
          html.push('<span class="calendar-font-icon ic-user-b"></span>');
        } else if (schedule.location) {
          html.push('<span class="calendar-font-icon ic-location-b"></span>');
        }
        html.push(" " + schedule.title);
      }
  
      return html.join("");
    }
  
    const templates = {
      time: function (schedule) {
        console.log(schedule);
        return _getTimeTemplate(schedule, false);
      }
    };
    return(
        <TUICalendar
        ref={cal}
        height="80vh"
        view={calendarView}
        useCreationPopup={true}
        useDetailPopup={true}
        template={templates}
        calendars={calendars}
        schedules={schedules}
        onClickSchedule={onClickSchedule}
        onBeforeCreateSchedule={onBeforeCreateSchedule}
        onBeforeDeleteSchedule={onBeforeDeleteSchedule}
        onBeforeUpdateSchedule={onBeforeUpdateSchedule}
      />
    )

}

export default Calendar;