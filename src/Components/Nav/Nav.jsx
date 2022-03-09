import {
  Divider,
  Drawer,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "../../Images/logo-527.png";
function Nav() {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleOutsideClick = (e) => {
    if (e.target.id === "drawer") setToggle(false);
  };

  return (
    <>
      <div className="navhead">
        <button className="buttonnav" onClick={() => setToggle(true)}>
          =
        </button>
        <p>Controle de Loteamentos</p>
      </div>
      <div id="drawer" onClick={() => handleOutsideClick}>
        <Drawer open={toggle} variant="temporary" onClose={() => setToggle()}>
          <Box width={theme.spacing(28)} heigth="100%" display="flex" flexDirection="column">
            <Box
              width="100%"
              height={theme.spacing(15)}
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              flexDirection="column"
            >
              <img src={Logo} />
              <Link to={"/"}>
                <ListItemText secondary="Controle de loteamentos" />
              </Link>
            </Box>
            <Divider />

            <Box>
              <List component="nav" subheader={<ListSubheader component="div">Loteamentos</ListSubheader>}>
                <ListItemButton>
                  <Link to={"loteamento"}>
                    <ListItemText sx={{ fontSize: 16 }} secondary="Consultar" onClick={() => setToggle(false)} />
                  </Link>
                </ListItemButton>

                <ListItemButton onClick={handleClick}>
                  <ListItemText secondary="Cadastrar loteamento" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 3 }}>
                      <Link to={"cadastro"}>
                        <ListItemText secondary="Cadastro Individual" onClick={() => setToggle(false)} />
                      </Link>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 3 }}>
                      <ListItemText secondary="Cadastro em lote" />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton>
                  <Link to={"clientescadastro"}>
                    <ListItemText
                      sx={{ fontSize: 16 }}
                      secondary=" Cadastrar Clientes"
                      onClick={() => setToggle(false)}
                    />
                  </Link>
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Drawer>
      </div>
    </>
  );
}
export default Nav;
