import { Menus } from "../../../../constantes/menus";
import { StyleItem, StyleNav } from "./styles";

export const Navbar = () => {
  const menuList = Menus;
  return (
    <StyleNav>
      {menuList.map((item, index) => (
        <StyleItem
          onClick={() => {
            console.log(item);
          }}
          key={index}
        >
          {item}
        </StyleItem>
      ))}
    </StyleNav>
  );
};
