import "./PrimarySection.css";

import CategoryControls from "./CategoryControls";
import MenuResult from "./MenuResult";
import ActionControls from "./ActionControls";

import { useState } from "react";

const PrimarySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section>
      <CategoryControls onSelect={setSelectedCategory} />
      <MenuResult />
      <ActionControls />
    </section>
  );
};

export default PrimarySection;
