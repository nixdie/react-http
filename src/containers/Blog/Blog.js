import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
        <Route path="/" exact component={Posts} />
      </div>
    );
  }
}

export default Blog;
