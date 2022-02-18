import React from 'react';
import PropTypes from 'prop-types';


const Header = ({text,bgColor,textColor}) => {
  //destructuring argues in the arguments here
  const headerStyles = {backgroundColor:bgColor,color:textColor}
  return <header style={headerStyles}>
    <div className="container">
      <h2>{text}</h2>
    </div>
  </header>;
};
Header.defaultProps = {
  text: 'Default Prop',
  bgColor:'rgba(0,0,0,0.4)',
  textColor:'#ff6a95'
}
Header.propTypes = {
  text: PropTypes.string,
  bgColor:PropTypes.string,
  textColor:PropTypes.string
}
export default Header;
