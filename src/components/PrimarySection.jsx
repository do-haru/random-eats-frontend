import "./PrimarySection.css";

import CategoryControls from "./CategoryControls";
import MenuResult from "./MenuResult";
import ActionControls from "./ActionControls";

import { useState } from "react";

const PrimarySection = () => {
  const categories = ["한식", "양식", "중식", "일식", "디저트", "기타"];

  const [selectedCategories, setSelectedCategories] = useState(categories);

  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section>
      <CategoryControls
        categories={categories}
        selectedCategories={selectedCategories}
        onToggle={handleToggleCategory}
      />
      <MenuResult />
      <ActionControls />
    </section>
  );
};

export default PrimarySection;
