import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Continents  from './components/continents/continents';
import './App.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

const App = () => (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="row">
          <p className="text-center text-primary assignmennt-heading">
            <strong>country list</strong>
          </p>
          <div className="col-md-10 col-md-offset-1 jobs-box">
            <div className="jobs-box-content">
              <Continents />
            </div>
          </div>
        </div>    
      </div>         
    </ApolloProvider>
  );

export default App;
