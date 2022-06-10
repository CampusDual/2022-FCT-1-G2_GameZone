import {MenuRootItem} from 'ontimize-web-ngx';


export const MENU_CONFIG: MenuRootItem[] = [
  {id: 'home', name: 'HOME', icon: 'home', route: '/main/see-users'},
  {id: 'logout' , name: 'LOGOUT', icon: 'exit_to_app', route: '/login'},
  {id: 'update-price' , name: 'UPDATE PRICES', icon: 'home', route: '/main/update-price'},
  {id: 'tournaments' , name: 'TOURNAMENTS', icon: 'home', route: '/main/tournaments'},
  {id: 'events' , name: 'EVENTS', icon: 'home', route: '/main/events'}
];

