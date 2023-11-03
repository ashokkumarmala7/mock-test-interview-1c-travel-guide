import './index.css'

const TravelPlacesList = props => {
  const {eachPlace} = props
  const {name, description, imageUrl} = eachPlace

  return (
    <li className="place-container">
      <img src={imageUrl} className="place-image" alt={name} />
      <h1 className="heading">{name}</h1>
      <h1 className="description">{description}</h1>
    </li>
  )
}
export default TravelPlacesList
