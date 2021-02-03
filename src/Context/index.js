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

const Provider = ({ children }) => {
  const [time, setTime] = useState(initialTimeState);
  const [greeting, setGreeting] = useState('Good morning');
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const OpenDetails = () => {
    setIsOpen(!isOpen);
  };
  const checkTime = (timeValue) => {
    const currentHour = new Date(timeValue).getHours();
    setIsDay(currentHour >= 5 && currentHour <= 18 ? true : false);
  };
  const checkDayTime = (timeValue) => {
    const hour = new Date(timeValue).getHours();
    let greeting;
    switch (true) {
      case hour >= 5 && hour < 12:
        greeting = 'Good Morning';
        break;
      case hour >= 12 && hour < 18:
        greeting = 'Good afternoon';
        break;
      case hour >= 18 || hour < 5:
        greeting = 'Good evening';
        break;
      default:
        greeting = 'Good Morning';
        break;
    }
    setGreeting(greeting);
  };
  const getTime = async () => {
    try {
      const response = await axios.get('https://worldtimeapi.org/api/ip/');
      if (response.status === 200) {
        const {
          abbreviation,
          datetime,
          day_of_week,
          day_of_year,
          timezone,
          week_number,
        } = response.data;

        setTime((prev) => ({
          ...prev,
          abbreviation,
          datetime,
          day_of_week,
          day_of_year,
          timezone,
          week_number,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getLocation = async () => {
    try {
      const response = await axios.get('https://freegeoip.app/json/');
      if (response.status === 200) {
        const { city, country_code } = response.data;
        setTime((prev) => ({
          ...prev,
          city,
          country_code,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkTime(time.datetime);
    checkDayTime(time.datetime);
    getLocation();
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    getTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ContextValue = {
    time,
    isOpen,
    OpenDetails,
    isDay,
    greeting,
    width,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
