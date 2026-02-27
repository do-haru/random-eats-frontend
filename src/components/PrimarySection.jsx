import "./PrimarySection.css";

import CategoryControls from "./CategoryControls";
import MenuResult from "./MenuResult";
import ActionControls from "./ActionControls";

import { categories } from "../data/categories";

import { useState } from "react";

import { getRandomMenu } from "../api/menuApi";

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
      const data = await getRandomMenu(selectedCategories);
      setRecommendedMenu(data);
    } catch (error) {
      setError("서버 요청에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="PrimarySection">
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
