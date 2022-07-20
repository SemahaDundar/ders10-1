import React from 'react';
import ReactDOM from 'react-dom/client';
import Component1 from './components/component1';

function Component1(props){
 console.log.apply('REnder başladı...')}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Component1 aksiyon={uyari}/>
  <Component1 mesaj={[2, 35, 28, 95]}/>
  <Component1/>
  <Component1/>
  <Component1 mesaj={{ad:"Sema",  soyad:"Dundar"}}/>
  
  
  </>
);

