import { takeEvery, put} from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators';
// import store from './store';

function* getInitList(){
  try {
    const res = yield axios.get('./list.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log('list.json network error');
  }

// yield axios.get('/list.json').then((res) => {
    // const data = res.data;
    // const action = initListAction(data)
    // put(action);
    // store.dispatch(action);
  // })
}
//generator function
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
