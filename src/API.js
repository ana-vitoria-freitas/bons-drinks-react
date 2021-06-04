import React from 'react'

const Drinks = ({ drinks }) => {
    console.log(drinks);
    return (
      <div>
        <center><h1>Drinks List</h1></center>
        {drinks.map((drink) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{drink.strDrink}</h5>
            </div>
          </div>
        ))}
      </div>
    )
};

export default Drinks;
