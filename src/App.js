import CreatePost from "./components/CreatePost";
import AppToolBar from "./components/AppToolbar";
import MainHeader from "./components/MainHeader";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import NotificationsPage from "./components/NotificationsPage";
import SearchPage from "./components/SearchPage";
import MessagesPage from "./components/MessagesPage";


function App() {
  return (
    <div className="App">

      <AppToolBar />

      {/* Routing */}
      <Routes>
        <Route exact path="/hive" element={<Home />}/>
        <Route exact path="/search" element={<SearchPage />}/>
        <Route exact path="/profile/:username" element={<ProfilePage />}/>
        <Route exact path='/notifications' element={<NotificationsPage />} />
        <Route exact path="/messages" element={<MessagesPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
