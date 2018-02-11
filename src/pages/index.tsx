import React from 'react';
import FaBook = require('react-icons/lib/fa/book');
import FaGlobe = require('react-icons/lib/fa/globe');
import MdCardGiftcard = require('react-icons/lib/md/card-giftcard');
import styled from 'styled-components';

import { Badge } from '../components/badge';
import { Container } from '../components/container';
import { Gallery } from '../components/gallery';
import { HeroImage } from '../components/hero-image';
import { baseStyles } from '../utils/base-styles';
import { StyledComponent } from '../utils/types';

const IndexPage: React.StatelessComponent<StyledComponent & { data: any }> = ({
    className,
    data
}) => (
    <index className={className}>
        <HeroImage />
        <Container>
            <div className="snippet">
                Welcome to Featherology!
                <br />
                <br />
                Our specialty is feathers, and we carry a variety of Feather
                centerpieces for purchase and for rent for all of your event
                needs! Everything is fully customizable so if you have something
                in mind, shoot us a message!
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
        <Gallery images={data.homeImages.images} />
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

export const pageQuery = graphql`
    query HomeImageQuery {
        homeImages: allImageSharp(filter: { id: { regex: "/feathers/" } }) {
            images: edges {
                node {
                    ... on ImageSharp {
                        resolutions(width: 375) {
                            ...GatsbyImageSharpResolutions_withWebp
                        }
                    }
                }
            }
        }
    }
`;
