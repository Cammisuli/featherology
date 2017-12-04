import * as React from 'react'
import styled from 'styled-components';

import Link from 'gatsby-link'
import { HeroImage } from '../components/hero-image';
import { StyledComponent } from '../utils/types';


const IndexPage: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <index className={className}>
    <HeroImage />
    
  </index>
)


const StyledIndex = styled(IndexPage) `

`

export default StyledIndex
