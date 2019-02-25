import * as types from './actionTypes';
import axios from '../axios';
import { fromJS } from 'immutable'

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

const handleInputGetArticleList = (list) => {
  return {
    type: types.HANDLE_INPUT_GET_ARTICLELIST,
    list: fromJS(list)
  }
}

export const getArticleList = (data) => {
  return dispatch => {
    axios.get('/mock/5c7399520cf5d2150d52cc1d/api.myblog.com/getArticleList', {
      params: {
        value: data
      }
    }).then(({ data: { data } }) => {
      let { list, success, msg } = data;
      if (success) {
        dispatch(handleInputGetArticleList(list));
      } else {
        alert(msg)
      }
    }).catch(error => {
      console.log(error)
    })
  }
}