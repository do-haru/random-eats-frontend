import "./ActionControls.css";

const ActionControls = ({ onRecommend, disabled }) => {
  return (
    <div className="ActionControls">
      <button type="button" onClick={onRecommend} disabled={disabled}>
        결정
      </button>
    </div>
  );
};

export default ActionControls;
