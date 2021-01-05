import { map } from 'lodash';
import { fork } from 'redux-saga/effects';
import { IModule } from '../interfaces/IModule';
import modules from '../modules';

function* rootSaga() {
  yield map(modules, (module: IModule) => fork(module.saga));
}

export default rootSaga;
