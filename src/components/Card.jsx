import React from 'react';
import "./Card.scss";
import { ArrowRightAlt } from '@mui/icons-material';



function Card() {
  return (
    <main>
      <div className="card">
        <img src="https://i.pinimg.com/736x/a7/37/c7/a737c7f44673f99bfa37fd9e92eedc6e.jpg" alt="" />
        <div className="card-content">
          <h2>
            SANGOKU
          </h2>
          <p>
          Son Goku est un Saiyan puissant connu pour sa personnalité joyeuse et son amour du combat. Il cherche constamment à devenir plus fort et à protéger ses proches. Il développe des techniques de combat redoutables comme le Kamehameha.
          </p>
          <a href="#" className="button">
            En savoir plus
            <span className="material-symbols-outlined">
            <ArrowRightAlt />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Card;
