import { Circle } from "better-react-spinkit";
import { Backdrop } from "@material-ui/core";

function Loading() {
  return (
    <div>
      <center>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            alt=""
            style={{ marginBottom: 10 }}
            height={200}
          />
          <Circle color="#3CBC28" size={60} />
        </div>
      </center>
    </div>
  );
}

export default Loading;
