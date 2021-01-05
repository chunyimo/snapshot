import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import captureScreen from '../../../../utils/captureScreen';
import { ElectronIpcKeyEnum } from '../../../../interfaces/ElectronIpcKeyEnum';

const useStyles = makeStyles({
  toolBarBox: {},
  captureBtn: {
    marginRight: '4px',
  },
  newWindowBtn: {},
});
export interface IToolBar {}
const ToolBar: React.FC<IToolBar> = (props) => {
  const classes = useStyles();
  const handleCaptureClick = () => {
    captureScreen();
  };
  const handleNewWindowClick = () => {
    ipcRenderer.send(ElectronIpcKeyEnum.ADD_CAPTURE_WINDOW);
    window.open('https://github.com', '_blank', 'nodeIntegration=no');
  };
  return (
    <div className={classes.toolBarBox}>
      <Button
        onClick={handleCaptureClick}
        className={classes.captureBtn}
        size="small"
        variant="contained"
        color="primary"
      >
        Capture
      </Button>
      <Button
        size="small"
        onClick={handleNewWindowClick}
        variant="contained"
        color="secondary"
      >
        New Window
      </Button>
    </div>
  );
};

export default ToolBar;
