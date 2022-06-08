import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
 

  render() {
    return (
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/video' element={<VideoDetail/>}/>
     </Routes>
    );
  }
}

export default App;