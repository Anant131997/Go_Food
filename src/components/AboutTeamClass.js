import React from "react";

class AboutTeamClass extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <h1>{this.props.name}</h1>
            <h3>We have made this app using live API data</h3>
            <h4>Note. - This web app is built for study purpose only.</h4>
        </div>
        )
    }
}


export default AboutTeamClass;