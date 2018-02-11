import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import { CallCard } from '../components/call-card';
import { Container } from '../components/container';
import { HeroBanner } from '../components/hero-banner';
import { media, baseStyles } from '../utils/base-styles';
import { StyledComponent } from '../utils/types';

const AboutPage: React.StatelessComponent<StyledComponent & { data: any }> = ({
    className,
    data
}) => {
    return (
        <about className={className}>
            <HeroBanner snippet="Find out a little more about me!">
                <h1>About Me</h1>
            </HeroBanner>
            <Container noPadding>
                <section>
                    <div className="left">
                        <CallCard />
                    </div>
                    <div className="right">
                        <Img sizes={data.about.sizes} />
                    </div>
                </section>
            </Container>
        </about>
    );
};

const StyledAboutPage = styled(AboutPage)`
    .gatsby-image-outer-wrapper:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        background: linear-gradient(
            to right,
            white 6%,
            transparent,
            transparent
        );
        bottom: 0;
        z-index: 2;
    }
    ${media.phone`
        .gatsby-image-outer-wrapper:before {
            background: linear-gradient(
                to bottom,
                white 3%,
                transparent,
                transparent
            );
        }
        `};
    section {
        display: flex;
        ${media.phone`flex-flow: column`};

        .left {
            flex: 1;
            padding: ${baseStyles.spacing.defaultPadding};
        }
        .right {
            flex: 1;
        }
    }
`;

export default StyledAboutPage;

export const pageQuery = graphql`
    query AboutImageQuery {
        about: imageSharp(id: { regex: "/sonia/" }) {
            sizes(maxWidth: 500) {
                ...GatsbyImageSharpSizes_withWebp
            }
        }
    }
`;
