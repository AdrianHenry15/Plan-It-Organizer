import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import FolderForm from "../components/FolderForm";
import { FolderTwoTone } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { REMOVE_FOLDER } from "../utils/mutations";

const Home = ({ folderId, setFolderId }) => {
  const { loading, data } = useQuery(QUERY_ME);
  const [output, setOutput] = useState("Loading...");

  const [removeFolder, { err }] = useMutation(REMOVE_FOLDER, {
    update(cache, { data: { removeFolder } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });

        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, folders: [...me.folders, removeFolder] } },
        });
      } catch (e) {
        console.warn("Something went wrong");
      }
    },
  });

  const handleMouseOver = (id) => {
    // console.log(id)
    setFolderId(id);
    console.log(folderId);
  };

  // functions and handlers go here:
  const handleRemoveFolder = async (event) => {
    event.preventDefault();
    console.log(folderId);
    try {
      await removeFolder({
        variables: { id: folderId },
      });
    } catch (e) {
      console.error(e);
    }
  };

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
                <FolderForm />
                <div className="grid md:grid-cols-3 grid-cols-2 content-around m-4">
                  {folders.map((folder, index) => (
                    <div key={index} className="relative">
                      <Link
                        to={`/folder/${folder.title}`}
                        onClick={() => setFolderId(folder._id)}
                      >
                        <div className="flex flex-col">
                          <FolderTwoTone className="homepage-folders" />
                          <div className="text-center text-lg">
                            {folder.title}
                          </div>
                        </div>
                      </Link>
                      <div key={`dots-${index}`} className="dots-position">
                        <div className="dropdown">
                          <button
                            onMouseOver={() => {
                              setFolderId(folder._id);
                              console.log(folderId);
                            }}
                            className="dropbtn text-3xl"
                          >
                            ...
                          </button>
                          <ul className="dropdown-content">
                            <li className="cursor-pointer text-rich-500">
                              Update
                            </li>
                            <li
                              className="cursor-pointer text-rose-400"
                              onClick={handleRemoveFolder}
                            >
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>
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
