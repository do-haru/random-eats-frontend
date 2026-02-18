import "./PrimarySection.css";

import ActionControls from "./ActionControls";
import CategoryControls from "./CategoryControls";
import MenuResult from "./MenuResult";

const PrimarySection = () => {
  return (
    <section>
      <CategoryControls />
      <MenuResult />
      <ActionControls />
    </section>
  );
};

export default PrimarySection;
