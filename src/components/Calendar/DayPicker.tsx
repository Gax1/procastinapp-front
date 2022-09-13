import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { changeDateActionCreator } from "../../store/features/daysSlice/daysSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { dateFormater } from "../../utils/dateFormater";
import "./DayPicker.css";

const DayPicker = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      value={date}
      onChange={setDate}
      onClickDay={() => dispatch(changeDateActionCreator(dateFormater(date)))}
      data-testid="calendar-id"
    />
  );
};
export default DayPicker;
