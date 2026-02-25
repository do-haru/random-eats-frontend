import "./MenuResult.css";

const MenuResult = ({ recommendedMenu, loading, error }) => {
  if (loading) {
    return (
      <div className="MenuResult">
        <div className="menu-placeholder">
          <p>추천 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="MenuResult">
        <div className="menu-card error">
          <p>{error}</p>
          <small>잠시 후 다시 시도해주세요</small>
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
