import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { SvgIcon } from "@material-ui/core";
import img from "../static/images/1.jpg";
import svg from "../static/icons/1.png";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#fffff",
    },
    mainPaper: {
      width: "65vh",
      height: "100vh",
      backgroundColor: "#131c21",
    },
    header: {
      backgroundColor: "#313538",
      display: "flex",
      alignItems: "center",
      borderRadius: "0",
      height: "60px",
    },
    headerTray: {
      alignItems: "center",
    },
    avatar: {
      marginLeft: "15px",
    },
    iconTray: {
      dispaly: "flex",
      alignItems: "center",
    },
    icon: {
      color: "#b7b4aa",
    },
    chatTitle: {
      backgroundColor: "#131c21",
      borderRadius: "0",
    },
    search: {
      paddingTop: "7px",
      paddingLeft: "12px",
      paddingRight: "12px",
    },
    searchBox: {
      backgroundColor: "#313538",
      borderRadius: "15px",
      height: "35px",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
    },
    searchIcon: {
      marginLeft: "12px",
      color: "#99927b",
    },
    input: {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      marginLeft: "30px",
      color: "#fff",
    },
  })
);

// function StatusIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d={DonutLargeIcon} />
//     </SvgIcon>
//   );
// }

export function LeftSession() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.mainPaper}>
          <div className={classes.header}>
            <Grid container className={classes.headerTray}>
              <Grid item xs={7}>
                <div className={classes.avatar}>
                  <Avatar alt="Akash" src={img} />
                </div>
              </Grid>
              <Grid item xs={5} className={classes.iconTray}>
                <Grid container>
                  <Grid items xs={4}>
                    <DonutLargeIcon
                      fontSize="medium"
                      className={classes.icon}
                    />
                  </Grid>
                  <Grid items xs={4}>
                    <ChatIcon fontSize="medium" className={classes.icon} />
                  </Grid>
                  <Grid items xs={4}>
                    <MoreVertIcon className={classes.icon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.chatTitle}>
            <div className={classes.search}>
              <div className={classes.searchBox}>
                <SearchIcon className={classes.searchIcon} fontSize="small" />
                <input
                  type="input"
                  placeholder="Search or start new chat"
                  className={classes.input}
                ></input>
              </div>
            </div>
          </div>
          <div style={{ color: "#fffff" }}></div>
        </div>
      </div>
    </div>
  );
}
