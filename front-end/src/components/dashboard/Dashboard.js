import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

export const BarChart = ({ stats: { week_activity } }) => {
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
    if (week_activity) {
      setStatValues(week_activity)
    }
  }, [week_activity]);

  const setStatValues = (week_activity) => {

    setState((prevState) => {
      return {
        ...prevState,
        labels: week_activity.days,
        datasets: [
          {
            label: "Terms Studies last 7 Days",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: week_activity.values,
          },
        ],
      };
    });
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
    </div>
  );
};
