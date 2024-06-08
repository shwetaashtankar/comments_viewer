import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, CircularProgress } from "@mui/material";

const DisplayData = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let res = await axios("https://jsonplaceholder.typicode.com/comments");
      let data = res.data;
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Grid container spacing={2}>
      {loading ? (
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      ) : (
        filteredData.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Typography variant="h6">Name: {item.name}</Typography>
            <Typography variant="body1">Email: {item.email}</Typography>
            <Typography variant="body1">Body: {item.body}</Typography>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default DisplayData;