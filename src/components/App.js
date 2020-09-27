import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Markdown Previewer</h2>
        </div>

        <div className="markdown-area">
          <h3>Markdown</h3>
          <textarea name="markdown-textarea">
          The cat was playing in the garden.
          </textarea>
        </div>
        
        <div className="html-area">
          <h3>HTML</h3>
          <textarea name="html-textarea">
          The cat was playing in the garden.
          </textarea>
        </div>

        <div className="Footer">
          <p>Copyright 2020, camila. Thanks to <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> and <a href="https://type.fit/" title="Type.fit">Type.fit</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
