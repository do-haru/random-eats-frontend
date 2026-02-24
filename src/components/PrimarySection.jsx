import "./PrimarySection.css";

import CategoryControls from "./CategoryControls";
import MenuResult from "./MenuResult";
import ActionControls from "./ActionControls";

import { categories } from "../data/categories";

import { useState } from "react";

const PrimarySection = () => {
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((c) => c.value)
  );

  const [recommendedMenu, setRecommendedMenu] = useState(null);

  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleRecommend = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/menus/random", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCategories),
      });

      // 에러 응답 처리 (400 / 404)
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
        return;
      }

      const data = await response.json();
      setRecommendedMenu(data);
    } catch (error) {
      console.error("추천 요청 실패:", error);
    }
  };

  return (
    <section>
      <CategoryControls
        categories={categories}
        selectedCategories={selectedCategories}
        onToggle={handleToggleCategory}
      />
      <MenuResult recommendedMenu={recommendedMenu} />
      <ActionControls
        onRecommend={handleRecommend}
        disabled={selectedCategories.length === 0}
      />
    </section>
  );
};

export default PrimarySection;
