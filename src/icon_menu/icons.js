import React from 'react';
import PropTypes from 'prop-types';
import './Icons.css';
import Icon from './icon';
const Icons = ({images,noalt}) => {
    let k=0;
    let imgs = images.map((v) => {
        return (
            (!noalt) ? <Icon key={k++} src={v.src} alt={v.alt}/> : <Icon key={k++} src={v.src} alt=''/>
        );
    });
    return <div>{imgs}</div>;
}

Icons.protoType = { 
    images: PropTypes.arrayOf(PropTypes.string),
}
export default Icons;