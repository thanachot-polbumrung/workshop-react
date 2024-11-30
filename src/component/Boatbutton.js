import PropTypes from 'prop-types'

const Boatbutton = (props) => {
    const {name,text,age=21}=props
 
  return (
    <div>
      
      <button>{text}{name}{age}</button>
    </div>
  );
};

Boatbutton.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number
  }
  

export default Boatbutton;
