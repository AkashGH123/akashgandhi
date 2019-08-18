import React from "react";
import VideoTable from "./VideoTable";

function VideoList(props) {
  const { output } = props;
  return output ? (
    <VideoTable
      column={[
        "Videos",
        "Dashboard",
        "Download Captions",
        //"Analyse Captions",
        "Comments",
        "Analyse Comments"
      ]}
      rows={output.videos}
    />
  ) : null;
}

export default VideoList;
