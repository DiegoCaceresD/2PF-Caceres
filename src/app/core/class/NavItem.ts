import {iNavItem} from "../interfaces/iNavItem";

export class NavItem implements iNavItem {
  path: string;
  titulo: string;

  static links: iNavItem[] = [
    {
      path: 'alumnos',
      titulo: 'Alumnos'
    },
    {
      path:'cursos',
      titulo: 'Cursos'
    },
    {
      path:'inscripciones',
      titulo: 'Inscripciones'
    }
  ]
}
