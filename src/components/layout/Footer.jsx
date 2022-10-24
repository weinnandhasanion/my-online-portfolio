import React from 'react';
import { chakra } from '@chakra-ui/react';

const Footer = () => {
  return (
    <chakra.footer
      bgColor="primary"
      sx={{
        display: 'grid',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        color: 'white',
        padding: '3rem',
      }}
    >
      <small>Weinnand Hasanion, 2022 ©</small>
    </chakra.footer>
  );
};

export default Footer;
