import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import FolderForm from '../components/Folders';
import { FolderTwoTone } from "@ant-design/icons";

const Home = ({ setFolderId }) => {
  const { loading, data } = useQuery(QUERY_ME);
  const [output, setOutput] = useState('Loading...');

  useEffect(() => {
    if(loading) {
      return () => { return <div>{output}</div>; }
    } else if (data.me.folders) {
      let folderReturn = (
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
          {data.me.folders.map((folder, index) => (
            <Link 
              to={`/folder/${folder.title}`}
              key={index}
              onClick={() => setFolderId(folder._id)}
            >
              <div className="flex flex-col">
                <FolderTwoTone className="homepage-folders" />
                <div className="text-center text-lg">{folder.title}</div>
              </div>
            </Link>
          ))}
        </div>
              <FolderForm />
            </div>
          )}
        </div>
      );
      setOutput(folderReturn);
      return () => output;
    }
  }, [data, loading]);
  
  return output;
}

export default Home