import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'
import Greet from './Greet'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
       <Provider store={store}>
        <Routes>
          <Route path="/" element={ <Greet/> } />            
        </Routes>
       </Provider>
      </BrowserRouter>
    );
  }
}

export default App
