import React from 'react'
import { FolderTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Folders = ({ folders, folderId, setFolderId }) => {
  if(!folders.length) {
    return <></>;
  }

  return (
    <div>
      {folders.map(folder => {
        <Link 
          onClick={() => setFolderId(folder._id)} 
          to="/folder"
        >
          <div className="flex flex-col">
            <FolderTwoTone />
            <div className="text-center">{folder.title}</div>
          </div>
        </Link>
      })}
    </div>
  )
}

export default Folders