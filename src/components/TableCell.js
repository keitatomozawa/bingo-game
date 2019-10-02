import React from 'react'
import PropTypes from 'prop-types'
import MaterialTableCell from '@material-ui/core/TableCell';

const TableCell = ({ appeared, num }) => (
    <MaterialTableCell
        style={{
            color: appeared ? "red" : "black",
            background: appeared ? "#87f3ff" : "transparent",
        }}
        align={"center"}
    >
        <span style={{fontSize: "3em"}}>{num}</span>
    </MaterialTableCell>
);

TableCell.propTypes = {
    appeared : PropTypes.bool.isRequired,
    num: PropTypes.number.isRequired
};

export default TableCell