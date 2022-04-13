import React, { useState } from 'react'

export default function DropDownList() {
    var fruits = ['Grape','Apple','Coconut','Pineapple','Mango','Orange'];
    var vegetables = ['Tomato','Cucumber','Eggplant','Pepper','Potato','Yam'];
    var meat = ['Chicken','Beef','Mutton','Wing','Roast','Lamb'];
    var bakery = ['Bread','White Bread','Cream Roll','Pita Bread','Bun','Bagel'];

    const [food,setFood] = useState();
    const selectItem = (e) => {
          if(food == 'fruits') {
            setFood(fruits);
          }
          if(food == 'vegetables') {
            setFood(vegetables);
          }
          if(food == 'meat') {
            setFood(meat);
          }
          if(food == 'bakery') {
            setFood(bakery);
          }
    }
    const display = x => {
      return x + " " ;
    }
    // const selectItem = (e) => {
    //   setFood([e]);
    // }
    
  return (
    <div className='container align-center'>
        <label htmlFor="list">Food</label><br />
        {/* <select value={food} onSelect= {e=>setFood(e.target.value)}> */}
        <select>
            <option onSelect={() => selectItem('fruits')}>Fruits</option>
            <option onSelect={() => selectItem('vegetables')}>Vegetables</option>
            <option onSelect={() => selectItem('meat')}>Meat</option>
            <option onSelect={() => selectItem('bakery')}>Bakery</option>
        </select>
        
      <h1>{food}</h1>
    </div>
   
  )
}
