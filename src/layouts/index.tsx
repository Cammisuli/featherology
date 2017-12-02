import * as React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Container } from '../components/container';
import { StyledComponent } from '../utils/types';

import baseStyles from '../utils/base-styles';

import './index.css';
import { Footer } from '../components/footer/footer';
import { Logo } from '../components/logo';

const Links: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <div className={className}>
    <span><Link to="/">Home</Link></span>
    <span><Link to="/rentals">Rentals</Link></span>
    <span><Link to="/about">About</Link></span>
    <span><a href="">Shop</a></span>
  </div>
)

const StyledLinks = styled(Links) `
  font-family: 'nunito';
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  span {
    padding: 0 ${baseStyles.spacing.defaultPadding};
    border-right: 1px solid ${baseStyles.colors.black};
    &:last-child {
      border-right: none;
    }
    a {
      text-decoration: none;
      letter-spacing: 1.5px;
      color: ${baseStyles.colors.black};
      &:hover{
        color: ${baseStyles.colors.accent};
      }
      &:active {
        background-color: ${baseStyles.colors.accent};
        color: white;
      }
    }
  }
`

const Header: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <header className={className}>
    <Container alignVertically className={"container"}>
      <Logo />
      <StyledLinks />
    </Container>
  </header>
)

const StyledHeader = styled(Header) `
  flex: 0 0 80px;
  .container {
    justify-content: space-between;
  }
`

const TemplateWrapper = ({ children, className }: any) => (
  <div className={className}>
    <Helmet
      title="Featherology"
      meta={[
        { name: 'description', content: 'Featherology' },
        { name: 'keywords', content: 'feathers, decoration' },
      ]}
    />
    <StyledHeader />

    <div className="content">
      {children()}
    </div>
    <Footer />
  </div>
)

const StyledTemplate = styled(TemplateWrapper) `
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  position: relative;
  
  .content {
    flex: 1 1 auto;
  }
`

export default StyledTemplate;
