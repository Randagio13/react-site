import axios from 'axios'
const url = 'http://172.104.142.224/articles.php'
const LOAD_DATA = 'LOAD_DATA'

export const loadingData = () => {
  console.log('loadingData....')
  return dispatch => {
    axios.get(url).then((res) => {
      console.log(res)
      const data = Reflect.get(res, 'data')
      console.log(data)
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
  data: []
}

export default function loadReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        data: state.data.concat(action.data)
      }
    }
    default:
      return state
  }
}
