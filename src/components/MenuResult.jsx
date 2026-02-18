import "./MenuResult.css";

import bread from "../assets/bread.jpg";

const MenuResult = () => {
  return (
    <div className="MenuResult">
      <img src={bread} alt="빵" />
      <p>빵</p>
    </div>
  );
};

export default MenuResult;
