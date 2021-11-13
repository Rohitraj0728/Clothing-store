import React from 'react';

import './menu-items.styles.scss';
const MenuItem = ({title ,imageurl,size}) => (
    <div className={`${size} menu-items`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageurl})`
      }}
    />
    <div className = 'content'>
     <h1 className = 'title'> {title}</h1>
     <span className = 'sub-title'>SHOP NOW</span>
    </div>
    </div>
)

export default MenuItem;