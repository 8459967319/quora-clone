// import  Add from "@mui/icons-material/Add";

import "../styles/SidebarOptions.css";
import  img1 from './images/history.jpg';
import  img2 from "./images/bussiness.jpg";
import img3 from "./images/psychology.jpg";
import img4 from "./images/cooking.jpg";
import img5 from "./images/music.jpg"
import img6 from "./images/science.jpg"
import img7 from "./images/health.jpg"
import img8 from "./images/movie.jpg";
import img9 from "./images/technology.jpg";
import img10 from "./images/education.jpg";
import { Add } from "@material-ui/icons";
function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src= {img1}
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src={img2}
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src={img3}
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src={img4}
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src={img5}
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src={img6}
          alt=""
        />
        
        <p>Science</p>
      </div>

      <div  className="sidebarOption">
        <img
          src={img7}
          alt=""
        />
        <p>Health</p>
      </div>

      <div   style={
        {
          paddingRight:"100px"
        }
      }
       className="sidebarOption">
        <img
          src={img8}
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src={img9}
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src={img10}
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add/>
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;



