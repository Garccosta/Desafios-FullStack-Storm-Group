import { DataGrid } from '@material-ui/data-grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'USUÁRIO', width: 150 },
  { field: 'col2', headerName: 'EMAIL', width: 150 },
  { field: 'col3', headerName: 'DATA DE INCLUSÃO', width: 150 },
  { field: 'col4', headerName: 'DATA DE ALTERAÇÃO', width: 150 },
  { field: 'col5', headerName: 'REGRAS', width: 150 },
  { field: 'col6', headerName: 'STATUS', width: 150 },
];

export function DataTable() {
    return (
        <DataGrid rows={rows} columns={columns} pageSize={6} checkboxSelection />
    )
}