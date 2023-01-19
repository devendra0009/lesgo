import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { BsToggleOn, BsToggleOff, BsSun, BsFillSunFill } from "react-icons/bs";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light-theme");

  const handleClick = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Container onClick={handleClick}>
        {theme === "light-theme" ? (
          <BsSun color='var(--blue)' className="toggle off"/>
        ) : (
          <BsFillSunFill color='var(--blue)' className="toggle on"/>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  ${'' /* position: absolute;
  right: 1rem;
  top: 1rem; */}
  cursor: pointer;
  .toggle {
    font-size: 36px;
    color: var(--text);
  }
`;

export default ThemeToggler;
