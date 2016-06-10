import React, { PropTypes } from 'react'

const Message = (props) =>
  <li>
    <img src={props.img} />
    <strong>{props.username}</strong>
    <p>{props.text}</p>
  </li>

Message.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Message
