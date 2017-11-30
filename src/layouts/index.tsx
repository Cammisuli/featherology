import * as React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Container } from '../components/container';
import { StyledComponent } from '../utils/types';

import './index.css';

const Logo = ({ className }: StyledComponent) => (
  <img className={className} src="https://placeholdit.co/i/260x40" alt="logo" />
)
const StyledLogo = styled(Logo) `
  margin: 0;
  width: 260px;
  height: 40px;
`

const Links: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <div className={className}>
    <span><Link to="/">Home</Link></span>
    <span><Link to="/rentals">Rentals</Link></span>
    <span><Link to="/about">About</Link></span>
    <span><a href="">Shop</a></span>
  </div>
)

const StyledLinks = styled(Links) `
  display: inline-block;
  margin: 0;
  text-transform: uppercase;

  span {
    padding: 0 15px;
    border-right: 1px solid black;
    &:last-child {
      border-right: none;
    }
  }
`

const Header: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <div className={className}>
    <Container alignVertically className={"container"}>
      <StyledLogo />
      <StyledLinks />
    </Container>
  </div>
)

const StyledHeader = styled(Header) `
  height: 80px;
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
  </div>
)

const StyledTemplate = styled(TemplateWrapper) `
  display: flex;
  flex-flow: column nowrap;
  
  .content {

  }
`

export default StyledTemplate;
