import { combineReducers } from 'redux';
import { reduce } from 'lodash';
import modules from '../modules';
import { IModule } from '../interfaces/IModule';

export default combineReducers(
  reduce(
    modules,
    (acc: Record<string, any>, cur: IModule) => {
      acc[cur.moduleKey] = cur.reducer;
      return acc;
    },
    {}
  )
);
