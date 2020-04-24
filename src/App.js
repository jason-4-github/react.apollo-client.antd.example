import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { books } = data
  console.log(data, books)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Primary</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <b>{ books[0].title }</b>
        <b>{ books[0].author }</b>
        <br />
        <b>{ books[1].title }</b>
        <b>{ books[1].author }</b>
      </header>
    </div>
  );
}

export default App;
