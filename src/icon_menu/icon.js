import React from 'react';
import PropTypes from 'prop-types';
//import './Button.css';
const Icon = ({src,alt}) => {
    return(
    <img src={src} alt={alt} />
    );
}

Icon.protoType = {
    src: PropTypes.string,
    image:PropTypes.string,
    alt:PropTypes.string,
}
export default Icon;