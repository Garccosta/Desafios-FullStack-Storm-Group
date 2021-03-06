import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Checkbox } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Delete, Edit, MoreHoriz } from '@material-ui/icons';
import styles from '../styles/components/DataTable.module.css';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#333333',
    },
  },
});

const StyledTableCell  = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    margin: "24px 40px",
    borderRadius: "8px",
  },
  StyledTableCell : {
    opacity: 0.2
  },
  StyledTableRow : {
    backgroundColor: "white",
    borderBottom: "2px solid var(--wine)"
  }
});

const columns = [
  { field: 'col0', headerName: '', width: 50 },
  { field: 'col1', headerName: 'USUÁRIO', width: 50 },
  { field: 'col2', headerName: 'EMAIL', width: 150 },
  { field: 'col3', headerName: 'DATA DE INCLUSÃO', width: 50 },
  { field: 'col4', headerName: 'DATA DE ALTERAÇÃO', width: 50 },
  { field: 'col5', headerName: 'REGRAS', width: 50 },
  { field: 'col6', headerName: 'STATUS', width: 50 },
  { field: 'col7', headerName: 'AÇÕES', width: 150 }
];

export function DataTable({ rowsData }) {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  
  const openEditOptions = (id) => {
    setIsEditing(true);
    setSelectedRowId(id);
  }

  const deleteRow = (id) => {
    setIsEditing(false);
    setSelectedRowId(null);
  };

  const editRow = (id) => {
    setIsEditing(false);
    setSelectedRowId(null);
  };

  const rows = rowsData;

  return (
        <TableContainer className={classes.tableContainer}>
          <Table className={classes.table} aria-label="customized table"> 
            <TableHead>
              <TableRow>
                <StyledTableCell>{columns[0].headerName}</StyledTableCell >
                <StyledTableCell  align="center">{columns[1].headerName}</StyledTableCell >
                <StyledTableCell  align="center">{columns[2].headerName}</StyledTableCell >
                <StyledTableCell  align="center">{columns[3].headerName}</StyledTableCell >
                <StyledTableCell  align="center">{columns[4].headerName}</StyledTableCell >
                <StyledTableCell  align="center">{columns[5].headerName}</StyledTableCell >
                <StyledTableCell  align="right">{columns[6].headerName}</StyledTableCell >
                <StyledTableCell  align="right">{columns[7].headerName}</StyledTableCell >
              </TableRow>
            </TableHead>
            <TableBody>
                {rows.map( row => (
                  row.id == selectedRowId ?
                  (<StyledTableRow  className={ classes.StyledTableRow } key={row.id}>
                    <StyledTableCell className={ classes.StyledTableCell } component="th" scope="row"><Checkbox></Checkbox></StyledTableCell >
                    <StyledTableCell className={ classes.StyledTableCell } align="center">{row.col1}</StyledTableCell >
                    <StyledTableCell className={ classes.StyledTableCell } align="right">{row.col2}</StyledTableCell >
                    <StyledTableCell className={ classes.StyledTableCell } align="center">{row.col3}</StyledTableCell >
                    <StyledTableCell className={ classes.StyledTableCell } align="center">{row.col4}</StyledTableCell >
                    <StyledTableCell className={ classes.StyledTableCell } align="center">{row.col5}</StyledTableCell >
                    <StyledTableCell className={ classes.StyledTableCell } align="right">{row.col6}</StyledTableCell >
                    <StyledTableCell  align="right">
                      <button onClick={() => deleteRow(row.id)} className={ styles.deleteIcon } ><Delete style={{ fontSize: 20 , color: "var(--gray-icon)"}} /></button>
                      <button onClick={() => editRow(row.id)} className={ styles.editIcon }><Edit style={{ fontSize: 20 , color: "var(--gray-icon)"}} /></button>
                    </StyledTableCell >
                  </StyledTableRow >)
                  :
                (<StyledTableRow  key={row.id}>
                  <StyledTableCell  component="th" scope="row"><Checkbox></Checkbox></StyledTableCell >
                  <StyledTableCell  align="center">{row.col1}</StyledTableCell >
                  <StyledTableCell  align="right">{row.col2}</StyledTableCell >
                  <StyledTableCell  align="center">{row.col3}</StyledTableCell >
                  <StyledTableCell  align="center">{row.col4}</StyledTableCell >
                  <StyledTableCell  align="center">{row.col5}</StyledTableCell >
                  <StyledTableCell  align="right">{row.col6}</StyledTableCell >
                  <StyledTableCell  align="right"><button onClick={() => openEditOptions(row.id)}><MoreHoriz/></button></StyledTableCell >
                </StyledTableRow >)
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  )
}