import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_FOLDER } from "../utils/queries";
import { Link } from "react-router-dom";

const SingleFolder = ({ folderId, setFolderId }) => {
  // const { id: folderName } = useParams();
  // console.log(folderId);

  const { loading, data } = useQuery(QUERY_FOLDER, {
    variables: { id: folderId },
  });
  const [output, setOutput] = useState("Loading...");

  console.log(data, folderId,);

  useEffect(() => {
    if (loading) {
      return () => {
        return <div>{output}</div>;
      };
    } else if (data) {
      const aspirations = data.folder.aspirations;
      console.log(aspirations);

      let aspirationReturn = (
        <div>
          {loading ? (
            <div>Loading...</div>
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
