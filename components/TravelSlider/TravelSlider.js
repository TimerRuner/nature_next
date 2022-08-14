import React, { Component } from "react"
import Slider from "react-slick"
import Container from "../Container/Container"
import { travelSliderList } from "../../helpers/travelSliderList"
import SliderItem from "./SliderItem/SliderItem"
import styles from "./TravelSlider.module.scss"
import PrevArrow from "./PrevArrow/PrevArrow"
import NextArrow from "./NextArrow/NextArrow"

export default class TravelSlider extends Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        customPaging: (i) => (
                            <div className="dot-item">
                                <span>{i + 1}</span>
                            </div>
                        ),
                    },
                },
            ],
        }
        return (
            <div className={`${styles.travelSlider} journeySlider`}>
                <Container>
                    <Slider {...settings}>
                        {travelSliderList.map(
                            ({ id, title, desc, bgColor }) => (
                                <SliderItem
                                    key={id}
                                    title={title}
                                    desc={desc}
                                    bgColor={bgColor}
                                />
                            )
                        )}
                    </Slider>
                </Container>
            </div>
        )
    }
}
