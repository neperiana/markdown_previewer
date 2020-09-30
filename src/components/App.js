// React
import React, { Component } from 'react';

// CSS
import './App.css';

// Resources
import example_md from '../resources';

// Marked library 
import marked from 'marked';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
});

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      input: '',
      html: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  handleChange(event) {
    let input = event.target.value;
    let html = marked(input);
    this.setState({
      input: input,
      html: html
    });
  }
  componentDidMount() {
    let html = marked(example_md);
    this.setState({
      input: example_md,
      html: html
    })
  }
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>Markdown Previewer</h2>
        </div>

        <div className="containers">

          <div className="markdown-area">
            <h3>Markdown</h3>
            <textarea name="markdown-textarea"
                      value={this.state.input} 
                      onChange={this.handleChange}
            />
          </div>
          
          <div className="html-area">
            <div><h3>HTML</h3></div>
            <div className="html-rendered" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
          </div>

        </div> 

        <div className="Footer">
          <p>	&#169; 2020, camila. Thanks to <a href="https://cdnjs.com/libraries/marked" title="marked">marked</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
