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
    { name: "비빔밥", category: "한식", image: bread },
    { name: "김치찌개", category: "한식", image: bread },
    { name: "파스타", category: "양식", image: bread },
    { name: "피자", category: "양식", image: bread },
    { name: "초밥", category: "일식", image: bread },
    { name: "짜장면", category: "중식", image: bread },
  ];

  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleRecommend = () => {
    // 1. 선택된 카테고리에 해당하는 메뉴만 필터링
    const filteredMenus = mockMenus.filter((menu) =>
      selectedCategories.includes(menu.category)
    );

    // 2. 예외 처리 (선택된 카테고리가 없거나 결과가 없을 때)
    if (filteredMenus.length === 0) {
      alert("선택된 카테고리가 없습니다.");
      return;
    }

    // 3. 랜덤 선택
    const randomIndex = Math.floor(Math.random() * filteredMenus.length);
    const randomMenu = filteredMenus[randomIndex];

    // 4. 상태 업데이트
    setRecommendedMenu(randomMenu);
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
