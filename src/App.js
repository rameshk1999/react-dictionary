import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import categories from "./data/category";
import axios from "axios";
import DataBox from "./components/DataBox";
export default function App() {
  const [langauage, setLanguage] = React.useState("en");

  const [word, setWord] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [meanings, setMeanings] = useState();

  const handleChange = (event) => {
    setLanguage(event.target.value);
    console.log("lang", event.target.value);
  };

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${langauage}/${word}`
      );
      setMeanings(data.data);
      console.log("data", data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/${langauage}/${word}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setMeanings(res.data);
        }
      });
  }, [word, langauage]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          mt={2}
        >
          <TextField
            fullWidth
            label="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            variant="standard"
          />

          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={langauage}
              label="Language"
              variant="standard"
              onChange={handleChange}
            >
              {categories &&
                categories.length &&
                categories.map((category, i) => (
                  <MenuItem key={i} value={category.label}>
                    {category.value}
                  </MenuItem>
                ))}
            </Select>
          </FormControl> */}
        </Stack>

        {meanings && meanings.length ? <DataBox meanings={meanings} /> : ""}
      </Container>
    </div>
  );
}
