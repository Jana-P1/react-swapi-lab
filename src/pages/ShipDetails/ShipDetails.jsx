import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'

const ShipDetails = (props) => {

  const [shipDetails, setShipDetails] = useState([])
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.ship.url)
    .then(shipDetails => setShipDetails(shipDetails))
  }, [])


  return ( 
    <>
      <div>
        <h3 className='header'>Ship Deets</h3>
        {shipDetails.name ?
        <>
          <div id='ship'> 
            <h2>{shipDetails.name}</h2>
            <div>Model: {shipDetails.model}</div>
            <div id='return'>
              <Link 
                to='/' 
              >Back to Ships
              </Link>
            </div>
          </div>
        </> 
        : 
        <>
          <h3>Loading Ship Details....</h3>
        </>
      }
      </div>
    </>
  );
}
 
export default ShipDetails;