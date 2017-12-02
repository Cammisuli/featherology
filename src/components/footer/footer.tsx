import * as React from 'react';

import styled from 'styled-components';
import baseStyles from '../../utils/base-styles';
import { StyledComponent } from '../../utils/types';
import { Logo } from '../logo';
import { Container } from '../container';

const CopyRight = styled.div`
background-color: ${baseStyles.colors.black};
display: flex;
color: white;
flex: 0 0 50px;
align-items: center;
justify-content: center;
font-size: small;
font-family: 'Libre Baskerville';
font-style: italic;
letter-spacing: 1.5px;
font-weight: 200;
`

interface Col {
    size?: string;
}

const Column = styled.div`
padding-right: ${baseStyles.spacing.defaultPadding};
flex: ${(props: Col) => props.size || 1};
h3 {
    color: white;
    line-height: 40px;
}
.description {
    margin-top: 10px;
}
`

const footer: React.StatelessComponent<StyledComponent> = ({ className }) => {

    const currentYear = new Date().getFullYear();

    return <footer className={className}>
        <div className="footerContent">
            <Container>
                <Column size="0 0 450px">
                    <Logo />
                    <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed numquam totam libero ratione odio eum dolorem quaerat? Perspiciatis commodi neque minima. Numquam maxime deserunt omnis molestias exercitationem iusto ipsam porro?
                    </div>
                </Column>
                {/* <Column></Column> */}
                <Column><h3>Instagram</h3></Column>
            </Container>
        </div>
        <CopyRight>Copyright {currentYear}&copy; Featherology</CopyRight>
    </footer>
};

export const Footer = styled(footer) `
display: flex;
flex-flow: column nowrap;
flex: 0 0 350px;
width: 100%;
background-color: ${baseStyles.colors.blackLight};
.footerContent {
flex: 1 1 auto;
color: ${baseStyles.colors.light};
display: flex;
padding-top: ${baseStyles.spacing.defaultPadding};
justify-content: space-between;
}
`