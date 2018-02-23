import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';

const store = configureStore()

class App extends Component {
  render(){

   return (
   <Provider store={store}>
      <AppRouter/>
    </Provider> 
    )
  }
} 

export default App