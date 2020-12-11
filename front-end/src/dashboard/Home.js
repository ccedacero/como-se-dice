import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BarChart } from "./Dashboard";
import { MyPie } from "./MyPie";
import Grid from "@material-ui/core/Grid";
import TestStats from "./TestStats";
export const HomeLanding = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <BarChart />
          </Grid>
          <Grid item xs={6}>
            <MyPie />
          </Grid>
        </Grid>
        <TestStats />
      </Container>
    </div>
  );
};
