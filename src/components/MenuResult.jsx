import "./MenuResult.css";

const MenuResult = ({ recommendedMenu, loading, error }) => {
  let content;

  if (loading) {
    content = (
      <div className="menu-loading">
        <p>추천 중...</p>
      </div>
    );
  } else if (error) {
    content = (
      <div className="menu-error">
        <p>잠시 후 다시 시도해주세요</p>
      </div>
    );
  } else if (!recommendedMenu) {
    content = (
      <div className="menu-loading">
        <p>결정 버튼을 클릭하세요</p>
      </div>
    );
  } else {
    content = (
      <div className="menu-result">
        <img src={recommendedMenu.imageUrl} alt={recommendedMenu.name} />
        <p>{recommendedMenu.name}</p>
      </div>
    );
  }

  return (
    <div className="MenuResult">
      <svg className="menu-result-border" preserveAspectRatio="none">
        <rect
          x="4"
          y="4"
          width="calc(100% - 8px)"
          height="calc(100% - 8px)"
          rx="28"
          ry="28"
          fill="none"
          stroke="#3f3f3f"
          strokeWidth="4"
          strokeDasharray="32 20"
          strokeLinecap="round"
        />
      </svg>

      {content}
    </div>
  );
};

export default MenuResult;
