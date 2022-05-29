import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_FOLDER } from '../utils/queries';

const SingleFolder = ({ folderId }) => {
    // const { id: folderName } = useParams();
    console.log(folderId);

    const { loading, data } = useQuery(QUERY_FOLDER, {
        variables: { id: folderId }
      });
    
      const folder = data?.thought || {};
    
      if(loading) {
        return <div>Loading...</div>
      }

  return (
    <div className="grid grid-cols-3">
      
    </div>
  )
}

export default SingleFolder;