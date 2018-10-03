import React from 'react';
//import PropTypes from 'prop-types';
import './Grid.css';
import Icons from './icon_menu/icons';
const icons = ["icons8-facebook-50.png","icons8-search-50.png","icons8-secured-letter-50.png","icons8-twitter-50.png"];
const Grid =() => {
    let r = [];
    icons.map(i => r.push({src:window.location.origin + '/images/icon_menu/' + i,alt:i}));
    //console.log(x);
    return (
        <div className="FrontPage">
        <div className="grid boxed lines small">
            <span className="box01 header">Options Menu</span>
            <span className="box02 content">Emblem Image</span>
            {/*
            <span className="box03 leftside">Leftside</span>
            <span className="box04 rightside">Rightside</span>
            */}
            <span className="box05 footer">Footer</span>
            <span className="box07 empty">Empty</span>
            <span className="box08 iconmenu"><div className="Icons"><Icons noalt={true} images={r}/></div></span>
            <span className="box09 mainmenu">MainMenu</span>
            <span className="box10 imageshowcase">ImageshowCase</span>
            <span className="box11 featuredProductsHeader">FeaturedProductsHeader</span>
            <span className="box12 featuredProductsImages">FeaturedProductsImages</span>

    </div> 
    </div>
    );
}

export default Grid;
