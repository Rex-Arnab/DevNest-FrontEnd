import {useState} from 'react'
import {setWhether} from '../Action/index'
import {useDispatch} from 'react-redux'


function Header() {
    const [takeLocation, setTakeLocation] = useState("")
    const dispatch = useDispatch()
    return (
        <>
           <header>
            <input
              type="text"
              placeholder="Enter Location"
              value={takeLocation}
              onChange={(e) => setTakeLocation(e.target.value)}
            />
            <button onClick={()=>{dispatch(setWhether(takeLocation));setTakeLocation('')}}>
              <img src="https://img.icons8.com/material/24/000000/search-more--v2.png" />
            </button>
          </header> 
        </>
    )
}
export default Header;