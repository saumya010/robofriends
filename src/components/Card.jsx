const Card = ({ name, email, id }) => {
  return (
    <div className="robot-card">
      <img
        className="robot-avatar"
        src={`https://robohash.org/${id}?set=set2&size=200x200`}
        alt={name}
        loading="lazy"
      />
      <div className="robot-info">
        <h2 className="robot-name">{name}</h2>
        <p className="robot-email">{email}</p>
      </div>
    </div>
  );
};

export default Card;
