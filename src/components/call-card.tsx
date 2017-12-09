import * as React from 'react';
import styled from 'styled-components';
import { baseStyles } from '../utils/base-styles';
import { StyledComponent } from '../utils/types';

const Snippet = styled.div`
    color: ${baseStyles.colors.light};
`;

const SmallTitle = styled.h5`
    letter-spacing: 2.8px;
    margin-bottom: 10px;
    font-family: ${baseStyles.fonts.nunito};
    text-transform: uppercase;
`;
const Description = styled.div`
    font-family: ${baseStyles.fonts.fancy};
    padding-bottom: ${baseStyles.spacing.defaultPadding};
`;

const callCard: React.StatelessComponent<StyledComponent> = ({ className }) => (
    <div className={className}>
        <h2>Sonia Khosla</h2>
        <Snippet>
            Hi Everyone!
            <br />So I always get asked: how did you get into this business? And
            the answer is a few years ago when I was doing corporate events a
            client had asked for feather centerpieces. I had looked near and far
            and found that they were SUPER expensive to even rent! I wanted them
            to be a bit more affordable for different budgets! So here I am four
            years later making it my mission to provide quality & budget
            friendly feathers and centerpieces. You can buy them for the same
            amount you would rent them from most places, so I think i've
            succeeded! I hope you find what you are looking for in my shop, and
            if you don't please let me know I am happy to put together something
            custom for you! I absolutely love what I do. There is something
            magical about feathers as no two are really ever the same. 💖
            <br /> <br /> Warmly, Sonia
        </Snippet>
        <div className="info">
            <SmallTitle>Contact:</SmallTitle>
            <Description>6472101142</Description>
            <SmallTitle>Phone:</SmallTitle>
            <Description>109283092813</Description>
            <SmallTitle>Phone:</SmallTitle>
            <Description>109283092813</Description>
        </div>
    </div>
);

export const CallCard = styled(callCard)`
    h2 {
        font-family: ${baseStyles.fonts.nunito};
        text-transform: uppercase;
        font-style: normal;
    }
    .info {
        margin-top: ${baseStyles.spacing.defaultPadding};
    }
`;
