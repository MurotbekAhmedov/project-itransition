import { React } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {useRoutes} from './routes';
import { useAuth } from "./hoooks/auth.hook";
import { AuthContext } from "./context/authContext";
import { Navbar } from "./components/Navbar";
import 'materialize-css';


function App() {
  const {token,login,logout, userId} = useAuth();
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token,login,logout,userId
    }}>
      <Router>
        {<Navbar></Navbar>}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
