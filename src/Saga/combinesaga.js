import { all, takeLatest } from "redux-saga/effects";
import * as constant from "../redux/constant";
import { infoSaga } from "./infosaga";

function* watchAllSaga() {
  {
    yield takeLatest(constant.GET_USERS_REQUEST, infoSaga);
  }
}

export default watchAllSaga;
