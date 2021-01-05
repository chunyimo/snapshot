import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolBar from '../components/ToolBar';

const useStyles = makeStyles({
  mainWindowBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  mainContent: {
    marginTop: '4px',
  },
  video: {
    width: '100%',
  },
  grabFrameCanvas: {
    width: '100%',
  },
});
export interface IMainWindow {}

const MainWindow = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWindowBox}>
      <ToolBar />
      <div className={classes.mainContent}>
        <canvas className={classes.grabFrameCanvas} id="grabFrameCanvas" />
      </div>
    </div>
  );
};

export default MainWindow;
