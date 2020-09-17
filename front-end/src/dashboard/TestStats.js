import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { payLoad } from "../constants/index";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function TestStats() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const columns = [
    { id: "name", label: "Categoria", minWidth: 170 },
    { id: "code", label: "Pregunta", minWidth: 100 },
    {
      id: "population",
      label: "#Incorrecto",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "inc_ans",
      label: "top inc choice#1",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },

    //   id: "size",
    //   // label: "#Correcto\u00a0(km\u00b2)",
    //   label: "#Correcto",
    //   minWidth: 170,
    //   align: "right",
    //   format: (value) => value.toLocaleString("en-US"),
    // },
    // {
    //   id: "density",
    //   label: "Promedio",
    //   minWidth: 170,
    //   align: "right",
    //   format: (value) => value.toFixed(2),
    // },
  ];

  function createData(name, code, population, inc_ans) {
    // const density = population ;
    return { name, code, population, inc_ans };
  }

  // let rows = [
  //   createData("India", "IN", 1324171354),
  //   createData("Hi", "yshi", 123),
  // ];

  useEffect(() => {
    fetch("http://localhost:3000/total", payLoad)
      .then((r) => r.json())
      .then((statsObj) => {
        let arr = [];
        statsObj.answer_stats.map((ans) => {
          arr.push(
            createData(
              ans.category,
              ans.question,
              ans.inc_answers_chosen.length,
              ans.inc_answers_chosen[0]
            )
          );
        });
        setRows(arr);
        console.log(statsObj);
      });
  }, []);
  // debugger;

  // const setStatValues = (stats) => {
  //   setState((prevState) => {
  //     return {
  //       ...prevState,
  //       labels: stats.week_activity.days,
  //       datasets: [
  //         {
  //           label: "Terms Studies last 7 Days",
  //           backgroundColor: "rgba(75,192,192,1)",
  //           borderColor: "rgba(0,0,0,1)",
  //           borderWidth: 2,
  //           data: stats.week_activity.values,
  //         },
  //       ],
  //     };
  //   });
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
