import React from 'react';

import MenuItem from '../menu-items/menu-items.components'
import './directory.styles.scss';
class Directory extends React.Component {
constructor(){
    super();

    this.state = {
        sections : [
         {
             title: 'HATS',
             imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
             id: 1
         },
         {
             title: 'JACKETS',
             imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
             id: 1
         },
         {
             title: 'SNEAKERS',
             imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
             id: 1
         },
         {
             title: 'WOMENS',
             imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',
             size: 'large',
             id: 1
         },
         {
             title: 'MENS',
             imageurl: 'https://i.ibb.co/R70vBrQ/men.png',
             size: 'large',
             id: 1
         }
        ]
    }
}

render(){
    return (
        <div className = 'directory-menu'>
        {this.state.sections.map(({title,imageurl,id,size}) => (
            <MenuItem key = {id} title = {title} imageurl = {imageurl} size = {size} />
        ))}
        </div>
    )
}
}

export default Directory;