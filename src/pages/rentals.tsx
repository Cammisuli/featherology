import React from 'react';
import styled from 'styled-components';

import { Container } from '../components/container';
import { HeroBanner } from '../components/hero-banner';
import { RentalBox } from '../components/rental-box';
import { StyledComponent } from '../utils/types';

const RentalPage: React.StatelessComponent<StyledComponent> = ({
    className
}) => ( 
    <rentals className={className}>
        <HeroBanner snippet="Take a look at what rentals I offer">
            <h1>Rentals</h1>
        </HeroBanner>
        <Container wrap>
            <RentalBox
                img="https://placeholdit.co/i/600x500"
                price={15}
                description="24” vase with 4 20-22” feathers"
                name="Vase"
            />
            <RentalBox
                img="https://placeholdit.co/i/600x500"
                price={4}
                description="My Item"
                name="Feathers"
            />
            <RentalBox
                img="https://placeholdit.co/i/600x500"
                price={4}
                description="My Item"
                name="Feathers"
            />
            <RentalBox
                img="https://placeholdit.co/i/600x500"
                price={4}
                description="My Item"
                name="Feathers"
            />

            <div className="additional">
                <h2>Additional:</h2>
                <p>
                    <h4>Delivery & Set up</h4>
                    $100 per every 20 centerpieces or less within the GTA. For
                    more then 20 it is +$5 Per piece.
                </p>

                <p>
                    <h4>Delivery, Set up and Pickup</h4>
                    $150 per every 20 centerpieces or less within the GTA. For
                    more then 20 it is +$5 Per piece.
                </p>

                <p>
                    <h4>
                        <i>please contact for outside of the GTA</i>
                    </h4>
                </p>
                <p>
                    Clients are welcome to pick up the items before the event
                    and return after you are done if preferred to forgo set up
                    cost!
                </p>
                <p>
                    LED base lights are $5 to rent (they change to 16 different
                    colours with a click of a remote)
                </p>
                <hr />
                <p>
                    <h4>Deposits and fees</h4>
                    Deposits are $200 to reserve the items for your event and is
                    returned within three days after items are picked
                    up/returned.
                    <br />
                    <p>Crystals/Pearls can be draped for $3 each.</p>
                    <p>
                        For missing/damaged items the charge will be:
                        <dl>
                            <dt>Vase</dt>
                            <dd>$15</dd>
                            <dt>14-16” feather</dt>
                            <dd>$1.65</dd>
                            <dt>20-22” feather</dt>
                            <dd>$4</dd>
                            <dt>LED</dt>
                            <dd>$45</dd>
                            <dt>Chandelier</dt>
                            <dd>$50</dd>
                        </dl>
                    </p>
                </p>
            </div>
        </Container>
    </rentals>
);

const StyledRentalPage = styled(RentalPage)`
    dd {
        margin: 0;
    }
`;

export default StyledRentalPage;
