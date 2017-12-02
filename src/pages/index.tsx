import * as React from 'react'
import styled from 'styled-components';

import Link from 'gatsby-link'
import { HeroImage } from '../components/hero-image';
import { StyledComponent } from '../utils/types';
const IndexPage: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <index className={className}>
    <HeroImage />
    <div className="placeholder">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </index>
)


const StyledIndex = styled(IndexPage) `
div.placeholder {
  display: flex;
    justify-content: space-evenly;
  div {
    display: inline-block;
    height: 500px;
    width: 300px;
    background-color: #d5084fc7;
    outline: 1px solid red;
  }
}
`

export default StyledIndex
