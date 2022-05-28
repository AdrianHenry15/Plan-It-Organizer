import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_FOLDER } from '../../utils/mutations';
import { GET_FOLDERS, GET_ME } from '../../utils/queries';
import { FolderAddTwoTone } from "@ant-design/icons";

const FolderForm = () => {
    const [folderText, setText] = useState('');
    const [addFolder, { error }] = useMutation(ADD_FOLDER, {
        update(cache, { data: { addFolder } }) {
            try {
                const { me } = cache.readQuery({ query: GET_ME });
                cache.writeQuery({
                    query: GET_ME,
                    data: { me: { ...me, folders: [...me.folders, addFolder] } },
                });
            } catch (e) {
                console.warn("First folder insertion by user!");
            }

            const { folders } = cache.readQuery({ query: GET_FOLDERS });

            cache.writeQuery({
                query: GET_FOLDERS,
                data: { folders: [addFolder, ... folders] }
            })
        }
    });

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addFolder({
                variables: { folderText }
            });
            setText('');
        } catch (e) {
            console.error(e);
        }
    }

  return (
    <div>
      <form className="flex flex-col">
        <button type="submit"><FolderAddTwoTone /></button>
        <input type="text" placeholder="folder name" className="text-slate-900 mx-1" />
      </form>
    </div>
  )
}

export default FolderForm