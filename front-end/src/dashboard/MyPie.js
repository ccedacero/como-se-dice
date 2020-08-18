// const { useEffect, useState } = require("react");
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import TestStats from "./TestStats";
import { payLoad } from "../constants/index";
import { Pie, Doughnut } from "react-chartjs-2";

export const MyPie = () => {
  const [state, setState] = useState({
    labels: [
      // "Promedio de Pruebas",
      "# Preguntas Correctas",
      "# Preguntas Incorrectas",
    ],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    fetch("http://localhost:3000/total", payLoad)
      .then((r) => r.json())
      .then((statsObj) => {
        setState((prevState) => {
          return {
            ...prevState,
            datasets: [
              {
                label: "Resultados de Pruebas",
                backgroundColor: [
                  "#2FDE00",
                  // "#C9DE00",
                  "#B21F00",
                  "#00A6B4",
                  "#6800B4",
                ],
                hoverBackgroundColor: [
                  "#501800",
                  "#4B5000",
                  "#175000",
                  "#003350",
                  "#35014F",
                ],
                data: [
                  // statsObj.test_average,
                  statsObj.number_correct,
                  statsObj.number_incorrect,
                ],
              },
            ],
          };
        });
      });
  }, []);
  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Resultados de Pruebas",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
