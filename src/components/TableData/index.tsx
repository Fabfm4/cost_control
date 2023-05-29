import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Column } from './interfaces';
import { useCallback } from 'react';

interface Props {
    columns: Column[];
    modelData: any;
}

const TableData: React.FC<Props> = ({columns, modelData}) => {
    const buildRow = useCallback((row: object) => {
        return (
            <TableRow key={row.id}>
                {
                    columns.map((column: Column) => <TableCell key={column.id + row.id} align='center'>{row[column.id]}</TableCell>)
                }
            </TableRow>
        );
    }, []);
    
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align='center'
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.text}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {modelData.map(buildRow)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default TableData;
