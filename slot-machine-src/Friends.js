import React from "react";
import { ReactDOM } from "react";

class Friends extends React.Component {
    
    render() {
        const { name, hobbies } = this.props;  
        const lis = hobbies.map(h => <li>{h}</li>);      
        return(
            <div>
                <h3>{ name }</h3>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
};

export default Friends;