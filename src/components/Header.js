import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("accordion");

  const onItemClick = (e, { name, to }) => {
    console.log(to);
    setActiveItem(name);
  };

  return (
    <Menu secondary>
      <Menu.Item
        name="accordion"
        active={activeItem === "accordion"}
        onClick={onItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="dropdown"
        active={activeItem === "dropdown"}
        onClick={onItemClick}
        as={Link}
        to="/dropdown"
      />
      <Menu.Item
        name="search"
        active={activeItem === "search"}
        onClick={onItemClick}
        as={Link}
        to="/search"
      />
      <Menu.Item
        name="translate"
        active={activeItem === "translate"}
        onClick={onItemClick}
        as={Link}
        to="/translate"
      />
      <Menu.Item
        name="unsplash"
        active={activeItem === "unsplash"}
        onClick={onItemClick}
        as={Link}
        to="/unsplash"
      />
      <Menu.Item
        name="youtube"
        active={activeItem === "youtube"}
        onClick={onItemClick}
        as={Link}
        to="/youtube"
      />
    </Menu>
  );
}
