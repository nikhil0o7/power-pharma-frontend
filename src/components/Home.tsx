
import Ranger from "./Ranger";
import { Link } from "react-router-dom";
const Home = () =>{

    return(
        <>
           <div>
        <h1>GlobalNOC Frontend App</h1>
        <nav>
          <ul>
           
            <li>
              <Link to="/app/counter">Counter</Link>
            </li>
            <li>
              <Link to="/app/pokemon">Pokemon</Link>
            </li>
          </ul>
        </nav>
      <Ranger />
        </div>
        </>
    );
}

export default Home;