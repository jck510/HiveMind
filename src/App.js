import CreatePost from "./components/CreatePost";
import FeedToolbar from "./components/FeedToolbar";
import MainHeader from "./components/MainHeader";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeader />
        <FeedToolbar />
        <CreatePost />
      </header>
    </div>
  );
}

export default App;
