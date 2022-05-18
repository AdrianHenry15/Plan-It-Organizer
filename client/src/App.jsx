import React from 'react';
import {Home, Login, NoMatch, Profile, Signup, SingleComment, SinglePlan} from './pages';
import Nav from './components/Nav/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

// main App component layout
    // <ApolloProvider client={client}>
    //   <Router>
    //     <div>
    //       <Nav />
    //       <Routes>
    //         <Route exact path="/" component={Home} />
    //         <Route exact path="/login" component={Login} />
    //         <Route exact path="/signup" component={Signup} />
    //         <Route exact path="/profile" component={Profile} />
    //         <Route exact path="/plans/:id" component={SinglePlan} />
    //         <Route exact path="/comments/:id" component={SingleComment} />
    //         <Route component={NoMatch} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </ApolloProvider>

    // so we can see each page as its rendered when in development
    <>
    <Nav />
    <Home />
    <Login />
    <Signup />
    <Profile />
    <SinglePlan />
    <SingleComment />
    <NoMatch />
    </>
  );
}

export default App