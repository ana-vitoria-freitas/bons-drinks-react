import style from './Home.module.css';
import React , {useState, useEffect} from 'react';
import Inicio from '../Inicio/Inicio';
import Footer from '../Footer/Footer';


const HomeDrinks = () => {
  const [drink, setDrink] = useState([]);
  useEffect(() =>{
    const fetchData = async () =>{
      await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then(data =>{
        setDrink(data.drinks[0]);
      })

    }
    fetchData();
  },[drink])


  return (<div >
  <Inicio props="1"/>
  <br/>
  <br/>
  <h1 className={style.titulo}>Our Drinks</h1>
  <br/>
  <br/>
  <br/>
  <div className={style.gridBebidas}>
      <div className="rowGrid">
        <img className={style.image}src={drink.strDrinkThumb} alt=""/>
        <br/>
      </div>
  </div>
  <Footer/>
  </div>);

}

//require é para coisas que estão na pasta local
export default HomeDrinks;