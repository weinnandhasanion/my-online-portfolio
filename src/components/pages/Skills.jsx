import { SkillContainer } from 'components/shared';
import { Heading, Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { skills } from 'util/skills';

const SkillGrid = ({ skills }) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="4">
      {skills.map(({ id, ...rest }) => (
        <GridItem>
          <SkillContainer key={id} {...rest} />
        </GridItem>
      ))}
    </Grid>
  );
};

const Skills = () => {
  const { SKILLS_COMF, SKILLS_WORKED } = skills;

  return (
    <Container sx={{ py: '2rem' }}>
      <Heading textAlign="center" mb="1rem">
        MY SKILLS
      </Heading>
      <Heading as="h6" fontWeight="600">
        Tech I'm comfortable with
      </Heading>
      <SkillGrid skills={SKILLS_COMF} />
      <Heading as="h6" fontWeight="600">
        Tech I've worked with
      </Heading>
      <SkillGrid skills={SKILLS_WORKED} />
    </Container>
  );
};

export default Skills;
