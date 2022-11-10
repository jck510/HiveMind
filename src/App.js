import CreatePost from "./components/CreatePost";
import AppToolBar from "./components/AppToolbar";
import MainHeader from "./components/MainHeader";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";


function App() {
  return (
    <div className="App">


      {/* Routing */}
      <Routes>
        <Route exact path="/hive" element={<Home />}/>
      </Routes>
      
    </div>
  );
}

export default App;
