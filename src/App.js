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

  // next time will try and brainstorm the best way to have an ID check for all pages to gather information from only the user who is logged in and profile details from other users

  // user profile and conversations list for testing
  const conversationsList = [10002,10003,10004,10005,10006,10007,10008,10009,100010];
  const userProfile = {displayName:"John Doe", userName: "doeBoyJohn", userID:1 , profilePicture:'../assets/images/samplebanner.jpg', conversations: conversationsList}

  
  // will pass these sample profiles for testing 
  // Need to determine if userID's will be necessary or if userNames are sufficient ways to identify users
  const sampleProfile1 = {displayName:"Joe Schmoe", userName: "yoJoeSchmoe",  profilePicture:'../assets/images/samplebanner.jpg', conversations: [10002]}
  const sampleProfile2 = {displayName:"Ted Reddy", userName: "datGuyTed",  profilePicture:'../assets/images/samplebanner.jpg', conversations: conversationsList}
  const sampleProfile3 = {displayName:"Joseph Hallow", userName: "jojojojo",  profilePicture:'../assets/images/samplebanner.jpg', conversations: conversationsList}
  const sampleProfile4 = {displayName:"Mac French", userName: "french_vanilla",  profilePicture:'../assets/images/samplebanner.jpg', conversations: conversationsList}


  return (
    <div className="App">

      <AppToolBar modalOpen={setIsPollinateModalVisible}/>

      {/* Routing */}
      <Routes>
        <Route exact path="/hive" element={<Home />}/>
        <Route exact path="/search" element={<SearchPage />}/>
        {/* for now the profile page will only return the user's profile page. need to go back in and change that. checking functionality at the moment before opening that up */}
        <Route exact path="/profile/:username" element={<ProfilePage profileInformation={userProfile} />}/>
        <Route exact path='/notifications' element={<NotificationsPage />} />
        <Route exact path="/messages" element={<MessagesPage conversationsList={userProfile.conversations}/>}/>
        {/* <Route exact path="/pollinate" element={<Pollinate />} /> */}
      </Routes>

      <Pollinate isOpen={isPollinateModalVisible} modalHandler={setIsPollinateModalVisible}/>
      
    </div>
  );
}

export default App;
