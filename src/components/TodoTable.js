import * as React from 'react';
import  axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';





export default function TodoTable(probs) {

   const navigate = useNavigate();
  

  const columns : GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
   
 {
  field: "Update",
  width:120,
  renderCell: (cellValues) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={(event) => {
        }}
      >
        Update
      </Button>
    );
  }
},
  {
  field: "Delete",
  width:120,
  renderCell: (cellValues) => {
    return (
      <Button
        variant="contained"
        color="error"
        onClick={(event) => {
        }}
      >
        delete
      </Button>
    );
  }
}
];
  return (
    <div style={{ height: 400, width: '100%' ,marginTop:"2rem"}}>
      <DataGrid
        rows={probs.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
