import React, {useState} from 'react'
import { useMutation } from "@apollo/client";
import { UPDATE_FOLDER } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import { FolderAddTwoTone } from "@ant-design/icons";

const UpdateFolder = ({folderId, setFolderId}) => {
  const [folderText, setText] = useState("");

    const [updateFolder, { err }] = useMutation(UPDATE_FOLDER, {
        update(cache, { data: { updateFolder } }) {
          try {
            const { me } = cache.readQuery({ query: QUERY_ME });
    
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, folders: [...me.folders, updateFolder] } },
            });
          } catch (e) {
            console.warn("Something went wrong");
          }
        },
      });

      const handleChange = (event) => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
        }
      };

      const handleMouseOver = (id) => {
        setFolderId(id);
      };

      const handleUpdateFolder = async (event) => {
        event.preventDefault();
        console.log(folderId);
        try {
          await updateFolder({
            variables: { id: folderId, title: folderText }
                       
          });
        } catch (e) {
          console.error(e);
        }
      };

  return (
    <div>
    <form className="flex flex-col " onSubmit={handleUpdateFolder}>
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
  )
}

export default UpdateFolder