import {MenuRootItem} from 'ontimize-web-ngx';


export const MENU_CONFIG: MenuRootItem[] = [
  {id: 'home', name: 'HOME', icon: 'home', route: '/main/see-users'},
  {id: 'logout' , name: 'LOGOUT', icon: 'exit_to_app', route: '/login'},
  {id: 'update-price' , name: 'UPDATE PRICES', icon: 'euro', route: '/main/update-price'},
  {id: 'tournaments' , name: 'TOURNAMENTS', icon: 'emoji_events', route: '/main/tournaments'},
  {id: 'events' , name: 'EVENTS', icon: 'stadium', route: '/main/events'},
  {id: 'new-subs' , name: 'NEW SUBS', icon: 'group_add', route: '/main/new-subs'},
  {id: 'subs-price' , name: 'SUBS AND PRICE', icon: 'people', route: '/main/subs-price'}
];

