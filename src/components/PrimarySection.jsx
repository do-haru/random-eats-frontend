import "./PrimarySection.css";

import CategoryControls from "./CategoryControls";
import MenuResult from "./MenuResult";
import ActionControls from "./ActionControls";

import { useState } from "react";

import bread from "../assets/bread.jpg";

const PrimarySection = () => {
  const categories = ["한식", "양식", "중식", "일식", "디저트", "기타"];
  const [selectedCategories, setSelectedCategories] = useState(categories);

  const [recommendedMenu, setRecommendedMenu] = useState({
    name: "테스트 메뉴",
    image: bread,
  });

  const mockMenus = [
    { name: "비빔밥", image: bread },
    { name: "파스타", image: bread },
    { name: "초밥", image: bread },
  ];

  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleRecommend = () => {
    const randomIndex = Math.floor(Math.random() * mockMenus.length);
    setRecommendedMenu(mockMenus[randomIndex]);
  };

  return (
    <section>
      <CategoryControls
        categories={categories}
        selectedCategories={selectedCategories}
        onToggle={handleToggleCategory}
      />
      <MenuResult recommendedMenu={recommendedMenu} />
      <ActionControls onRecommend={handleRecommend} />
    </section>
  );
};

export default PrimarySection;
