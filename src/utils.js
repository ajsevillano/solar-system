//Hooks & utils file to keep App file cleaner.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Function to fetch the data
async function fetchData({ setPlanetInfo }) {
  const datalang = 'EN';
  const applang = `./data/data_${datalang}.json`;
  const result = await fetch(applang);
  const data = await result.json();
  setPlanetInfo(data);
}

//Function to reset the scrollbar to the top when change page with react-router
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export { fetchData, ScrollToTop };
