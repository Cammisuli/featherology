import React from 'react';
import styled, { StyledProps } from 'styled-components';
import Img from 'gatsby-image';
import Bricks from 'bricks.js';

import { StyledComponent } from '../utils/types';

interface GalleryProps extends StyledComponent {
    images: any;
}

class gallery extends React.PureComponent<GalleryProps> {
    bricks: any;

    componentDidMount() {
        console.log('mounted this bitch');
        setTimeout(() => {
            this.bricks = new Bricks({
                container: '.gallery-wrap',
                packed: 'data-packed',
                sizes: [
                    { columns: 1, gutter: 0 },
                    { mq: '768px', columns: 2, gutter: 10 },
                    { mq: '1024px', columns: 3, gutter: 10 },
                    { mq: '1225px', columns: 4, gutter: 10 }
                ]
            });
            this.bricks.resize(true);
            this.bricks.pack();
        }, 0);
    }

    render() {
        return (
            <div className={this.props.className + ' gallery-wrap'}>
                {this.props.images.map((image: any, index: number) => {
                    return (
                        <Img key={index} resolutions={image.node.resolutions} />
                    );
                })}
            </div>
        );
    }
}
export const Gallery = styled(gallery)`
    margin: 0 auto;
    .gatsby-image-outer-wrapper {
        display: inline-block;
    }
`;
