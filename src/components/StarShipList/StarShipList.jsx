import { useEffect, useState } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from "react-router-dom"

const StarShipList = (props) => {
  const [ships, setShips] = useState([])
  useEffect(() => {
    getAllStarships()
    .then(shipData => setShips (shipData.results))
  }, [])
  return ( 
    <>
      <div>
        <h3>Starship List</h3>
          {ships.length ?
          <div className="icon-container">
            {ships.map((ship) => (
              <Link 
                to='/ships' 
                state={{ship}} 
                key={ship.name} 
              >
              <div id="classDiv">
                {ship.name}
              </div>
            </Link>  
          ))}
          </div>
          :
          <p>Ships are loading....</p>
          }  
      </div>
    </>
   );
}
 
export default StarShipList;