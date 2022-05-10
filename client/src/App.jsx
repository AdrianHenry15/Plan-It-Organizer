import React from 'react';
import {CommentForm, CommentList, Footer, FriendList, Header, Nav, PlanList, ReplyForm, ReplyList} from './components';

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <PlanList />
    <FriendList />
    <CommentForm />
    <CommentList />
    <ReplyForm />
    <ReplyList />
    <Footer />
    </>

  )
}

export default App