import Condition from '../Comp02_Condition';
import Book from '../Comp05_book';
import Event from '../Comp03_Event';
import EffectComponent from '../Comp07_EffectComponent';
import Form from '../Comp08_Form_Ref';
import Router from '../Comp09_Router';
import BoardList from '../board/BoardComponent';
import CustomerList from '../CustomerList';

let route = [
  { path: '/', element: <Event /> },
  { path: '/book', element: <Book /> },
  { path: '/condition', element: <Condition /> },
  { path: '/EffectComponent', element: <EffectComponent /> },
  { path: '/Form', element: <Form /> },
  { path: '/Router', element: <Router /> },
  { path: '/Board/*', element: <BoardList /> },
  { path: '/CustomerList', element: <CustomerList /> },
];

export default route;
