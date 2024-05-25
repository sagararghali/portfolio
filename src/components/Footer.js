import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  padding: 1rem;
  text-align: center;
  background: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => <Foot>© 2024 My Portfolio</Foot>;

export default Footer;
