import * as React from 'react';
import styled from 'styled-components';
import { StyledComponent } from '../utils/types';

const logo = ({ className }: StyledComponent) => (
    <img className={className} src="https://placeholdit.co/i/260x40" alt="logo" />
)
export const Logo = styled(logo) `
    margin: 0;
    width: 260px;
    height: 40px;
  `
