import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  pageSize=5;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="General" pagesize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/Business" element={<News key="Business"  pagesize={this.pageSize} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment" pagesize={this.pageSize} country="in" category="Entertainment" />} />
            <Route exact  path="/General" element={<News key="General" pagesize={this.pageSize} country="in" category="General" />} />
            <Route exact path="/Health" element={<News key="Health" pagesize={this.pageSize} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News key="Science" pagesize={this.pageSize} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News key="Sports"  pagesize={this.pageSize} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News key="Technology" pagesize={this.pageSize} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
