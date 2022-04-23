/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function UserCard(props) {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.children.props.name}</div>
        <div className="description">
          {props.children}
        </div>
      </div>
      <div className="ui bottom button ">
        <i className="add icon" />
        Add Icon
      </div>
    </div>
  );
}

export default UserCard;
