import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./styles.css";

const Boxes = () => {
  const [boxes, setBoxes] = useState([]);
  const params = useParams();

  useEffect(() => {
    getBoxes();
  }, []);

  const getBoxes = async () => {
    const response = await fetch(`http://localhost:3004/boxes`);
    const data = await response.json();
    setBoxes(data);
  };

  return (
    <div>
      <div className="boxes-menu">
        <button className="my-boxes">Мои коробки</button>
        <button className="create-box">+</button>
      </div>
      <div className="boxes-container">
        {boxes.map((item) => {
          return (
            <Link key={item.id} to={`boxes/${item.id}`}>
              <div className="box">
                <img src={item.picture} />
                <h2>{item.name}</h2>
                <span> Количество участников: {item.participantNumbers}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Boxes;
