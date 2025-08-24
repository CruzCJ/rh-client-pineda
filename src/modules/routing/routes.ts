import { Home } from "../home/Home";
import { About } from "../about/About";
import { RouteType } from "./routes.types";
import { Reservation } from "../reservation/Reservation";
import { Users } from "../users/Users";
import { Personas } from "../personas/Personas";

export const appRoutes: RouteType[] = [
  {
    path: "/home",
    name: "Inicio",
    component: Home,
    layout: "/",
  },
  {
    path: "/about",
    name: "Sobre Nosotros",
    component: About,
    layout: "/",
  },
  {
    path: "/reservation",
    name: "Reservación",
    component: Reservation,
    layout: "/",
  },
  {
    path: "/userstemp",
    name: "UsuariosTemp",
    icon: "pi pi-user",
    component: Users,
    layout: "/",
  },
  {
    path: "/personas",
    name: "Personas",
    icon: "pi pi-personas",
    component: Personas,
    layout: "/",
  },
];
