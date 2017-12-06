import * as React from 'react';
import styled from 'styled-components';
import baseStyles, { media } from '../utils/base-styles';

interface ContainerProps {
    alignVertically?: boolean;

    /**
     * Sets flex-flow: column wrap;
     */
    column?: boolean;
}

export const Container = styled.div`    
    width: 1100px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    padding: ${baseStyles.spacing.defaultPadding};
    
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
    ${(props: ContainerProps) => props.column ? 'flex-flow: column nowrap' : ''};

    ${media.tablet`
        width: 950px;
    `}

    ${media.phone`
        width: 100%;
    `}

`