// const { useEffect, useState } = require("react");
import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import TestStats from "./TestStats";
export const Dashboard = () => {
  const [state, setState] = useState({
    labels: ["Incorrectas", "Correctas"],
    datasets: [
      {
        label: "Respuestas",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [5, 10, 3],
      },
    ],
  });

  return (
    <div>
      <Container maxWidth="lg">
        <Container maxWidth="sm">
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Numero de Respues Correctas y Incorrectas",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </Container>
        <TestStats />
      </Container>
    </div>
  );
};
