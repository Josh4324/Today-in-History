import React from 'react';


const PeopleList = ({people}) => {
    
    return (
        <>
            {
                people.map(({name, age, height}) => {
                   return  (
                    <div>
                        <p>{name}</p>
                        <p>{age}</p>
                        <p>{height}</p>
                     </div>
                   )
                })
            }
           
        </>
    );
}

export default PeopleList