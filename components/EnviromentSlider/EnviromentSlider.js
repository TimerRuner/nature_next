import React, { Component } from "react"
import Slider from "react-slick"
import styles from "./EnviromentSlider.module.scss"
import SliderItem from "./SliderItem/SliderItem"
import NextArrow from "./NextArrow/NextArrow"
import PrevArrow from "./PrevArrow/PrevArrow"

import { enviromentList } from "../../helpers/enviromentSliderList"

export default class EnviromentSlider extends Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            dots: true,
            customPaging: (i) => (
                <div className="dot-item">
                    {i + 1} <span>/ {enviromentList.length}</span>
                </div>
            ),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        }
        return (
            <div className={`${styles.enviromentSlider} enviromentSlider`}>
                <Slider {...settings}>
                    {enviromentList.map(({ id, title, desc, cover }) => (
                        <SliderItem
                            key={id}
                            title={title}
                            desc={desc}
                            cover={cover}
                        />
                    ))}
                </Slider>
            </div>
        )
    }
}
