import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import VideoDetail from "./components/VideoDetail";
import Homef from "./components/Homef";
import {Provider} from 'react-redux'
import Store from "./components/redux/store";
import Start from "./components/Start";
import Pagenotfound from "./components/Pagenotfound";
class App extends React.Component {
 

  render() {
    return (
      <Provider store={Store} >
        
     <Routes>
       <Route path="/" element={<Homef/>} />
       <Route path='/video' element={<VideoDetail/>}/>
       <Route path='*' element={<Pagenotfound/>} />
     </Routes>
     </Provider>
    );
  }
}

export default App;