import * as types from './actionTypes';
import axios from '../axios';

export const handleInputChange = (val) => {
  return {
    type: types.HANDLE_INPUT_CHANGE,
    val
  }
}

export const handleInputFocus = () => {
  return {
    type: types.HANDLE_INPUT_FOCUS
  }
}

export const handleInputBlur = () => {
  return {
    type: types.HANDLE_INPUT_BLUR
  }
}

// const handleInputGetArticleList = () => {
//   return {
//     type: types.HANDLE_INPUT_GET_ARTICLELIST
//   }
// }

export const getArticleList = (data) => {
  console.log(data)
  return dispatch => {
    axios.get('/mock/5c7399520cf5d2150d52cc1d/api.myblog.com', {
      params: {
        value: data
      }
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}