import logo from './logo.svg';
import './App.css';

function App() {
  const person = [
    {
        name: "Amit",
        age: 25,
        course: [
            "C",
            "HTML"
        ]
    },
    {
        name: "Ajay",
        age: 40,
        course: [
            "Java",
            "JavaScript"
        ]
    }
];
  return (
      person.map((p) => {
        document.write(p.name);
        document.write(p.age);
        document.write(p.course);
      })
  )

}

export default App;
