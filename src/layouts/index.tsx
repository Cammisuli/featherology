import * as React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/lib/md';

import { Container } from '../components/container';
import { StyledComponent } from '../utils/types';

import baseStyles, { media } from '../utils/base-styles';

import './index.css';
import { Footer } from '../components/footer/footer';
import { Logo } from '../components/logo';

class Links extends React.Component<StyledComponent, { menuOpened: boolean }> {

  constructor(props: StyledComponent) {
    super(props);
    this.state = {
      menuOpened: false
    };
  }

  render() {
    return <div className={this.props.className}>
    <div className="mobile" onClick={() => this.setState({menuOpened: !this.state.menuOpened})}>
        <MdMenu />
      </div>
      <div className={`links ${this.state.menuOpened ? 'show' : ''}`}>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/rentals">Rentals</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><a href="">Shop</a></span>
      </div>
    </div>
  }
}


const StyledLinks = styled(Links) `
  font-family: 'nunito';
  display: inline-block;
  margin: 0;
  text-transform: uppercase;
  .mobile {
    ${media.desktop`
      display: none;
    `}
    ${media.tablet`
    display: none;
    `}
  }
  .links {
    ${media.phone`
    display: none;
    &.show {
      display: initial;
    }
    `}
    span {
      padding: 0 ${baseStyles.spacing.defaultPadding};
      border-right: 1px solid ${baseStyles.colors.black};
      &:last-child {
        border-right: none;
      }
      a {
        letter-spacing: 1.5px;
        color: ${baseStyles.colors.black};
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
  font-size: 14px;
  
  .content {
    flex: 1 1 auto;
  }
`

export default StyledTemplate;
