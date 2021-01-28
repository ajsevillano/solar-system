import React, { useState, useEffect } from 'react';

//Import Styles
import './styles/main.scss';

//Import components
import Navsticky from './components/nav';

const App = () => {
  //Set language
  localStorage.setItem('lang', 'ES');

  //State
  const [planetInfo, setPlanetInfo] = useState(null);
  //UseEffect
  useEffect(() => {
    setTimeout(async () => {
      const datalang = localStorage.getItem('lang');
      const applang = `./data/data_${datalang}.json`;
      const result = await fetch(applang);
      const data = await result.json();
      setPlanetInfo(data);
    }, 500);
  }, []);

  return <Navsticky planetInfo={planetInfo} />;
};

export default App;
