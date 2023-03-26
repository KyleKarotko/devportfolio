import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #D6A2E8;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #192A56;
`;

const Subheading = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 60px;
  color: #273c75;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const ProjectLI = styled.li`
  width: 100%;
  margin-bottom: 40px;
`;

const ProjectLink = styled.a`
  color: #192A56;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 40px;
`;

const ContactLI = styled.li`
  margin: 0 20px;
`;

const ContactLink = styled.a`
  color: #192A56;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  return (
    <>
      <Card>
        <Heading>Hi, I'm Kyle.</Heading>
        <Subheading>I'm a web developer, and this is my portfolio. I specialize in full stack development using the MERN stack, and I have just completed the bootcamp at The Ohio State University. I'm passionate about learning, and I love using my skills to innovate and problem solve todays technology challenges.</Subheading>
      </Card>

      <Card>
        <Heading>Featured Work</Heading>
        <ProjectList>
          <ProjectLI>
            <ProjectLink href="[Link to Project]">[Project Name]</ProjectLink> - [Description of Project]
          </ProjectLI>
          <ProjectLI>
            <ProjectLink href="[Link to Project]">[Project Name]</ProjectLink> - [Description of Project]
          </ProjectLI>
          <ProjectLI>
            <ProjectLink href="[Link to Project]">[Project Name]</ProjectLink> - [Description of Project]
          </ProjectLI>
        </ProjectList>
      </Card>

      <Card>
        <Heading>Get in Touch</Heading>
        <ContactList>
          <ContactLI><ContactLink href="mailto:[Your Email Address]">Email</ContactLink></ContactLI>
          <ContactLI><ContactLink href="[Link to LinkedIn Profile]">LinkedIn</ContactLink></ContactLI>
        </ContactList>
      </Card>
    </>
  );
}

export default Home;
