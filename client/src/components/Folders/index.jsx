import React from 'react'
import { FolderTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Folders = ({ folders }) => {
  // if(!folders.length) {
  //   return <></>;
  // }

  // console.log(folders);

  return (
    <div>
      {/* {folders.map((folder, index) => (
        <Link 
          to={`/folder/${folder._id}`}
          key={index}
        >
          <div className="flex flex-col">
            <FolderTwoTone />
            <div className="text-center">{folder.title}</div>
          </div>
        </Link>
      ))} */}
    </div>
  )
}

export default Folders