import React, { useState, useEffect } from 'react';
import { fetchData } from './utils';

//Import Styles
import './styles/main.scss';

//Import components
import Navsticky from './components/nav';

const App = () => {
  //State
  const [planetInfo, setPlanetInfo] = useState(null);

  //UseEffect for fetch data
  useEffect(() => {
    setTimeout(async () => {
      fetchData({ setPlanetInfo });
    }, 500);
  }, []);

  return <Navsticky planetInfo={planetInfo} />;
};

export default App;
