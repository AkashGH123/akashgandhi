import React from "react";

function VideoList(props) {
  const { output } = props;
  console.log(output);
  return output ? <div>My Table</div> : null;
}

export default VideoList;
