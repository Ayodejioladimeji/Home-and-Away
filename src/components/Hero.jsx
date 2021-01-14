import React from 'react'

const Hero = ({children, hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero:"defaultHero"
    // A class from css
}

export default Hero
