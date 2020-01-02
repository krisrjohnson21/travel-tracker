import React, { useState } from 'react'
import Destination from './Destination'

const DestinationList = props => {

  const favoriteSpot = props.data.favoritePlaceId
  let favoriteClass = ""

  const destinationObjectArray = props.data.places.map((destinationObject) => {
    const [selectedId, setSelectedId] = useState(null)
    const setSelectedIdClosure = event => {
      event.preventDefault()
      if (destinationObject.id === selectedId) {
        setSelectedId(null)
      } else {
        setSelectedId(destinationObject.id)
      }
    }

    let destinationClass = "";
    if (destinationObject.id === selectedId) {
      destinationClass += "done"
    }

    if (destinationObject.id === selectedId && destinationObject.id === favoriteSpot) {
      favoriteClass += "What a beauty!"
    }

    return(
      <Destination
        key={destinationObject.id}
        name={destinationObject.name}
        destinationClass={destinationClass}
        setSelectedIdClosure={setSelectedIdClosure}
      />
    )
  })

  return(
    <div>
      {destinationObjectArray}
      {favoriteClass}
    </div>
  )
}

export default DestinationList
