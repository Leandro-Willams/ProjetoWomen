import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #e6e6fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #8a2be2;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  color: #4b0082;
  text-align: center;
  max-width: 600px;
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to Women's Sexual Health Education</Title>
      <Content>
        Empowering adult women with knowledge about sexual health and wellness. 
        Explore our resources and join our community for open, honest discussions.
      </Content>
    </Container>
  );
};

export default HomePage;
