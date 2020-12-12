import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BarChart } from "./Dashboard";
import { MyPie } from "./MyPie";
import Grid from "@material-ui/core/Grid";
import TestStats from "./TestStats";

export const HomeLanding = () => {
  const [state, setState] = useState({})
  useEffect(() => {
    const payLoad = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    fetch("http://localhost:3000/total", payLoad)
      .then((r) => r.json())
      .then((statsObj) => {
        setState(statsObj);
      });
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <BarChart stats={state} />
          </Grid>
          <Grid item xs={6}>
            <MyPie stats={state} />
          </Grid>
        </Grid>
        <TestStats stats={state} />
      </Container>
    </div>
  );
};
