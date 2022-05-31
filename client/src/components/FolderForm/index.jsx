import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FOLDER, REMOVE_FOLDER } from "../../utils/mutations";
import { QUERY_FOLDERS, QUERY_ME } from "../../utils/queries";
import { FolderAddTwoTone } from "@ant-design/icons";
import Auth from '../../utils/auth';

const FolderForm = () => {
  // state and mutations
  const [folderText, setText] = useState("");
  const [removeFolder, {err}] = useMutation(REMOVE_FOLDER);

  const [addFolder, { error }] = useMutation(ADD_FOLDER, {
    update(cache, { data: { addFolder } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });

        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, folders: [...me.folders, addFolder] } },
        });
      } catch (e) {
        console.warn("First folder insertion by user!");
      }
    },
  });

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

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addFolder({
        variables: { title: folderText },
      });
      setText("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="flex flex-col " onSubmit={handleFormSubmit}>
        <button type="submit" className="homepage-folders my-4 ">
          <FolderAddTwoTone />
        </button>
        <input
          type="text"
          placeholder="folder name"
          className="text-slate-900 mx-auto mb-6 w-60 py-1 "
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default FolderForm;
