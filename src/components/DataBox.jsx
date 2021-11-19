import { Box } from "@mui/system";
import React from "react";

export default function DataBox({ meanings }) {
  return (
    <Box sx={{ mt: 4 }}>
      {meanings[0].phonetics[0].audio && (
        <Box>
          <audio src={meanings[0].phonetics[0].audio} controls></audio>
        </Box>
      )}
      <h3>Phonetic : </h3> {meanings[0].phonetic}
      <h3>word : </h3> {meanings[0].word}
      <h3>origin : </h3> {meanings[0].origin}
      <h2>meanings</h2>
      {meanings &&
        meanings[0].meanings &&
        meanings[0].meanings.map((meaning, i) => (
          <p key={i}>{meaning.definitions[0].definition}</p>
        ))}
    </Box>
  );
}
