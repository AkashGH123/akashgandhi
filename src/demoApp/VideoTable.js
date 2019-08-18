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
import BarGraph from "./BarGraph";
import DataFrame, { Row } from "dataframe-js";
import history from "../history";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function VideoTable(props) {
  const classes = useStyles();
  const { column, rows } = props;
  const [open, setOpen] = useState(null);
  const [scroll, setScroll] = useState("paper");
  const [content, setContent] = useState();
  const [metadata, setMetadata] = useState();

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

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
    const comments_dict = {};
    let content = [];
    const p = await api.post("/comments", data);
    p.data.items.map((item, index) => {
      let name = item.snippet.topLevelComment.snippet.authorDisplayname;
      comments_dict[index] = item.snippet.topLevelComment.snippet.textOriginal;
    });

    Object.keys(comments_dict).map((key, index) => {
      content.push({ name: index, comment_length: comments_dict[key].length });
    });

    setContent(content);
    setOpen(true);
    //downloadObjectAsJson(p.data, "comments");
  }

  async function getMetadata(event) {
    event.preventDefault();
    const id = event.currentTarget.id;
    const data = { data: id };
    const comments_dict = {};
    const p = await api.post("/metadata", data);
    const duration = p.data.items[0].contentDetails.duration;
    const title = p.data.items[0].snippet.title;
    const stats = p.data.items[0].statistics;
    console.log(stats);
    history.push("/dashboard");
    // setContent(comments_dict);
    // setOpen(true);
    //downloadObjectAsJson(p.data, "comments");
  }

  async function getSentiments(event) {
    event.preventDefault();
    const sentiments_map = { Neutral: 0, Positive: 1, Negative: -1 };
    const id = event.currentTarget.id;
    const data = { data: id };
    const comments_dict = {};
    let content = [];
    const p = await api.post("/analyseSentiments", data);
    Object.keys(p.data).map(key => {
      if (p.data[key].length > 1) {
        let sum = 0;
        p.data[key].map(item => {
          sum = sum + sentiments_map[item];
        });
        switch (true) {
          case sum === 0:
            comments_dict[key] = "Neutral";
            break;
          case sum > 0:
            comments_dict[key] = "Positive";
            break;
          case sum < 0:
            comments_dict[key] = "Negative";
            break;
          default:
            comments_dict[key] = "Neutral";
            break;
        }
      } else {
        comments_dict[key] = p.data[key][0];
      }
    });

    //Write logic to display sentiments

    const df = new DataFrame(
      {
        key: Object.keys(comments_dict), // <------ A column
        sentiments: Object.values(comments_dict)
      },
      ["key", "sentiments"]
    );

    const results = df
      .groupBy("sentiments")
      .aggregate(group => group.count())
      .rename("aggregation", "groupCount")
      .toDict();
    for (let i = 0; i < results.sentiments.length; i++) {
      content.push({
        sentiment: results.sentiments[i],
        count: results.groupCount[i]
      });
    }
    setContent(content);
    setOpen(true);
    //downloadObjectAsJson(p.data, "comments");
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
              <TableCell size="small">
                {"https://www.youtube.com/watch?v=" + row}
              </TableCell>
              <TableCell size="small">
                {/* <Button
                  id={row}
                  onClick={getMetadata}
                  size="small"
                  color="primary"
                  variant="contained"
                > */}
                <Link
                  to={"/dashboard/" + row}
                  component={RouterLink}
                  target="_blank"
                  id={row}
                >
                  Video Dashboard
                </Link>
                {/* </Button> */}
              </TableCell>
              <TableCell size="small">
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
              <TableCell size="small">
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
              <TableCell>
                <Button
                  id={row}
                  onClick={getSentiments}
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Analyse
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BarGraph
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        scroll={scroll}
        content={content}
      />
    </Paper>
  );
}

export default VideoTable;
