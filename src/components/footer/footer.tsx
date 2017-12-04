import * as React from 'react';
import { FaPhone, FaGlobe, FaEnvelope } from 'react-icons/lib/fa'

import styled from 'styled-components';
import baseStyles, {media} from '../../utils/base-styles';
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

interface ColumnProps {
    size?: string;
}

const Column = styled.div`
padding-right: ${baseStyles.spacing.defaultPadding};
flex: ${(props: ColumnProps) => props.size || 1};
h3 {
    color: white;
    line-height: 40px;
}
.description {
    margin-top: 10px;
    display: flex;
    flex-flow: column nowrap;
    span {
        display: inline-flex;
        svg {
            margin-right: 10px;
            color: ${baseStyles.colors.accent}
        }
        h4, a {
            color: ${baseStyles.colors.light}
        }
    }
}
`

const footer: React.StatelessComponent<StyledComponent> = ({ className }) => {

    const currentYear = new Date().getFullYear();

    return <footer className={className}>
        <div className="footerContent">
            <Container>
                <Column>
                    <Logo />
                    <div className="description">
                    <p>Lorem ipsum some stuf</p>
                    <span><FaGlobe /><h4>Address here</h4></span>
                    <span><FaPhone /><h4>+1 647 567 8154</h4></span>
                    <span><FaEnvelope /><h4><a href="mailto:info@featherology.com">info@featherology.com</a></h4></span>
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
${media.phone`
flex: 0 0 auto;
`}
.footerContent {
    flex: 1 1 auto;
    color: ${baseStyles.colors.light};
    display: flex;
    padding-top: ${baseStyles.spacing.defaultPadding};
    justify-content: space-between;
    ${Container} {
        ${media.phone`
        flex-flow: column nowrap;
        `}
    }
}
`