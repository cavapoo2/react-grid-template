import React from 'react';
//import PropTypes from 'prop-types';
import './Grid.css';
const Grid = () => {
    return (
        <div className="grid boxed lines small">
            <span className="box01 header"></span>
            <span className="box02 content"></span>
            <span className="box03 leftside"></span>
            <span className="box04 rightside"></span>
            <span className="box05 footer"></span>
    </div> 
    );
}

export default Grid;
