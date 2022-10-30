import { SkillContainer } from 'components/shared';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { skills } from 'util/skills';

const SkillGrid = ({ skills }) => {
  return skills.map(({ id, ...rest }) => {
    return <SkillContainer key={id} {...rest} />;
  });
};

const Skills = () => {
  const { SKILLS_COMF } = skills;

  return (
    <section id="about">
      <Heading as="h4" fontWeight="600">
        Tech I'm comfortable with
      </Heading>
      <SkillGrid skills={SKILLS_COMF} />
      <Heading as="h4" fontWeight="600">
        Tech I'm familiar with
      </Heading>

      <div id="info">
        <div className="card">
          <p style={{ fontWeight: 'lighter' }}>
            <span style={{ fontWeight: 700 }} id="entry-1">
              Hi, I am <span className="t-third">Weinnand Hasanion</span>
            </span>
            .
            <br />
            <br />
            <span id="entry-2">
              I am 22 years old and I am from the Philippines. I am very eager
              and willing to learn new things as modern technology continues to
              progress.
            </span>
            <br />
            <br />
            <span id="entry-3">
              I am experienced in developing static websites using only{' '}
              <span className="t-third">HTML</span>,{' '}
              <span className="t-third">CSS</span>, and some{' '}
              <span className="t-third">Javascript</span>
              using libraries such as <i>jQuery</i> or <i>React</i>.
            </span>
            <br />
            <br />
            <span id="entry-3">
              I also have experience in developing web-based applications using
              <span className="t-third">PHP</span> and
              <span className="t-third">Laravel</span>, and I also have
              experience using <span className="t-third">MySQL</span> for
              database design and management.
            </span>
            <br />
            <br />
            <span>
              I love coding and I aspire to be the best software engineer one
              could become. Other skills include:
              <br />
              <span className="badge">Bootstrap</span>
              <span className="badge">materialize</span>
              <span className="badge">tailwindcss</span>
              <span className="badge">material-ui</span>
              <span className="badge">scss</span>
              <span className="badge">react</span>
              <span className="badge">typescript</span>
              <span className="badge">laravel</span>
              <span className="badge">docker</span>
              <span className="badge">jquery</span>
              <span className="badge">c</span>
              <span className="badge">dart</span>
              <span className="badge">flutter</span>
              <span className="badge">git</span>
              <span className="badge">git-flow</span>
              <span className="badge">ui/ux design</span>
              <span className="badge">wireframing</span>
            </span>
          </p>
        </div>
      </div>
      <div id="skills">
        <div className="card">
          <h2 id="skilltext">Skills</h2>
          <canvas id="skillMap"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;
