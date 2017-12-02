import * as React from 'react'
import Link from 'gatsby-link'
import { HeroImage } from '../components/hero-image';
const IndexPage: React.StatelessComponent = () => (
  <div>
    <HeroImage />
  </div>
)
IndexPage.displayName = 'index';

export default IndexPage
