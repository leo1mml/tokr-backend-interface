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


// class App extends Component {
//   render() {
//     return (
      
//       <div id="outer-container">
//         <div className="App App-header">
//           <Header/>
//         </div>
//         <Menu width={230} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
//             <AppRouter/>
//         </Menu>
//         <div id="page-wrap"  className="App App-container">
//           <h1>Comecei aqui</h1>
//         </div>
//       </div>
//     );
//   }
// }
export default App