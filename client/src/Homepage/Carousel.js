import React, { Component } from 'react';
import Slider from 'react-slick';
import AllEvents from '../Dashboard/AllEvents';

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            fade: true,
            // adaptiveHeight: true,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            pauseOnHover: true,
            swipeToSlide: true
        };
        return (
            <div>
                <Slider {...settings}>

                    <div>
                        <AllEvents />
                    </div>
                </Slider>
            </div>
        );
    }
}