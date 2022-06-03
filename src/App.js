import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    name: "Amit",
    age: 25,
    course: [
        "C",
        "HTML"
    ]
}
  return (
      person.course.map((p) => {

        document.write(person.name, person.age, p);
      })
      
  )

}

export default App;
