import React, { useState } from 'react'
import Select from 'react-select';
export default function ItemList() {
    var food = [
        {
            value: 1,
            label: 'Fruits',
            items:  ['Grape','Apple','Coconut','Pineapple','Mango','Orange']

        },
        {
            value: 2,
            label: 'Vegetables',
            items:  ['Tomato','Cucumber','Eggplant','Pepper','Potato','Yam']
        },
        {
            value: 3,
            label: 'Meat',
            items:   ['Chicken','Beef','Mutton','Wing','Roast','Lamb']

        },
        {
            value: 4,
            label: 'Bakery',
            items: [' Bread ',' White Bread ',' Cream Roll ',' Pita Bread ',' Bun ',' Bagel ']

        },
       
        
    ];
    const [select,setFood] = useState(food.items);
    const displayItems = e => {
        
        setFood(e.items);
    }
  return (
    <div>
        <center>
        <Select options={food} onChange={displayItems} />
        <h1>{select}</h1>
        </center>
    </div>
  )
}
