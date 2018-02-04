import React from 'react';
import styled from 'styled-components';
import { StyledComponent } from '../utils/types';
import baseStyles from '../utils/base-styles';
interface BadgeProps extends StyledComponent {
    icon: any;
    title: string;
}

const badge: React.StatelessComponent<BadgeProps> = ({className, children, icon, title}) => (
    <badge className={className}>
        <span>
            <span className="icon">{icon}</span>
            <span className="title">{title}</span>
        </span>
        <span className="divider"></span>
        <p>{children}</p>
    </badge>
);

export const Badge = styled(badge)`
display: flex;
align-items: center;
flex-flow: column;
margin-bottom: ${baseStyles.spacing.defaultPadding};
span:first-child {
    display: flex;
    flex-flow: column;
    align-items: center;
    .icon {
        color: ${baseStyles.colors.accent};
        padding-bottom: ${baseStyles.spacing.defaultPadding};
        svg {
            height: 60px;
            width: 60px;
        }
    }
    .title {
        text-transform: uppercase;
        font-family: ${baseStyles.fonts.nunito};
        letter-spacing: 3px;
    }
}
.divider {
    width: 70px;
    height: 1px;
    background-color: ${baseStyles.colors.light};
    margin: 15px 0;
}
p {
    color: ${baseStyles.colors.light};
    text-align: center;
}
`