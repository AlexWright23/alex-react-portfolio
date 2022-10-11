import React from 'react';
import horiseon from '../../images/horiseon.png'
import gamerfoods from '../../images/gamerfoods.png'
import jate2 from '../../images/JATE2.png'
import momentum from '../../images/unknown.png'
import marvel from '../../images/marvelquiz2.png'



export default function Portfolio() {
  return (
    <div>
        <h3 className='portText'>My Work</h3>
      <div className='cardCont'>

        <div className="card portCards"><a href="https://alexwright23.github.io/horiseson-refoctor/">
          <img src={horiseon} className="card-img-top" alt="a refactored website for a business"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Horiseon Refactor</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://momentum-initial.herokuapp.com/">
          <img src={momentum} className="card-img-top" alt="a screenshot of one of my projects"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Momentum</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://alexwright23.github.io/text-editor/">
          <img src={jate2} className="card-img-top" alt="a text editor I made"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Text Editor</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://chaoskills08.github.io/gamerfoods">
          <img src={gamerfoods} className="card-img-top" alt="a screenshot of a project I made"></img>
          </a>
          <div className="card-body">
            <p className="cardText">GamerFoods</p>
          </div>
        </div>
        <div className="card portCards"><a href="https://alexwright23.github.io/marvel-quiz/">
          <img src={marvel} className="card-img-top" alt="a marvel quiz I made"></img>
          </a>
          <div className="card-body">
            <p className="cardText">Marvel Quiz</p>
          </div>
        </div>
        </div>
      </div>
  );
}

























