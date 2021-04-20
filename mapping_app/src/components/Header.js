// import React from 'react' --> old don't need it anymore
import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title}) => {
  const onClick = (e) => {
    console.log(e);
  }


  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
      {/* <Button color='blue' text='Hello 2' />
      <Button color='red' text='Goodbye' /> */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Map App Default Object',
}

// makes code more robust and catches errors before they happen
Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {
//   color: 'black', 
//   backgroundColor: 'green',
// }

export default Header
