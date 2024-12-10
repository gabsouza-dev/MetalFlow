import React, { useEffect, useState } from 'react';
import { HttpClient } from '../services/HttpClient';

const ProcedureGrid = ({ taskId }: { taskId: number }) => {
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    async function fetchProcedures() {
      const data = await HttpClient.get(`/procedures/${taskId}`);
      setProcedures(data);
    }
    fetchProcedures();
  }, [taskId]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {procedures.map((procedure: any) => (
          <tr key={procedure.id}>
            <td>{procedure.id}</td>
            <td>{procedure.name}</td>
            <td>{procedure.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProcedureGrid;
