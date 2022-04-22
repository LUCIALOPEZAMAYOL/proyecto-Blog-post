import React from 'react';

const UserCard = (props) =>{
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>{props.children.props.name}</div>
                <div className='description'>
                    {props.children}
                </div>
            </div>
            <div className='ui bottom button '>
                <i className='add icon'></i>
                Add Icon
            </div>
        </div>
    )

}

export default UserCard;