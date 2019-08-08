import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import api from "../api/client";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function VideoTable(props) {
  const classes = useStyles();
  const { column, rows } = props;

  function downloadObjectAsJson(exportObj, exportName) {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".txt");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  async function getCaptions(event) {
    event.preventDefault();
    const id = event.currentTarget.id;
    const data = { data: id };
    const p = await api.post("/captions", data);
    downloadObjectAsJson(p.data, "captions");
  }

  async function getComments(event) {
    event.preventDefault();
    const id = event.currentTarget.id;
    const data = { data: id };
    const p = await api.post("/comments", data);
    downloadObjectAsJson(p.data, "comments");
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {column.map(item => {
              return <TableCell>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row} id={row}>
              <TableCell>{"https://www.youtube.com/watch?v=" + row}</TableCell>
              <TableCell>
                <Button
                  id={row}
                  onClick={getCaptions}
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Download
                </Button>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button
                  id={row}
                  onClick={getComments}
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Comments
                </Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default VideoTable;
