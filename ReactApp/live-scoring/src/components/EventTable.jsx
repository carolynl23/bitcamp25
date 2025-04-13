import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../index.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function createData(name, score, medal) {
  return { name, score, medal,};
}

function sortFunction(a, b) {
    if (a.score === b.score) {
        return (a.medal < b.medal) ? -1 : 1;
    }
    else {
        return (a.score > b.score) ? -1 : 1;
    }
}

function getEvents(id){
    let table = [
        createData('Bob', 9.7, 1),
        createData('Jon', 8.6, 3),
        createData('Ron', 7.6, 0),
        createData('Abe', 7.9, 0),
        createData('Jay', 8.9, 2),
    ]
    console.log(table);
    console.log(table.sort(sortFunction));
    
    return(table.sort(sortFunction));
}

function getEventName(id){
    return("ChangQuan");
}



export default function EventTable({eventid}) {

    const rows = getEvents(eventid);

  return (
    <div>
        <Card variant="outlined">{getEventName(eventid)}</Card>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
            <TableHead>
            <StyledTableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Score</StyledTableCell>
                <StyledTableCell align="right">Medal</StyledTableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
                <StyledTableCell align="right">{row.medal}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
