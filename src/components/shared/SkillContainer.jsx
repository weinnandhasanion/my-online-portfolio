import React from 'react';
import { Box, Icon, chakra } from '@chakra-ui/react';

const SkillContainer = ({ icon, name }) => {
  return (
    <Box
      sx={{
        width: 125,
        height: 125,
        borderRadius: 15,
        background: '#ffffff',
        boxShadow: '5px 5px 8px #ebebeb, -5px -5px 8px #ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Icon sx={{ fontSize: '3.5rem' }} as={icon} />
      <chakra.p fontSize="xs">{name}</chakra.p>
    </Box>
  );
};

export default SkillContainer;
