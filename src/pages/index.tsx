import * as React from 'react'
import styled from 'styled-components';

import Link from 'gatsby-link'
import { HeroImage } from '../components/hero-image';
import { StyledComponent } from '../utils/types';
import { Badge } from '../components/badge';

import FaGlobe = require('react-icons/lib/fa/globe');
import FaBook = require('react-icons/lib/fa/book');
import MdCardGiftcard = require('react-icons/lib/md/card-giftcard');

const IndexPage: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <index className={className}>
    <HeroImage />
    <div className="badges">
      <Badge title="Discover" icon={<FaGlobe />}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Badge>
      <Badge title="Contact" icon={<FaBook />}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Badge>
      <Badge title="Deliver" icon={<MdCardGiftcard />}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Badge>
    </div>
  </index>
)


const StyledIndex = styled(IndexPage) `
.badges {
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  badge {
    width: 300px;
  }
}
`

export default StyledIndex
