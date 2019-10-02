import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableCell from '../components/TableCell.js';
import MaterialTable from  '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

const Table = ({ table }) => {
    const array = table.map((val, idx)=> ({num: idx+1, appeared: val}));
    const tables = [];
    for (let i=0,j=array.length; i<j; i+=10) {
         tables.push(array.slice(i,i+10));
    }

    return (
        <MaterialTable>
            <TableBody>
                {
                    tables.map((chunk)=>(
                        <TableRow>
                            {chunk.map((cell)=> <TableCell num={cell.num} appeared={cell.appeared}/>)}
                        </TableRow>
                    ))
                }
            </TableBody>
        </MaterialTable>
    )

};

Table.propTypes = {
    table: PropTypes.arrayOf(PropTypes.bool.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
    table: state.table,
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)

