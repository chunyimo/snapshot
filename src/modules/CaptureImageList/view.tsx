import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  captureImageListBox: {},
});
export interface ICaptureImageList {}

const CaptureImageList: React.FC<ICaptureImageList> = (props) => {
  const classes = useStyles();
  return <div className={classes.captureImageListBox}>CaptureImageList</div>;
};
export default CaptureImageList;
