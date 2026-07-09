import Card from "./Card.jsx";

const CardList = ({ robots }) => {
  return (
    <div className="card-grid">
      {robots.map((robot) => (
        <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

export default CardList;
