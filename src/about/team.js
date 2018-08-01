import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Carousel from 'nuka-carousel';
import Nawid from "./images/Nawid.png";
import Liam from "./images/Liam.jpg";
import Daryl from "./images/Daryl.jpg";
import Michael from "./images/Michael.jpeg";
import Jarad from "./images/Jarad.jpg";
import Robert from "./images/Robert.png";
import Benny from "./images/benny.jpg";
import Adam from "./images/Adam.png";
import Bee from "./images/BEE.jpg";

import Christopher from "./images/CHRIS.jpg";

class Team extends Component {


    render() {


        return (
            <div className="staffList">
                <Carousel>
                    <p className="center">Team B<br/><img width="350" height="350" src={Bee} /></p>
                    <p className="center">Daryl Conway<br/><img width="350" height="350" src={Daryl} /></p>
                    <p className="center">Nawid Mujadidi<br/><img width="350" height="350" src={Nawid}/></p>
                    <p className="center">Michael Massey<br/><img width="350" height="350" src={Michael}/></p>
                    <p className="center">Jarad Huggard<br/><img width="350" height="350" src={Jarad}/></p>
                    <p className="center">Robert Crutchley<br/><img width="350" height="350" src={Robert}/></p>
                    <p className="center">Benny Wong<br/><img width="350" height="350" src={Benny}/></p>
                    <p className="center">Adam Afzal<br/><img width="350" height="350" src={Adam}/></p>
                    <p className="center">Liam Donoghue - Testing<br/><img width="350" height="350" src={Liam}/></p>
                    <p className="center">Christopher Darrall<br/><img width="350" height="350" src={Christopher}/></p>
                </Carousel>
            </div>

        )
    }
}

export default Team