import React, { useEffect, useState } from 'react';
import Births from './Births';
import Deaths from './Deaths';
import Events from './Events';

export const Home = () => {
    const [births, setBirths] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [events, setEvents] = useState([]);
    const [comp, setComp] = useState("home");

    const changeComp = (comp) => {
        setComp(comp)
    }


    useEffect(() => {
       fetch('./data.json')
       .then((result) => result.json())
       .then((data) => {
           setBirths(data.data.Births);
           setDeaths(data.data.Deaths);
           setEvents(data.data.Events);
       })
       .catch((err) => console.log(err))
    }, []);

    return (
        <div className="historyImage">
                 <div className="buttonBlock">
                    <button onClick={() => {changeComp("home")}} className="button">Home</button>
                    <button onClick={() => {changeComp("event")}} className="button">Events</button>
                    <button onClick={() => {changeComp("death")}} className="button">Deaths</button>
                    <button onClick={() => {changeComp("birth")}} className="button">Births</button>
                </div>

                { comp === "home" ? (
                   <h3 style={{  textAlign:"center", marginRight:"auto", marginLeft:"auto", borderRadius:"10px", marginTop: "50px", padding: "20px", width:"50%", backgroundColor: "white" }}>Today in History</h3>
                ) : comp === "birth" ? (
                    <Births births={births} />
                ) : comp === "death" ? (
                    <Deaths deaths={deaths} />
                ) :  (
                    <Events  events={events} />
                )}
               
                
               
        </div>
    );
};

