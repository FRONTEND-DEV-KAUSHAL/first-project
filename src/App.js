import logo from './logo.svg';
import './App.css';

function App() {
  const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
for (let k in myObj) {
  if (k == "age") {
    
    console.log(myObj[k]);
  }

}
  return 

}

export default App;
