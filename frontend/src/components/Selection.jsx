import { useEffect, useState } from "react";
import Bubbles from "./Bubbles";

function Selection() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollTop >= 5 && (
        <span className="bubble-container1">
          <Bubbles />
        </span>
      )}
      <div className="verybig-container">
        <div className="verybig-bubbles bubble1">
          <h3>Océan Pacifique</h3>
        </div>
        <div className="verybig-bubbles bubble2">
          <h3>Océan Arctique</h3>
        </div>

        <div className="verybig-bubbles bubble3">
          <h3>Océan Atlantique</h3>
        </div>

        <div className="verybig-bubbles bubble4">
          <h3>
            Océan <br /> Indien
          </h3>
        </div>

        <div className="verybig-bubbles bubble5">
          <h3>Océan Antarctique</h3>
        </div>
      </div>
    </>
  );
}

export default Selection;
