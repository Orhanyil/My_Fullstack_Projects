import Buton from "../buton/Buton"
import CardStyle from "./Card.module.css"

const Card = ({ lang, btn, img }) => {
  return (
    <div>
      <h1 className={CardStyle["title"]}>{lang}</h1>
      <img className={CardStyle["images"]} src={img} alt="image" />
      <Buton btn={btn} />
    </div>
  )
}

export default Card
