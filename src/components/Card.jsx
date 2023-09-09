import { FaStar , FaCirclePlus } from "react-icons/fa6";

const Card = (props) => {
    return(
        <div className="card--container padding--1">
            <div className="cardImg--container">
                <img src={`../../public/images/${props.item.coverImg}`} alt="image" />
            </div>
            <div className="card--deatals">
                <div>
                    <FaStar style={{color: "red"}} />
                    <span>{props.item.stats.rating}({props.item.stats.reviewCount})</span>.
                    <span>{props.item.location}</span>
                </div>
                <h3>{props.item.title}</h3>
                <h3>${props.item.price}</h3>
                {/* <del>$136</del> */}
                <div style={{textAlign: "end"}}>
                    <FaCirclePlus style={{fontSize: "1.3em"}} />
                </div>
            </div>
        </div>
    )
}

export default Card;