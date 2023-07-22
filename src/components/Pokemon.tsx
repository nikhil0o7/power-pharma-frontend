import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@npm/grnoc-ui-table";
import { Button } from "@npm/grnoc-ui-button";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { css, cx, keyframes } from "@emotion/css";
import { getThemeValue as themed } from "@npm/grnoc-ui-funcs";
import { useTheme } from "@npm/grnoc-ui-hooks";
import { ThemeState } from "@npm/grnoc-ui-theme";

interface Pokemon {
  name: string;
  url: string;
}

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const Pokemon = () => {
  const [page, setPage] = useState<number>(1);
  const theme = useTheme();
  const styles = getStyles(theme);


  const pokemonQuery = useQuery(["pokemon", page], async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
      `${BASE_URL}?limit=10&offset=${(page - 1) * 10}`
    );
    const data = (await response.json()) as {
      results: Pokemon[];
    };
    const pokemonData = data.results.map((pokemon) => ({
      name: pokemon.name,
      url: pokemon.url,
    }));

    return pokemonData;
  });

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };

  return (
    <>
      <div className={styles.divBGStyle}>
        <Link to={`/app/`}>Home Page </Link>
        <br></br>
        <Button onClick={handlePrevPage} variant="primary">
          Previous
        </Button>
        <Button onClick={handleNextPage}> Next</Button>
      </div>
      <h1>Pokemon List</h1>
      {pokemonQuery.isLoading && !pokemonQuery.data ? (
        <div>is Loading...</div>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Name</Th>
              <Th>Url</Th>
            </Tr>
          </Thead>

          <Tbody>
            {pokemonQuery.isSuccess
              ? pokemonQuery.data.map((pokemon, index) => (
                  <Tr key={index}>
                    <Td>{index + 1+ (page > 1 ? (page * 10) : 0)}</Td>
                    <Td>
                      {" "}
                      <Link to={`/app/pokemon/${pokemon.name}`}>
                        {pokemon.name}
                      </Link>
                    </Td>
                    <Td>{pokemon.url}</Td>
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default Pokemon;

const getStyles = (theme: ThemeState) => {
  return {
    divBGStyle: css`
      // background: ${themed("green", "hotpink")};
      // margin-top: ${themed("50px", "200px")};
    `,
  };
};