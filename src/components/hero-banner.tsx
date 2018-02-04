import React from 'react';
import styled from 'styled-components';
import { StyledComponent } from '../utils/types';
import { baseStyles } from '../utils/base-styles';
import { Container } from './container';

interface HeroBannerProps {
    snippet: string;
}

const heroBanner: React.StatelessComponent<StyledComponent & HeroBannerProps> = ({ className, children, snippet }) => (
    <banner className={className}>
        <Container alignVertically column>
            {children}
            <p>{snippet}</p>
        </Container>
    </banner>
)

export const HeroBanner = styled(heroBanner)`
background-color: ${baseStyles.colors.offWhite};
display: flex;
height: 150px;
align-items: center;
p {
    font-size: 15px;
    font-family: ${baseStyles.fonts.fancy};
    font-style: italic;
    color: ${baseStyles.colors.light};
}
`