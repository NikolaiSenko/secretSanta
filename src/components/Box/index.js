import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      <div className="box-header">
        <div className="box-header-info">
          <div className="box-header-info_picture">
            <img src="" alt="picture" />
          </div>
          <div className="box-header-info_description">
            <h4>NAME</h4>
            <div>
              <p>Количество участников:</p>
              <p> Организатор:</p>
            </div>
          </div>
        </div>
        <div className="box-header-toggle-menu">   
        </div>
      </div>
      {console.log(params)}
    </div>
  );
};

export default Boxes;
