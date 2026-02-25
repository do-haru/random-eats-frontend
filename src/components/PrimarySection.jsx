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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleRecommend = async () => {
    setLoading(true);
    setError(null);

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
      setError("서버 요청에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <CategoryControls
        categories={categories}
        selectedCategories={selectedCategories}
        onToggle={handleToggleCategory}
      />
      <MenuResult
        recommendedMenu={recommendedMenu}
        loading={loading}
        error={error}
      />
      <ActionControls
        onRecommend={handleRecommend}
        disabled={loading || selectedCategories.length === 0}
      />
    </section>
  );
};

export default PrimarySection;
