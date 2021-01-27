import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from '../pages/home';
import Planets from '../pages/planets';

function Navsticky({ planetInfo }) {
  return (
    <Router>
      <nav className="botton-menu">
        <div className="menu-buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
        <div className="menu-buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-planet"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M17.905 13.057c2.208 1.756 3.436 3.308 3.012 4.035-.67 1.146-5.204-.204-10.129-3.016-4.924-2.812-8.374-6.022-7.705-7.168.418-.716 2.347-.458 4.936.524" />
            <circle cx="12" cy="12" r="6" />
          </svg>
          <p>
            <Link to="/planets">Planets</Link>
          </p>
        </div>
        <div className="menu-buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-comet"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
            <line x1="4" y1="4" x2="11" y2="11" />
            <line x1="9" y1="4" x2="12.5" y2="7.5" />
            <line x1="4" y1="9" x2="7.5" y2="12.5" />
          </svg>
          <p>Others</p>
        </div>
        <div className="menu-buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-settings"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <p>settings</p>
        </div>
      </nav>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} planetsData={planetInfo} />}
        />
        <Route path="/planets" component={Planets} />
      </Switch>
    </Router>
  );
}

export default Navsticky;
