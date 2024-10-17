import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/home.tsx';
import RegisterPage from './components/cadastro.tsx';
import LoginPage from './components/login.tsx';

const NavBar = styled.nav`
  background-color: #8a2be2;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </NavBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
