import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FOLDER } from "../../utils/mutations";
import { QUERY_FOLDERS, QUERY_ME } from "../../utils/queries";
import { FolderAddTwoTone } from "@ant-design/icons";


const FolderForm = () => {
  // state and mutations
  const [folderText, setText] = useState("");

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
