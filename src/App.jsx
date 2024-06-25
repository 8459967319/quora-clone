
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
// import Widgets from './components/Widgets.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </div>
    </div>
  );
}

export default App;
