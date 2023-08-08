import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { HiBell } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";
import { LuVerified } from "react-icons/lu";
import { CiCircleMore } from "react-icons/ci";

const routes = [
  {
    href: "/",
    icon: <BiHomeCircle size={20} />,
    title: "Inicio",
  },
  {
    href: "/",
    icon: <BsSearch size={20} />,
    title: "Explorar",
  },
  {
    href: "/",
    icon: <HiBell size={20} />,
    title: "Notificaciones",
  },
  {
    href: "/",
    icon: <AiOutlineMail size={20} />,
    title: "Mensajes",
  },
  {
    href: "/",
    icon: <RiFileList2Line size={20} />,
    title: "Listas",
  },
  {
    href: "/",
    icon: <LuVerified size={20} />,
    title: "Verificado",
  },
  {
    href: "/",
    icon: <AiOutlineUser size={20} />,
    title: "Perfil",
  },
  {
    href: "/",
    icon: <CiCircleMore size={20} />,
    title: "Mas opciones",
  },
];

export default routes;
