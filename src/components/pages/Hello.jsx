import { chakra, Box, Button, Heading } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import portrait from 'assets/img/portrait.png';
import { FRONTEND_DEV, NAME_HEADING, SOFTWARE_ENGR } from 'util/constants';

const landingStyle = {
  h: 'auto',
  w: '100%',
};

const LandingSection = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ m: '12rem 10%' }}>
        <Heading fontSize="7xl" sx={{ wordBreak: 'none', fontWeight: 900 }}>
          {NAME_HEADING.toUpperCase()}
        </Heading>
        <chakra.h2 fontSize="5xl" fontWeight="100" sx={{ letterSpacing: 2 }}>
          <Typewriter
            options={{
              strings: [SOFTWARE_ENGR, FRONTEND_DEV],
              loop: true,
              autoStart: true,
            }}
          />
        </chakra.h2>
      </Box>
    </Box>
  );
};

const AboutSection = () => {
  return (
    <Box as="section" sx={{ backgroundColor: 'quinary' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 2, width: '100%' }}>
          <chakra.img
            src={portrait}
            alt="tsuki-portrait"
            sx={{ w: '45rem', margin: '0 !important', padding: 0 }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 2,
            textAlign: 'right',
            padding: 10,
            marginRight: '5rem',
          }}
        >
          <chakra.p color="white" fontSize="2xl" sx={{}}>
            I am a 23-year-old software engineer from Cebu, Philippines. After
            being able to work as a developer for over 2 years, I have learned
            not only how to write code, but also to analyze, brainstorm, and
            bring forth functional and scalable solutions to real-world
            problems.
          </chakra.p>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Button
              variant="outline"
              size="lg"
              sx={{
                display: 'inline',
                mt: '3rem',
                color: 'white',
                width: 250,
              }}
            >
              Download my resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              sx={{
                display: 'inline',
                mt: '3rem',
                color: 'white',
                width: 250,
              }}
            >
              View my skills
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Hello = () => {
  return (
    <chakra.div sx={landingStyle}>
      <LandingSection />
      <AboutSection />
    </chakra.div>
  );
};

export default Hello;
