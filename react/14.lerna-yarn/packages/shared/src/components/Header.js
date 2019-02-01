import React from 'react';

export const Header = ({ children }) => {
  const style = {
    backgroundColor: 'darkcyan',
    color: 'white'
  };

  return <header style={style}>{children}</header>;
};

export default Header;
