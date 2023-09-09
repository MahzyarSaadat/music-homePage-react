import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Card from "../components/Card";
import data from "../data";

const HomePage = () => {
    const dataElement = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return(
        <div>
            <div className="padding--1">
                <Nav/>
            </div>
            <Hero />
            <div className="cardsElement">
                {dataElement}
            </div>
        </div>
    )
}

export default HomePage;