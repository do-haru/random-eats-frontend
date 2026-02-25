import "./MenuResult.css";

const MenuResult = ({ recommendedMenu, loading }) => {
  if (loading) {
    return (
      <div className="MenuResult">
        <div className="menu-placeholder">
          <p>추천 중...</p>
        </div>
      </div>
    );
  }

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
