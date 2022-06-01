import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import FolderForm from "../components/FolderForm";
import { FolderTwoTone } from "@ant-design/icons";
import { useMutation } from "@apollo/client";

const Home = ({ setFolderId }) => {
  const { loading, data } = useQuery(QUERY_ME);
  const [output, setOutput] = useState("Loading...");
  const [removeFolder, {err}] = useMutation(REMOVE_FOLDER);

   // functions and handlers go here:
   const handleRemoveFolder = () => {
    console.log()
  }
 

 // end of delete folder handlers by Adrian

  useEffect(() => {
    if (loading) {
      return () => {
        return <div>{output}</div>;
      };
    } else if (data.me.folders) {
      const folders = data.me.folders;
      let folderReturn = (
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <div>
              <FolderForm/>
              <button 
              className=""
              onClick={handleRemoveFolder}>X</button>
              <div className="grid md:grid-cols-3 grid-cols-2 content-around m-4">
                {folders.map((folder, index) => (
                  <div className="">
                    
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
                  </div>
                ))}
                </div>
              </div>

            </div>
          )}
        </div>
      );
      setOutput(folderReturn);
      return () => output;
    }
  }, [data, loading]);

  return output;
};

export default Home;
