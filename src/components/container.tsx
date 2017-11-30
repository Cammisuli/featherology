import * as React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    alignVertically?: boolean;
}

export const Container = styled.div`    
    width: 1100px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    ${(props: ContainerProps) => props.alignVertically ? 'align-items: center;'  : ''};
    @media only screen and (max-width: 1200px) {
        width: 950px;
    }

    @media only screen and (max-width: 1024px) {
        width: 768px;
    }

`