import * as React from 'react';
import styled from 'styled-components';
import { StyledComponent } from '../utils/types';
import { baseStyles, media } from '../utils/base-styles';

interface RentalBoxProps {
    img: string;
    price: number;
    name: string;
    description: string;
}

const rentalBox: React.StatelessComponent<RentalBoxProps & StyledComponent> = ({className, ...props}) => (
    <rental className={className}>
        <div className="rental-image">
            <img src={props.img} />
        </div>
        <div className="product">
            <h4>{props.name}</h4>
            <span className="description">{props.description}</span>
            <span className="price">${props.price.toFixed(2)}</span>
        </div>
    </rental>
)

export const RentalBox = styled(rentalBox)`
flex: 0 0 100%;
${media.tablet`
    flex: 0 0 45%;
`}
${media.desktop`
    flex: 0 0 45%;
`}
box-sizing: content-box;
padding-right: ${baseStyles.spacing.defaultPadding};
padding-bottom: ${baseStyles.spacing.defaultPadding};
.product {
    h4 {
        font-family: ${baseStyles.fonts.nunito};
        letter-spacing: 3px;
        font-style: normal;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .description, .price {
        font-family: ${baseStyles.fonts.fancy};
    }
    .description {
        color: ${baseStyles.colors.accent};
        margin-bottom: 10px;        
    }
    .price {
        font-style: italic;
        color: ${baseStyles.colors.light};
    }
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
`