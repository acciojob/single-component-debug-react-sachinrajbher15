import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return ReactDOM.render(
    <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>,
    document.getElementById('root')
  );
}
export default App;
