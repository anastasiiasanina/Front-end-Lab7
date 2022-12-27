
const GoodsCard = ({name, cost, img}) => {
  return(
    <div className="card">
      <img className="card-image" src={img} alt={name} height="330" width="240"></img>
      <p>{name}</p>
      <p>Cost: {cost}</p>
    </div>
  )
}

export default GoodsCard;