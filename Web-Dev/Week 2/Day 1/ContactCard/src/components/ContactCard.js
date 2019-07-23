import React from 'react'
import '../styles/Card.css';
import classNames from 'classnames';

function Card({ name, mobile, email, m_number, className}) {
    const cardStyles = classNames('Card', className);
    return (
      <div className={cardStyles}>
        <div className="CardTop">
            Name: { name }
        </div>
        <div className="CardBody">
          Mobile: { mobile }
          <br></br>
          Work Number: { m_number }
        </div>
        <div className="CardBottom">
          <div className="left">
          Email: { email }
          </div>
          <div className="right">
          </div>
        </div>
      </div>
    )
  }
  
  export default Card