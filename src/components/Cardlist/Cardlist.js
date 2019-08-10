import React from 'react';
import './cardlist.css'
import CardComponent from '../Card/CardComponent';

export default function Cardlist({monsters}) {
    return (
        <div className="card-list">
  
        {monsters.map((monster)=>(
          <CardComponent key={monster.id} monster={monster}/>)
          )}      
        </div>
    )
}
