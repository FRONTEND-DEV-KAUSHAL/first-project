import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import Loading from './containers/Loading';
import Home from './containers/Home';

  const LoadingwithHome = Loading(Home)
function App() {
  let [loading , setLoading] = useState(false);
  let [data , setData] = useState([]);

  let orgdata = [
    {
      name : 'Kaushal',
      surname : 'Gohil',
      grid : 5782
    },
    {
      name : 'Jaydeep',
      surname : 'Goyani',
      grid : 6782
    }
  ]

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false); 
      setData(orgdata)},2000)
  },[])
  return (
    <LoadingwithHome
      isLoading = {loading}
      data = {data}
    />
  );
}

export default App;
