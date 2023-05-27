import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Demo from './pages/demo';
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import { configureAppStore } from "./redux/store";


function App() {
  const store = configureAppStore();
  return (
    <Provider store={store}>
      <div className="App">
        <h1>REACT-REDUX BOILERPLATE WITH THUNK MIDDLEWARE</h1>
        <Router>
          <div>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
            <p>
              <Link to="/demo">Demo</Link>
            </p>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/demo" element={<Demo />} />
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
