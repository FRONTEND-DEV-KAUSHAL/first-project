import React from 'react';
import '../App.css';

function loading(Component) {
    return function Loader({isLoading , data}){
        if (isLoading) {
            return(
                <div>
    <div className='mesh-loader'>
      <div className='set-one'>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
      <div className='set-two'>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
    </div>
  </div>
                )
        } else {
            return <Component 
                data = {data}
            />
        }
    }
}

export default loading;