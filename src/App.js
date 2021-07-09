import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userlist from "./pages/userList/UserList";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router exact path="/users">
           <Userlist/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
