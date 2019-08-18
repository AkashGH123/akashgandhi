import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class CommentsChart extends PureComponent {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    const { data } = this.props;
    const datakey = data ? Object.keys(data[0]) : "comment_length";
    return (
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={datakey[0]} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={datakey[1]} fill="#2874A6" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}
