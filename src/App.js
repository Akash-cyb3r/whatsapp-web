import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { LeftSession } from "./Components/LeftSession";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#262d31",
  },
});

function App(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <style>{"body { background-color: #262d31; }"}</style>
      </Helmet>
      <LeftSession />
    </div>
  );
}

export default App;
