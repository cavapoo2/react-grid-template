import React from 'react';
//import PropTypes from 'prop-types';
import './Grid.css';
const Grid = () => {
    return (
        <div className="grid boxed lines small">
            <span className="box01 header">Options Menu</span>
{/*            <span className="box06 header2">Header</span>*/}
            <span className="box02 content">Emblem Image</span>
            {/*
            <span className="box03 leftside">Leftside</span>
            <span className="box04 rightside">Rightside</span>
            */}
            <span className="box05 footer">Footer</span>
            <span className="box07 empty">Empty</span>
            <span className="box08 iconmenu">IconsMenu</span>
            <span className="box09 mainmenu">MainMenu</span>
            <span className="box10 imageshowcase">ImageshowCase</span>
            <span className="box11 featuredProductsHeader">FeaturedProductsHeader</span>
            <span className="box12 featuredProductsImages">FeaturedProductsImages</span>

    </div> 
    );
}

export default Grid;
