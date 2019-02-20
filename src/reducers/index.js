import axios from 'axios'
import { Object } from 'es6-shim'
const url = 'http://172.104.142.224/articles.php'
const LOAD_DATA = 'LOAD_DATA'
const OPEN_MODAL = 'OPEN_MODAL'

export const openModal = (isOpen) => {
  return {
    isOpen: !isOpen,
    type: OPEN_MODAL
  }
}

export const loadingData = () => {
  return dispatch => {
    axios.get(url).then((res) => {
      const data = Reflect.get(res, 'data')
      if (data.length > 0) {
        dispatch({
          data,
          type: LOAD_DATA
        })
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}

const initialState = {
  data: [],
  isOpen: false
}

export default function loadReducer (state = initialState, action) {
  const { type, data, isOpen } = action
  switch (type) {
    case LOAD_DATA: {
      const newData = state.data.concat(data)
      return Object.assign({}, state, { data: newData })
    }
    case OPEN_MODAL: {
      return Object.assign({}, state, { isOpen })
    }
    default:
      return state
  }
}
