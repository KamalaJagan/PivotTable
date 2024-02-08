import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CharacterListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CharacterCard = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  p {
    margin: 5px 0;
  }
`;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <CharacterListContainer>
      <h2>Character List</h2>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {characters.map((character) => (
          <CharacterCard key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </CharacterCard>
        ))}
      </ul>
    </CharacterListContainer>
  );
};

export default CharacterList;
