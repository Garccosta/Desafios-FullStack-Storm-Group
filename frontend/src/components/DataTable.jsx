import { DataGrid } from '@material-ui/data-grid';
import styles from '../styles/components/DataTable.module.css';

const columns = [
  { field: 'col1', headerName: 'USUÁRIO', width: 150 },
  { field: 'col2', headerName: 'EMAIL', width: 150 },
  { field: 'col3', headerName: 'DATA DE INCLUSÃO', width: 150 },
  { field: 'col4', headerName: 'DATA DE ALTERAÇÃO', width: 150 },
  { field: 'col5', headerName: 'REGRAS', width: 150 },
  { field: 'col6', headerName: 'STATUS', width: 150 },
];

export function DataTable(props) {
    return (
          <DataGrid rows={props.rows} columns={columns} pageSize={6} checkboxSelection />
    )
}