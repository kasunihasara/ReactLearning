import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import Image from './assets/723-7239270_hotel-transylvania-2-dennis-png.png'
import Image2 from './assets/rs_634x846-150213100958-634.wonderland-kristen-stewart4.jpg'
import UserGreetings from './UserGreetings.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'
import ObjectUpdate from './ObjectUpdate.jsx'
import ArrayObject from './ArrayObject.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffect from './UseEffect.jsx'
import ComponentA from './ComponentA.jsx'

function App() {
    const fruits = [
        {id:1,name:'apple', calores: 95}, 
        {id:2,name:'orange',calores: 55}, 
        {id:3,name:'banana',calores: 141}];

const vegitabels = [
            {id:4,name:'carrot', calores: 95}, 
            {id:5,name:'corn',calores: 55}, 
            {id:6,name:'brocali',calores: 141}];
 return(
  <>
  <Header></Header>
  <Card imageSrc={Image}></Card>
  <Card imageSrc={Image2}></Card>
  <Food></Food>
  <Footer></Footer>
  <Button></Button>
  <Student name='Kasuni' age={25} isStudent={true}></Student>
  <Student name='Hasara' age={30} isStudent={true}></Student>
  <Student age={10}></Student>
  <UserGreetings isLoggedIn={true} userName="kasuni"/>

  {fruits.length > 0 && <List items={fruits} category="FRUITS"></List> }  
  {vegitabels.length > 0 && <List items={vegitabels} category="VEGITABELS"></List> }

  <ProfilePicture></ProfilePicture>
  <MyComponent></MyComponent>
  <Counter></Counter>
  <ColorPicker></ColorPicker>
  <ObjectUpdate></ObjectUpdate>
  <ArrayObject></ArrayObject>
  <ToDoList></ToDoList>
  <UseEffect></UseEffect>
  <ComponentA></ComponentA>
  </>
 );
}

export default App
