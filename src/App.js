import ButtonComponent from "./components/Button/Button.js";
import {HeadinOne,HeadinTwo,HeadinThree,HeadinFour,HeadinFive,HeadinSix }from "./components/heading/heading.js";
import { ListParentOrdered,ListParentUnordered } from "./components/list/listitems.js";
const App = () =>{
  return (
    <div>
     
      <HeadinOne/>
      <HeadinTwo/>
      <HeadinThree/>
      <HeadinFour/>
      <HeadinFive/>
      <HeadinSix/>
      <ButtonComponent/>

      <HeadinOne/>
      <HeadinTwo/>
      <HeadinThree/>
      <HeadinFour/>
      <HeadinFive/>
      <HeadinSix/>
      <ButtonComponent/>
      <ListParentUnordered>
      </ListParentUnordered>
      <ListParentOrdered/>
    </div>
  );
};
export default App;