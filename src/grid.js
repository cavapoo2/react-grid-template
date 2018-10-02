import React from 'react';
//import PropTypes from 'prop-types';
import './Grid.css';
const Grid = () => {
    return (
        <div className="grid boxed lines small">
            <span className="box01 header">Header</span>
            <span className="box02 content">Content</span>
            <span className="box03 leftside">Leftside</span>
            <span className="box04 rightside">Rightside</span>
            <span className="box05 footer">Footer</span>
    </div> 
    );
}

export default Grid;
