import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './Slider.scss'

export interface SliderProps {
    items: React.ReactNode[]
}

export default function Slider({ items }: SliderProps) {
    return (
        <AliceCarousel
            infinite
            mouseTracking
            disableDotsControls
            items={items}
            responsive={{
                0: {
                    items: 2,
                },
                512: {
                    items: 4,
                },
                1024: {
                    items: 5,
                },
            }}
            renderPrevButton={PrevButton}
            renderNextButton={NextButton}
        />
    )
}

function PrevButton() {
    return (
        <div className="prev-btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
            </svg>
        </div>
    )
}

function NextButton() {
    return (
        <div className="next-btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
            </svg>
        </div>
    )
}
