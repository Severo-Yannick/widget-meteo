import './styles.scss';

const App = () => {
  return (
    <div className="app">
      <div className="widget">
       <div className="widget__content">
         <div className="widget__city">
           Paris
         </div>
         <div className="widget__temp">
           12°C
         </div>
       </div>
       <div className="widget__img">
         <img src="https://image.flaticon.com/icons/png/512/146/146199.png" />
       </div>
     </div>
    </div>
  );
}

export default App;
