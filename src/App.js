import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Userlist from "./pages/userList/UserList";
import User from './pages/user/User';


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
          <Router exact path="/user/:userId">
           <User/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
