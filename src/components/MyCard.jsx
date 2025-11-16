import Tags from './Tags';

const MyCard = ({ image, name, description, tagText, tagColor }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <Tags text={tagText} bgColor={tagColor} />
      </div>
    </div>
  );
};

export default MyCard;

