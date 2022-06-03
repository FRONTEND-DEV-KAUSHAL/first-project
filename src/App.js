import logo from './logo.svg';
import './App.css';

function App() {
  const person = [
    {
        name: "Amit",
        age: 25,
    },
    {
        name: "Piyush",
        age: 40,
    },


];
  return (
    person.map((v,i) => {
      document.write(v.name+"<br>");
      document.write(v.age+"<br>")
    })
  )

}

export default App;
