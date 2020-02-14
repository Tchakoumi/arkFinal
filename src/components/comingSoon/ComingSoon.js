import React, { Component } from 'react'
import './ComingSoon.css'


class ComingSoon extends Component {

    componentDidMount(){
        let launchDate = new Date("mar 1,2020 00:00:00").getTime();
        let counter = setInterval(()=>{
            let now = new Date().getTime();
            let left = launchDate-now;

            let days = Math.floor(left/(1000*60*60*24));
            let hours = Math.floor((left%(1000*60*60*24))/(1000*60*60));
            let minutes =Math.floor((left%(1000*60*60))/(1000*60));
            let seconds = Math.floor((left%(1000*60))/1000);

            document.getElementById("days").innerHTML=days;
            document.getElementById("hours").innerHTML=hours;
            document.getElementById("minutes").innerHTML=minutes;
            document.getElementById("seconds").innerHTML=seconds;

        },1000);
    }

    compon

    render() {
        return (
            <div className="soonContainer">
                <div className="soonHolder">
                    <h1>Wrayon</h1>
                    <h2>We are coming soon.</h2>

                    <div className="count">
                        <div className="countd">
                            <span id='days'>00</span>
                            JOURS
                        </div>
                        <div className="countd">
                            <span id='hours'>00</span>
                            HEURES
                        </div>
                        <div className="countd">
                            <span id='minutes'>00</span>
                            MINUTES
                        </div>
                        <div className="countd">
                            <span id='seconds'>00</span>
                            SECONDES
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComingSoon;