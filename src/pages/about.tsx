import React from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';

import { CallCard } from '../components/call-card';
import { Container } from '../components/container';
import { HeroBanner } from '../components/hero-banner';
import { media } from '../utils/base-styles';
import { StyledComponent } from '../utils/types';

const ABOUT_PHOTOS = [
    {
        src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
        width: 3,
        height: 3,
        margin: 0
    },
    {
        src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
        width: 1,
        height: 1,
        margin: 0
    },
    {
        src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
        width: 1,
        height: 1,
        margin: 0
    },
    {
        src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
        width: 3,
        height: 4,
        margin: 0
    }
];

const AboutPage: React.StatelessComponent<StyledComponent> = ({
    className
}) => (
    <about className={className}>
        <HeroBanner snippet="Find out a little more about me!">
            <h1>About Me</h1>
        </HeroBanner>
        <Container>
            <section>
                <div className="left">
                    <CallCard />
                </div>
                <div className="right">
                    <Gallery photos={ABOUT_PHOTOS} />
                </div>
            </section>
        </Container>
    </about>
);

const StyledAboutPage = styled(AboutPage)`
    section {
        display: flex;
        ${media.phone`flex-flow: column`};

        .left {
            flex: 1;
            padding-right: 10px;
            ${media.phone`padding-right: 0;`};
        }
        .right {
            flex: 1;
        }
    }
`;

export default StyledAboutPage;
