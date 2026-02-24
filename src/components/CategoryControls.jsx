import "./CategoryControls.css";

const CategoryControls = ({ categories, selectedCategories, onToggle }) => {
  return (
    <div className="CategoryControls">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onToggle(category.value)}
          className={
            selectedCategories.includes(category.value) ? "active" : ""
          }
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryControls;
