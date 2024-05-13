
// import './Card.css';
// // is trha cards tag shell bn jayega aur sara code/design is k under aajayega 
// function Card(props) {
//   const classes = 'card ' + props.className;  //so anything we are getting from other components in props with keyword className is getting concatinated here
  
//   return <div className={classes}>{props.children}</div>;   // has all tags between opening and closing of card tag in expenseItems component
// }

// export default Card;   


import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;