import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_FOLDER } from "../utils/queries";
import { REMOVE_FOLDER } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const SingleFolder = ({ folderId, setFolderId }) => {
  // const { id: folderName } = useParams();
  // console.log(folderId);

  const { loading, data } = useQuery(QUERY_FOLDER, {
    variables: { id: folderId },
  });
  const [output, setOutput] = useState(" ");
  const [removeFolder, {err}] = useMutation(REMOVE_FOLDER);

  console.log(data, folderId,);

   // functions and handlers
   const removeFolderId = (folderId) => {
    const savedFolderIds = localStorage.getItem('saved_folders')
      ? JSON.parse(localStorage.getItem('saved_folders'))
      : null;
  
    if (!savedFolderIds) {
      return false;
    }
  
    const updatedSavedFolderIds = savedFolderIds?.filter((savedFolderId) => savedFolderId !== folderId);
    localStorage.setItem('saved_folders', JSON.stringify(updatedSavedFolderIds));
  
    return true;
  };
  const handleDeleteFolder = async (folderId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // eslint-disable-next-line
      const { data } = await removeFolder({
        variables: { folderId },
      });

      removeFolderId(folderId);
    } catch (err) {
      console.error(err);
    }
  };

  // end of delete folder handlers by Adrian

  useEffect(() => {
    if (loading) {
      return () => {
        console.log(output)
        return <div>{output}</div>;
      };
    } else if (data) {
      const aspirations = data.folder.aspirations;
      console.log(aspirations);

      let aspirationReturn = (
        <div>
          {loading ? (
            <div> 
              <Link to="./CreateAspiration">
              <button className='text-sky-50  mb-2 mt-1 bg-rose-300 hover:bg-bubblegum-400 transition-all duration-300 mx-auto p-1 rounded-md' type='submit'>
                Create Aspiration 
              </button>
              </Link>
            </div>
          ) : (
              <div className="grid grid-cols-3 gap-4 mt-8">
                {aspirations.map((aspiration, index) => (
                  <Link
                    to={`/folder/${aspiration._id}`}
                    key={index}
                    onClick={() => setFolderId(aspiration.folderId)}
                  >
                    {/* <FolderTwoTone className="homepage-folders" /> */}
                    <div className="text-center text-lg">{aspiration._id}</div>
                  </Link>
                ))}
              </div>
          )}
        </div>
      );
      setOutput(aspirationReturn);
      return () => output;
    }
  }, [data, loading]);

  return output;
};

export default SingleFolder;
