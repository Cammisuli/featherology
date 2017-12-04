import * as React from 'react';
import styled from 'styled-components';
import baseStyles, { media } from '../utils/base-styles';

interface ContainerProps {
    alignVertically?: boolean;
}

export const Container = styled.div`    
    width: 1100px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    padding: ${baseStyles.spacing.defaultPadding};

    ${(props: ContainerProps) => props.alignVertically ? 'align-items: center;' : ''};
    
    ${media.tablet`
        width: 950px;
    `}

    ${media.phone`
        width: 100%;
    `}

`