import React from "react";
import { ReactDOM } from "react";

class Machine extends React.Component {
    
    render() {
        const {s1,s2,s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);
        const iconSize = {fontSize: '45px'};
        return(
            <div>
                <p style={iconSize}>{s1} {s2} {s3}</p>
                <p>{winner ? "Jack Pot!" : "Try Again!"}</p>
            </div>
        );
    }
};

export default Machine;