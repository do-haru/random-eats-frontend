import "./MenuResult.css";

const MenuResult = ({ recommendedMenu }) => {
  if (!recommendedMenu) {
    return (
      <div className="MenuResult">
        <p>결정 버튼을 클릭하세요</p>
      </div>
    );
  }

  return (
    <div className="MenuResult">
      <img src={recommendedMenu.imageUrl} alt={recommendedMenu.name} />
      <p>{recommendedMenu.name}</p>
    </div>
  );
};

export default MenuResult;
