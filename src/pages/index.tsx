import * as React from 'react'
import styled from 'styled-components';

import Link from 'gatsby-link'
import { HeroImage } from '../components/hero-image';
import { StyledComponent } from '../utils/types';
import { Badge } from '../components/badge';
import { baseStyles } from '../utils/base-styles';

import FaGlobe = require('react-icons/lib/fa/globe');
import FaBook = require('react-icons/lib/fa/book');
import MdCardGiftcard = require('react-icons/lib/md/card-giftcard');
import { Container } from '../components/container';
import Gallery from 'react-photo-gallery';

const PHOTOS = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3, margin: 0 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1, margin: 0 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4, margin: 0 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4, margin: 0 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4, margin: 0 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3, margin: 0 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4, margin: 0 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3, margin: 0 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3, margin: 0 }
];

const IndexPage: React.StatelessComponent<StyledComponent> = ({ className }) => (
  <index className={className}>
    <HeroImage />
    <Container>
      <div className="snippet">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea aperiam repellendus ratione necessitatibus sequi, aliquam reiciendis qui. Id error eius numquam eos natus fugiat sequi illo iusto consequuntur vitae.
      </div>
    </Container>
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
    <Gallery photos={PHOTOS}/>
  </index>
)


const StyledIndex = styled(IndexPage) `
.snippet {
  color: ${baseStyles.colors.light};
  font-family: ${baseStyles.fonts.nunito};
  letter-spacing: 1.3px;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
}
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
