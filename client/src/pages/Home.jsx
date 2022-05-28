import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_FOLDERS, GET_ME_BASIC } from '../utils/queries';
import Folders from '../components/Folders';

const Home = ({ folderName, setFolderName }) => {
  const { loading, data } = useQuery(GET_FOLDERS);

  const folders = data?.folders || []; // '?.' is for optional chaining

  return (
    <main>
      {loading ? (
        <div className="m-auto">Loading...</div>
      ) : (
        <div className="grid grid-cols-3">
          <Folders folderName={folderName} setFolderName={setFolderName} folders={folders} />
          <addFolder />
        </div>
      )}
    </main>
  )
}

export default Home