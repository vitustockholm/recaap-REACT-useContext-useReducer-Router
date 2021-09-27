import React, { useReducer } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/1_header/Nav';

// Pages import
import HomePage from './pages/HomePage';
import ClientsPage from './pages/ClientsPage';
// Global State
//-useReducer logic
let initialState = 0;
const reducer = (state, action) => {
  //-reducer gives back new state
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
// Context
export const VisitedPagesContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Router>
        <header>
          <Nav />
          <p>{state}</p>
          <button onClick={() => dispatch({ type: 'RESET' })}>
            reset visits...
          </button>
        </header>
        <VisitedPagesContext.Provider value={{ increment: dispatch }}>
          <main>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/clients' component={ClientsPage} />
            </Switch>
          </main>
        </VisitedPagesContext.Provider>
        <footer></footer>
      </Router>
    </>
  );
}

export default App;
