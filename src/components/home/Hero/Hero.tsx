import React from 'react'
import './Hero.scss'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="left">
                    <h1>
                        Find the perfect <i>freelance</i> services for your business
                    </h1>
                    <div className="search">
                        <div className="icon">
                            <img src="/public/img/search.png" alt="" />
                        </div>
                        <input
                            type="text"
                            placeholder='Try "building mobil app"'
                            className="search-input"
                        />
                        <button className="search-btn">Search</button>
                    </div>
                    <div className="popular">
                        <p>Popular:</p>
                        <button className="popular-btn">Web Design</button>
                        <button className="popular-btn">Wordpress</button>
                        <button className="popular-btn">Logo Design</button>
                        <button className="popular-btn">AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="/public/img/man.png" alt="" />
                </div>
            </div>
        </section>
    )
}
