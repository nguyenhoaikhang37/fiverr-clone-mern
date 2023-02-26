import React, { useEffect, useState } from 'react'
import './Header.scss'

const Header = () => {
    const [isActiveHeader, setIsActiveHeader] = useState(false)

    useEffect(() => {
        function handleScrollY() {
            if (window.scrollY > 0) {
                setIsActiveHeader(true)
            } else {
                setIsActiveHeader(false)
            }
        }

        document.addEventListener('scroll', handleScrollY)

        return () => {
            document.removeEventListener('scroll', handleScrollY)
        }
    }, [])

    return (
        <header className={`header ${isActiveHeader ? 'active' : ''}`}>
            <div className="main-header">
                <div className="container">
                    <div className="logo">
                        <span className="name">liverr</span>
                        <span className="dot">.</span>
                    </div>
                    <nav className="navbar active">
                        <ul>
                            <li>Liverr Business</li>
                            <li>Explore</li>
                            <li>English</li>
                            <li>Become a Seller</li>
                            <li>
                                <button className="btn btn--text">Sign In</button>
                            </li>
                            <li>
                                <button className="btn btn--outline">Join</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {isActiveHeader && (
                <div className="menu">
                    <div className="container">
                        <a className="link menuLink" href="/">
                            Graphics &amp; Design
                        </a>
                        <a className="link menuLink" href="/">
                            Video &amp; Animation
                        </a>
                        <a className="link menuLink" href="/">
                            Writing &amp; Translation
                        </a>
                        <a className="link menuLink" href="/">
                            AI Services
                        </a>
                        <a className="link menuLink" href="/">
                            Digital Marketing
                        </a>
                        <a className="link menuLink" href="/">
                            Music &amp; Audio
                        </a>
                        <a className="link menuLink" href="/">
                            Programming &amp; Tech
                        </a>
                        <a className="link menuLink" href="/">
                            Business
                        </a>
                        <a className="link menuLink" href="/">
                            Lifestyle
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
