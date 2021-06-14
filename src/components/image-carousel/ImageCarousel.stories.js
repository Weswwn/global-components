import React from 'react';
import { ImageCarousel } from './ImageCarousel';

// import { Story } from '@storybook/react';

export default {
    title: 'ImageCarousel',
    component: ImageCarousel
}

const Template = (args) => <ImageCarousel {...args} />;

export const ImageCarouselTemplate = Template.bind({});

ImageCarouselTemplate.args = {

}