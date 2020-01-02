import React, { useState } from 'react'
import Destination from './Destination'

const DestinationList = props => {

  const favoriteSpot = props.data.favoritePlaceId

  const destinationObjectArray = props.data.places.map((destinationObject) => {
  const [selectedId, setSelectedId] = useState(null)
    let selected = false;
    const setSelectedIdClosure = event => {
      event.preventDefault()
      if (destinationObject.id === selectedId) {
        setSelectedId(null)
      } else {
        setSelectedId(destinationObject.id)
      }
    }

    if (selectedId === destinationObject.id) {
      selected = true
    }

    let favorite = false;
    if (destinationObject.id === favoriteSpot) {
      favorite = true
    }

    return(
      <Destination
        key={destinationObject.id}
        name={destinationObject.name}
        selected={selected}
        favorite={favorite}
        setSelectedIdClosure={setSelectedIdClosure}
      />
    )
  })

  return(
    <div>{destinationObjectArray}</div>
  )
}

export default DestinationList
