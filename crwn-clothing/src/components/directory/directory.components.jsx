import React from 'react';
import { connect } from 'react-redux';
import MenuItem from '../menu-items/menu-items.components'
import { selectDirectorySection } from '../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss';
const Directory = ({sections}) => (
        <div className = 'directory-menu'>
        {sections.map(({title,imageurl,id,size}) => (
            <MenuItem key = {id} title = {title} imageurl = {imageurl} size = {size} />
        ))}
        </div>
    );

    const mapStateToProps = createStructuredSelector({
        sections: selectDirectorySection,

    })

export default connect(mapStateToProps)(Directory);