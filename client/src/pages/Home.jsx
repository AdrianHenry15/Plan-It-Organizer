import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Folders from '../components/Folders';
import FolderForm from '../components/Folders';
import Auth from '../utils/auth';

const Home = () => {
  const param = Auth.getProfile().data.username;

  const { loading, data } = useQuery(GET_ME, {
    variables: { username: param }
  });
  console.log(param);
  console.log(data);

  const folders = data?.me || []; // '?.' is for optional chaining
  console.log(folders);

  return (
    <main>
      {loading ? (
        <div className="m-auto">Loading...</div>
      ) : (
        <div className="grid grid-cols-3">
          {/* <Folders folders={folders} /> */}
          <FolderForm />
        </div>
      )}
    </main>
  )
}

export default Home