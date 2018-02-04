import React from 'react';
import FaBook = require('react-icons/lib/fa/book');
import FaGlobe = require('react-icons/lib/fa/globe');
import MdCardGiftcard = require('react-icons/lib/md/card-giftcard');
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';

import { Badge } from '../components/badge';
import { Container } from '../components/container';
import { HeroImage } from '../components/hero-image';
import { baseStyles } from '../utils/base-styles';
import { StyledComponent } from '../utils/types';

const IndexPage: React.StatelessComponent<StyledComponent> = ({
    className
}) => (
    <index className={className}>
        <HeroImage />
        <Container>
            <div className="snippet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                ea aperiam repellendus ratione necessitatibus sequi, aliquam
                reiciendis qui. Id error eius numquam eos natus fugiat sequi
                illo iusto consequuntur vitae.
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
        {/* <Gallery photos={PHOTOS} /> */}
    </index>
);

const StyledIndex = styled(IndexPage)`
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
`;

export default StyledIndex;
