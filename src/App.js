import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <div>
        <ol>
          {people.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactList
        contacts={[{ name: 'James' }, { name: 'Mark' }, { name: 'Steven' }]}
      />
      <ContactList
        contacts={[{ name: 'Evi' }, { name: 'Sarah' }, { name: 'Susan' }]}
      />
      <ContactList
        contacts={[{ name: 'Spot' }, { name: 'Rover' }, { name: 'Fido' }]}
      />
      </header>
      
    </div>
  );
}

export default App;
