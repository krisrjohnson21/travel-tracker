import React from 'react';
import DestinationList from './DestinationList'

const App = (props) => {
  return (
    <div id="wishlist-div">
      <div className="row">
        <div className="small-12 small-centered columns text-center">
          <h3>Wanderlust Wishlist</h3>
            <DestinationList
              data={props.data}
            />
        </div>
      </div>
    </div>
  )
}

export default App;
