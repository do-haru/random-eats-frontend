import "./CategoryControls.css";

const CategoryControls = ({ onSelect }) => {
  return (
    <div className="CategoryControls">
      <button onClick={() => onSelect("한식")}>한식</button>
      <button onClick={() => onSelect("양식")}>양식</button>
      <button onClick={() => onSelect("중식")}>중식</button>
      <button onClick={() => onSelect("일식")}>일식</button>
      <button onClick={() => onSelect("디저트")}>디저트</button>
      <button onClick={() => onSelect("기타")}>기타</button>
    </div>
  );
};

export default CategoryControls;
