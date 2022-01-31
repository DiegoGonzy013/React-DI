import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import F1 from '../components/F1';
import PelisGhibli from '../components/PelisGhibli';
import AoEII from '../components/AoEII';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/f1',
    title: 'F1',
    component: F1,
  },
  {
    id: 5,
    path: '/ghibli',
    title: 'Ghibli',
    component: PelisGhibli,
  },
  {
    id: 6,
    path: '/universidad',
    title: 'Universidad',
    component: Universidad,
  },
];

/*
  path
  id
  title
  component

*/
