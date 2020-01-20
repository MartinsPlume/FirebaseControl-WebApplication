import React, { Component } from 'react'
import './App.css';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Exercises from "./pages/Exercises"
import Trainings from "./pages/Trainings"
import { AuthProvider } from './components/Auth';
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from './components/NavBar';

export class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    routes: [
      {
        title: 'Home',
        key: 'home',
        link: '/',
        component: Home
      },
      {
        title: 'Users',
        key: 'users',
        link: '/users',
        component: Users
      },
      {
        title: 'Exercises',
        key: 'exercises',
        link: '/exercises',
        component: Exercises
      }
      // {
      //   title: 'Trainings',
      //   key: 'trainings',
      //   link: '/trainings',
      //   component: Trainings
      // }
    ]
  }
}

renderRoutes() {
  const state = this.state;
  const { routes } = state;

  return routes.map(route => {
    const routeKey = `${route.key} ${route.title}`;
    return <PrivateRoute exact key={routeKey} path={route.link} component={route.component}/>;
  });
}

  renderMenuItems() {
  const state = this.state;
  const { routes } = state;
  
  return routes.map(route => {
      return (
      <Nav.Link>
          <Link to={route.link} key={route.key}>
              <div className="menu-item">{route.title}</div>
          </Link>
      </Nav.Link>
      );
    });
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
              <NavBar links={this.renderMenuItems()}></NavBar>
                <div className="Navigation-Bar">
                    <Switch>
                      {this.renderRoutes()}
                    </Switch>
                </div>
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </AuthProvider>
    )
  }
}

export default App