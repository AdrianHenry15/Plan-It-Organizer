import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


// pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CreateAspiration from './pages/CreateAspiration';
import NoMatch from './pages/NoMatch';
import SingleFolder from './pages/SingleFolder';

// components
import Nav from './components/Nav/index';
import Aspirations from './components/Aspirations';
import GetStarted from './components/GetStarted';
import HamburgerMenu from './components/HamburgerMenu';
import CalendarApp from './components/Calendar/Calendar';

import './App.css'

import AuthService from './utils/auth';

const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [folderId, setFolderId] = useState('');

  return (
    <ApolloProvider client={client}>
      <div className={`flex flex-col h-screen text-sky-50`}>
        <Router>
          <HamburgerMenu />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={AuthService.loggedIn() ? <Home setFolderId={setFolderId} /> : <GetStarted />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/folder/:name" element={<SingleFolder folderId={folderId} setFolderId={setFolderId} />} />
              <Route path="/aspirations" element={<Aspirations/>} />
              <Route path="/aspire" element={<CreateAspiration folderId={folderId} />} />
              <Route path="/calendar" element={<CalendarApp />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
          <Nav />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
