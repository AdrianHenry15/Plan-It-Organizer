import React from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_ASPIRATION } from "../../utils/queries";

const Aspirations = ({ aspirationId }) => {
  const { loading, data } = useQuery(QUERY_ASPIRATION, {
    variables: { id: aspirationId },
  });

  return (
    <div></div>
  )
}

export default Aspirations