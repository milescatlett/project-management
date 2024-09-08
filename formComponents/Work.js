"use client"

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function Work({dow}) {

  const rows = dow[1]
  const columns = dow[0]
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}