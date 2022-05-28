import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_FOLDERS } from '../utils/queries';
import Folders from '../components/Folders';

const Home = () => {
  const { loading, data } = useQuery(GET_FOLDERS);

  const folders = data?.folders || []; // '?.' is for optional chaining

  return (
    <main>
      {loading ? (
        <div className="m-auto">Loading...</div>
      ) : (
        <div className="grid grid-cols-3">
          <Folders folders={folders} />
          <addFolder />
        </div>
      )}
    </main>
  )
}

export default Home