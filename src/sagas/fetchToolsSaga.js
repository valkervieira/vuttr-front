import { put, call, takeEvery } from "redux-saga/effects";
import { getTools } from "../api";
import { actionTypes } from "../constants";

function* fetchTools() {
  try {
    const tools = yield call(getTools);
    yield put({ type: actionTypes.FETCH_TOOLS_SUCCEED, tools: tools });
  } catch (error) {
    yield put({ type: actionTypes.FETCH_TOOLS_FAILED, message: error.message });
  }
}

export function* fetchToolsSaga() {
  yield takeEvery(actionTypes.GET_TOOLS, fetchTools);
}