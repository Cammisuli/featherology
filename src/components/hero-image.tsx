import * as React from 'react';
import styled from 'styled-components';

import * as img from '../images/home-image.jpg';
import { StyledComponent } from '../utils/types';
import baseStyles, {media} from '../utils/base-styles';


const HeroComp = ({ className }: StyledComponent) => (
    <div className={className}>
        <div className="wrap">
            <span className="text">Home Decor</span>
            <h1>Featherology</h1>
            <span className="divider"></span>
            <p>
            Making the world a prettier place one feather at a time 
            </p>
        </div>
    </div>
)

export const HeroImage = styled(HeroComp) `
height: 400px;
background-image: url(${img});
display: flex;
flex-flow: column;
text-transform: uppercase;
.wrap {
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: ${baseStyles.spacing.defaultPadding};
    ${media.desktop`
    width: 60%;
    `}
    ${media.tablet`
    width: 60%;
    `}
}
h1 {
    font-style: italic;
    text-transform: none;
    font-size: 70px;
    letter-spacing: 5px;
    font-weight: 100;
    line-height: 100px;
    ${media.phone`
    font-size: 45px;
    `}
}
.divider {
    width: 230px;
    height: 1px;
    background-color: ${baseStyles.colors.black};
    margin-bottom: 20px;
}
.text {
    color: ${baseStyles.colors.accent};
    letter-spacing: 3px;
}
p {
    color: ${baseStyles.colors.light};
    line-height: 35px;
}
`;
