import logo from './logo.svg';
import './App.css';

function App() {
  let data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];
  let fdata = data.filter((d,i) => d.status === true);
  let rdata = fdata.reduce((acc, d, i) => acc+d.bonus+d.salary,0);
  console.log(rdata);
  return (
    <table border="1" align="center">
      <tr>
        <td>name</td>
        <td>age</td>
        <td>salary</td>
        <td>bonus</td>
        <td>status</td>
        <td>total</td>
      </tr> 
      {
        fdata.map((d,i) =>{
          let {name, age, salary, bonus, status} = d;
          return(
            <tr key={i}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{salary}</td>
              <td>{bonus}</td>
              <td>{status.toString()}</td>
              <td>{salary+bonus}</td>
            </tr>
          )
        })
      }
      {
        fdata.map((d,i) =>{
          let {name, age, salary, bonus, status} = d;
          return(
            <tr key={i}>
              {i===0 ? <td colSpan={6}>total expense is = {rdata}</td> : null}
            </tr>
          )
        })
      }
    </table>
  );

}

export default App;
