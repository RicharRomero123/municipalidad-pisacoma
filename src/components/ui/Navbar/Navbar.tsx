"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "@/components/ui/Navbar/Icons";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={30} width={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={30} width={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={30} width={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={30} width={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={30} width={30} />,
  };

  const menuItems = [
    { name: "Inicio", link: "/" },
    { 
      name: "Nuestro Distrito", 
      submenu: [
        { name: "Historia", link: "/distrito/historia", icon: icons.scale, description: "Conoce la historia de nuestro distrito" },
        { name: "Geografía", link: "/distrito/geografia", icon: icons.activity, description: "Descubre la geografía de nuestro distrito" },
        { name: "Turismo", link: "/distrito/turismo", icon: icons.flash, description: "Explora el turismo en nuestro distrito" }
      ] 
    },
    { 
      name: "Institucional", 
      submenu: [
        { name: "Alcalde", link: "/institucional/alcalde", icon: icons.user, description: "Conoce a nuestro alcalde" },
        { name: "Organigrama Estructural", link: "/institucional/organigrama", icon: icons.server, description: "Estructura del organigrama" },
        { name: "Concejo Municipal", link: "/institucional/concejo-municipal", icon: icons.lock, description: "Miembros del Concejo Municipal" }
      ] 
    },
    { 
      name: "Transparencia", 
      submenu: [
        { name: "Ordenanza Municipal", link: "/transparencia/ordenanza-municipal", icon: icons.scale, description: "Conoce nuestras ordenanzas municipales" },
        { name: "Resolución de Concejo", link: "/transparencia/resolucion-concejo", icon: icons.activity, description: "Resoluciones del Concejo" }
      ] 
    },
    { name: "Notas de prensa", link: "#" }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center">
            <img src="/Huacullani.png" alt="Huacullani" className="ml-2 h-8 w-auto" />
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) =>
          item.submenu ? (
            <Dropdown key={index}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label={`${item.name} submenu`}
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {item.submenu.map((subitem, subindex) => (
                  <DropdownItem 
                    key={subindex} 
                    startContent={subitem.icon} 
                    description={subitem.description}
                    as={Link} 
                    href={subitem.link}
                  >
                    {subitem.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={index} isActive={item.name === "Inicio"}>
              <Link href={item.link} color="foreground">
                {item.name}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) =>
          item.submenu ? (
            <Dropdown key={index}>
              <NavbarMenuItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarMenuItem>
              <DropdownMenu
                aria-label={`${item.name} submenu`}
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {item.submenu.map((subitem, subindex) => (
                  <DropdownItem 
                    key={subindex} 
                    startContent={subitem.icon} 
                    description={subitem.description}
                    as={Link} 
                    href={subitem.link}
                  >
                    {subitem.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarMenuItem key={index}>
              <Link href={item.link} className="w-full" size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          )
        )}
      </NavbarMenu>
    </Navbar>
  );
}
