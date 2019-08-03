import React from "react";
import VideoTable from "./VideoTable";

function VideoList(props) {
  const { output } = props;
  console.log(output);
  return output ? (
    <VideoTable column={["Videos"]} rows={output.videos} />
  ) : null;
}

export default VideoList;
