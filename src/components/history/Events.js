import React from 'react';

const Events = (props) => {
    let events = props.events
    return (
        <div className="comp"  style={{ backgroundColor: "white", borderRadius:"10px", width: "50%", marginRight:"auto", marginTop: "50px", marginLeft:"auto", height: "60vh", overflowY:"auto" }}>
              <h3 style={{ textAlign: "center" }}>Events</h3>

              {events.map((event) => {
                  return (
                      <div className="shadow" style={{ margin:"10px", paddingLeft: "20px", paddingTop: "10px"}}>
                        { 
                        
                        <div>
                            <div style={{ fontWeight: "bold" }}> Year - {event.year}</div>
                            <div style={{ padding:"10px" }}
                            >
                                {event.text}
                            </div> 

                            <div>
                                <span>Read More from link below:</span>
                                <br/>
                                {
                                    event.links.map((item) => {
                                        return (
                                            <a href={item.link}>{item.title}</a>
                                        )
                                    })
                                }
                            </div>   
                        </div>
                        
                        
                        }
                      </div>
                  )
              })}
        </div>
    );
}

export default Events;
