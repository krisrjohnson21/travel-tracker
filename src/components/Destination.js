import React from 'react'

const Destination = (props) => {

  let favoriteClass = ""
  let className = ""
  if (props.selected === true) {
    className += "done"
  }
  if (props.selected && props.favorite) {
    favoriteClass += "What a beauty!"
  }

  return(
    <div>
      <li className={className} onClick={props.setSelectedIdClosure}>
        {props.name}
      </li>
      {favoriteClass}
    </div>
  )
}

export default Destination
