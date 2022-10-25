import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
   <div className="linkedin_app">
       <Header className="hd"/>
 <div className="linkedin_body">
     <Sidebar className="sb"/>
     <Feed />
     <Rightbar className="rb"/>
  </div>    
   </div>

  );
}

export default App;
