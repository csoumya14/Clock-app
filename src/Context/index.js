import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const initialTimeState = {
  abbreviation: 'BST',
  datetime: new Date(),
  day_of_week: 5,
  day_of_year: 295,
  city: 'London',
  country_code: 'UK',
  timezone: 'Europe/London',
  week_number: 42,
};

const initialQuoteState = {
  author: 'Ada Lovelace',
  content:
    'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
};

const Provider = ({ children }) => {
  const [time, setTime] = useState(initialTimeState);
  const [quote, setQuote] = useState(initialQuoteState);
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(false);

  const OpenDetails = () => {
    setIsOpen(!isOpen);
  };
  const checkTime = (timeValue) => {
    const currentHour = new Date(timeValue).getHours();
    setIsDay(currentHour >= 5 || currentHour <= 18 ? true : false);
  };

  useEffect(() => {
    checkTime(time.datetime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ContextValue = {
    time,
    quote,
    isOpen,
    OpenDetails,
    isDay,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
