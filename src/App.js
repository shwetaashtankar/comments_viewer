
import React  from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import DisplayData from "./components/DisplayData";
import SearchBar from "./components/Searchbar";


function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Comments Viewer</Typography>
        </Toolbar>
      </AppBar>
      <SearchBar value={searchTerm} onChange={handleSearchTermChange} />
      <DisplayData searchTerm={searchTerm} />
    </Container>
  );
}

export default App;