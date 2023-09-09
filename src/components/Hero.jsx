import hero from "../../public/hero.jpg"

const Hero = () => {
    return(
        <section className="hero--container padding--1">
            <div className="hero--context">
                <h1>MUSIC</h1>
                <h3>FESTIVAL</h3>
                <h4>BEST MUSIC FESTIVAL OF THE YEAR</h4>
                <p >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquam repellat debitis voluptatum reprehenderit!
                </p>
                <button>READ MORE</button>
            </div>
            <div className="heroimg--container">
                <img src={hero} alt="hero" />
            </div>
        </section>
    )
}

export default Hero;