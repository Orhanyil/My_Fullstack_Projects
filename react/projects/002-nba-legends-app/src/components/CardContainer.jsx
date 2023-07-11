import PlayerCard from '../components/playerCard/PlayerCard'
import {data} from "../hjelper/data";

const CardContainer = () => {
  return (
    <div>
        <h1 className='mt-4'>CardContainer</h1>
        <div>{data.map((item) => (
            <PlayerCard key={item.name} {...item}/>
))}</div>
        
        
    </div>
  )
}

export default CardContainer