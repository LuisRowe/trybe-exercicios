import React from 'react';
import './App.css';

class App extends React.Component {
  render() {

    const compromissos = ['estudar', 'aprender', 'praticar']

    const Task = (value) => {
      return (
        value.map((item) => <li>{item}</li>)
      );
    }

  return Task(compromissos);

  }
}

export default App;
