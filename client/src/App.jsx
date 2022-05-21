import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Home, Login, Signup, SingleAspiration, NoMatch } from "./pages";
import Nav from "./components/Nav/index";
import Aspirations from "./components/Aspirations";

const httpLink = createHttpLink({
  uri: "/graphql",
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
  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col h-screen bg-gradient-to-b from-slate-900 to-blue-700 text-sky-50">
        <Router>
          <main className="flex-grow">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/aspirations" component={Aspirations} />
              <Route render={() => <NoMatch />} />
            </Routes>
          </main>
          <Nav />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
