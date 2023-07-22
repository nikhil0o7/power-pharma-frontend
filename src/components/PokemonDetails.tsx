import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@npm/grnoc-ui-button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from "@npm/grnoc-ui-hooks";
import { css } from "@emotion/css";
interface Pokemon {
  name: string;
  url: string;
  sprites:Object;
}

function PokemonDetails() {
  const { name } = useParams();
  const theme = useTheme();
  const styles = getStyles();


  const singlePokemon = useQuery(["singlePokemon",name], async ()=>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json()
    return data;
  });

  return (
    <>
    <div className={styles.buttonStyle}>
   <Link  to={`/app/pokemon`}>Back</Link>
   </div>
    <div className={styles.divRowStyle}>
       {singlePokemon.isSuccess?(
        <div>
             <h1 className={styles.headingStyle}>{name}</h1>
      <img className={styles.imgStyle} src={singlePokemon.data.sprites?.front_default} alt={singlePokemon.data.name} />
        </div> ): (
          <div>
            Loading...
          </div>
        ) }
   
    </div>
    </>
  );
}

export default PokemonDetails;

const getStyles = () => {
  return{
    divRowStyle: css`
   
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      width:100vh;
      margin-left:300px;
    `,
    imgStyle:css`
    height:300px;
    width:300px;
    align-items:center;
    `,
    buttonStyle:css`
    display:flex;
    margin-top:30px;
    margin-left:30px;
    `,
    headingStyle:css`
    text-align:center;
    `
  };
}