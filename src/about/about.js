import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Team from './team'
class About extends Component{


    render(){
        return(
            <div>
                <h2>
                    About the Game
                </h2>
                <p>
                    The [Children of the Future] educational game is a simple drag and drop game
                    that aims to teach children the basics of software development
                    by providing them with simple code snippets and allows them to
                    complete the code, This allows them to learn real code and logic
                    as opposed to trying to hide real programming languages.
                    <br/><br/>
                   <label> <a href="www.bensound.com">Royalty Free Music from Bensound</a></label>
                </p>
                <h2>
                    Who Are We
                </h2>
                <p>
                    We are TEAM B!
                </p>
                <h2>
                    Meet the Team
                </h2>
                <Team/>
            </div>

        )
    }


}

export default About;
