import "./CategoryControls.css";

const CategoryControls = ({ categories, selectedCategories, onToggle }) => {
  return (
    <div className="CategoryControls">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onToggle(category)}
          className={selectedCategories.includes(category) ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryControls;
