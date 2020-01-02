import React from 'react'

const Destination = (props) => {

  return(
    <div>
      <li className={props.destinationClass} onClick={props.setSelectedIdClosure}>
        {props.name}
      </li>
    </div>
  )
}

export default Destination
