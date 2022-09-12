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

  const onChangeHandler = (value: Date) => {
    setDate(value);
    dispatch(changeDateActionCreator(dateFormater(date)));
  };

  return <Calendar value={date} onClickDay={onChangeHandler} />;
};
export default DayPicker;
