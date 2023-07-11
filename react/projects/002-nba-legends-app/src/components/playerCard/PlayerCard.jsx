

const PlayerCard = ({name, img, statistics}) => {


  return (
    <div>
        <div className="name">
            <h1>{name}</h1>
        </div>
        <div className="img">
            <img src={img} alt="image" />
        </div>
        <div>
            <p className="statistics">{statistics}</p>
        </div>

    </div>
  )
}

export default PlayerCard