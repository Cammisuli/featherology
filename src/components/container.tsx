import React from 'react';
import styled from 'styled-components';
import baseStyles, { media } from '../utils/base-styles';

interface ContainerProps {
    alignVertically?: boolean;
    /**
     * Sets flex-flow: column wrap;
     */
    column?: boolean;
    wrap?: boolean;
    noPadding?: boolean;
}

export const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    ${(props: ContainerProps) => {
        let padding = 'padding:';
        if (props.noPadding) {
            padding += `0`;
        } else {
            padding += `${baseStyles.spacing.defaultPadding}`;
        }
        return padding;
    }};

    ${(props: ContainerProps) => {
        let pos = '';
        if (props.alignVertically) {
            if (props.column) {
                pos = 'justify-content: center;';
            } else {
                pos = 'align-items: center;';
            }
        }
        return pos;
    }};
    ${(props: ContainerProps) =>
        props.column ? 'flex-flow: column nowrap' : ''};
    ${(props: ContainerProps) =>
        props.wrap ? 'flex-wrap: wrap; justify-content: space-between;' : ''};

    ${media.tablet`
        width: 100%;
    `} ${media.phone`
        width: 100%;
    `};
`;
