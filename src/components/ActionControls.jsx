import "./ActionControls.css";

const ActionControls = ({ onRecommend }) => {
  return (
    <div className="ActionControls">
      <button type="button" onClick={onRecommend}>
        결정
      </button>
    </div>
  );
};

export default ActionControls;
