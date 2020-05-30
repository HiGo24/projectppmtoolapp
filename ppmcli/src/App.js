import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import AddProject from './Components/projects/AddProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";
import UpdateProject from "./Components/projects/UpdateProject";
import ProjectBoard from "./Components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./Components/ProjectBoard/ProjectTasks/AddProjectTask";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addProject" component={AddProject} />
          <Route path="/updateProject/:id" component={UpdateProject} />
          <Route path="/ProjectBoard/:id" component={ProjectBoard} />
          <Route path="/addProjectTask/:id" component={AddProjectTask} />
          
        </Router>
      </Provider>
    );
  }
}

export default App;
