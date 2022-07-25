import React, { Compnent } from 'react';

const AboutBox = () => {
    return (
      <div className='AboutBox'>
      <div className="col-7 offset-1 about-box">
    
    <ul className="list-group">
        <p className="list-group-item heading"><b>About</b></p>
        <p className="list-group-item"><b>Age: 12</b></p>
        <p className="list-group-item"><b>Occupation: Pet</b></p>
        <p className="list-group-item"><b>Education: Wild Cat Academy</b></p>
        <p className="list-group-item"><b>Favorite Bands: Cat Stevens, Def Leopard, Atomic Kitten, Lionel Ritchie</b></p>
        <p className="list-group-item"><b>Contact Info: Meow at me at the fence behind Burger King on 242nd and Broadway</b></p>
        <p className="list-group-item"><b>Relationship Status: Single</b></p>
        <p className="list-group-item"><b>Places Lived: Paris, France and Bronx, New York</b></p>
    </ul>
    </div>
    </div>
 
    );
}

export default AboutBox;
