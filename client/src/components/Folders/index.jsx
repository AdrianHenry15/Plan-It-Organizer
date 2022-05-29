import React, { useState, useEffect } from 'react'
import { FolderTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Folders = ({ user }) => {
  // if(!folders.length) {
  //   return <></>;
  // }
  const [folders, setFolders] = useState(user?.folders);
  // console.log(folders);

  // useEffect(() => {
  //   console.log(user);
  //   if(user) {
  //     setFolders(user?.folders);
  //     return () => { return folders }
  //   }
  // }, [user]); 

  return (
    <div>
      {user ? folders.map((folder, index) => (
        <Link 
          to={`/folder/${folder._id}`}
          key={index}
        >
          <div className="flex flex-col">
            <FolderTwoTone />
            <div className="text-center">{folder.title}</div>
          </div>
        </Link>
      )) : (
        <></>
      )}
    </div>
  )
}

export default Folders