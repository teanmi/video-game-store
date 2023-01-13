import React from 'react';
import "./homeValue.css"

const HomeValue = ({title, img}) => {
  return (
    <div className='value'>
      <h3 className="value__title">{title}</h3>
      <p className="value__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus odit repellendus consequatur asperiores praesentium architecto distinctio quae</p>
    </div>
  );
}

export default HomeValue;
