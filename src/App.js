import CreatePost from "./components/CreatePost";
import AppToolBar from "./components/AppToolbar";
import MainHeader from "./components/MainHeader";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import NotificationsPage from "./components/NotificationsPage";
import SearchPage from "./components/SearchPage";
import MessagesPage from "./components/MessagesPage";
import Pollinate from "./components/Pollinate";
import { useState } from "react";


function App() {

  const [isPollinateModalVisible, setIsPollinateModalVisible] = useState(false);
  const profile = {displayName:"John Doe", userName: "doeBoyJohn", isYourProfile:true, profilePicture:'../assets/images/samplebanner.jpg'}

  return (
    <div className="App">

      <AppToolBar modalOpen={setIsPollinateModalVisible}/>

      {/* Routing */}
      <Routes>
        <Route exact path="/hive" element={<Home />}/>
        <Route exact path="/search" element={<SearchPage />}/>
        <Route exact path="/profile/:username" element={<ProfilePage profileInformation={profile} />}/>
        <Route exact path='/notifications' element={<NotificationsPage />} />
        <Route exact path="/messages" element={<MessagesPage />}/>
        {/* <Route exact path="/pollinate" element={<Pollinate />} /> */}
      </Routes>

      <Pollinate isOpen={isPollinateModalVisible} modalHandler={setIsPollinateModalVisible}/>
      
    </div>
  );
}

export default App;
