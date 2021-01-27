import React, { useState, useEffect } from 'react';

//Import Styles
import './styles/main.scss';

//Import components
import Navsticky from './components/nav';

const App = () => {
  //State
  const [planetInfo, setPlanetInfo] = useState(null);
  //UseEffect
  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch('./data.json');
      const data = await result.json();
      setPlanetInfo(data);
    }, 1000);
  }, []);

  return <Navsticky planetInfo={planetInfo} />;
};

export default App;
