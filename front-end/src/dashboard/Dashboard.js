// const { useEffect, useState } = require("react");
import { Bar } from "react-chartjs-2";
import { MyPie } from "./MyPie";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import TestStats from "./TestStats";
import { payLoad } from "../constants/index";
export const BarChart = () => {
  const [state, setState] = useState({
    labels: [],
    datasets: [
      {
        label: "Terms Studies last 7 Days",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [],
      },
    ],
  });

  useEffect(() => {
    console.log(payLoad);
    if (payLoad.token !== "Bearer undefined") {
      fetch("http://localhost:3000/total", payLoad)
        .then((r) => r.json())
        .then((statsObj) => {
          setStatValues(statsObj);
        });
    }
  }, [localStorage.token]);
  const setStatValues = (stats) => {
    if (stats.week_activity !== undefined) {
      setState((prevState) => {
        return {
          ...prevState,
          labels: stats.week_activity.days,
          datasets: [
            {
              label: "Terms Studies last 7 Days",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: stats.week_activity.values,
            },
          ],
        };
      });
    }
  };
  return (
    <div>
      <Container maxWidth="md">
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Numero de Terminos Estudiados - Ultimos 7 Dias",
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
      {/* <TestStats /> */}
    </div>
  );
};
