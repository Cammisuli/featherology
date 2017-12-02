import * as React from 'react';
import styled from 'styled-components';

import * as img from '../images/home-image.jpg';
import { StyledComponent } from '../utils/types';
import baseStyles from '../utils/base-styles';


const HeroComp = ({ className }: StyledComponent) => (
    <div className={className}>
        <div className="wrap">
            <span className="text">Home Decor</span>
            <h1>Featherology</h1>
            <span className="divider"></span>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, corrupti optio tenetur repudiandae consequatur repellendus esse sed mollitia commodi nemo dignissimos error odit?
                Neque asperiores, numquam error aliquam dignissimos ut?
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
    width: 60%;
    height: 100%;
}
h1 {
    font-style: italic;
    text-transform: none;
    font-size: 70px;
    letter-spacing: 5px;
    font-weight: 100;
    line-height: 100px;
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
