import { Link } from "react-router-dom";

function NavPages({routePage}) {
    
    return(
        <Link to={`../../${routePage}`}>{routePage}</Link>
    )
}

export default NavPages;