import styled from "styled-components";

export const MenuBody = styled.div`
  background-color: #353535;
  height: 100%;
  width: 200px;
  position: absolute;
  z-index: 999;
`;
export const NavMenu = styled.ul``;

export const PrimaryButton = styled.li`
  color: #d9d9d9;
  list-style: none;
  padding: 10% 0% 0% 10%;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const PrimaryButtonGroup = styled.li`
  color: #d9d9d9;
  list-style: none;
  padding: 8% 0% 2% 10%;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const NavSubMenu = styled.ul``;
export const SecundaryButtonGroup = styled.li`
  color: gray;
  list-style: none;
  padding: 0% 0% 2% 15%;
  font-size: 0.9rem;
  font-weight: 500;
  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: gray;
  }
  a:hover {
    text-decoration: none;
    //color: rgb(53, 53, 53);
    background-color: rgb(70, 70, 70);
    border-radius: 5px 5px 5px 5px;

    display: block;
  }
`;
