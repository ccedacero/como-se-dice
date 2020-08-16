// const { useEffect, useState } = require("react");
import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import TestStats from "./TestStats";
export const Dashboard = () => {
  const [state, setState] = useState({
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Respuestas",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [20, 30, 56, 30, 26, 55, 40],
      },
    ],
  });

  return (
    <div>
      <Container maxWidth="lg">
        <Container maxWidth="md">
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Numero de Terminos Estudiados - Ultimod 7 Dias",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
              scales: {
                xAxes: [
                  {
                    display: true,
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </Container>
        <TestStats />
      </Container>
    </div>
  );
};
