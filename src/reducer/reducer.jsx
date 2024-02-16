
const intialize = {
  data: [],
  searchArg: '',
  page: 1,
  hasMoreData: true,
  favDataLength: 0,

}
export default function reducer(state = intialize, action) {
  switch (action.type) {
    case 'IntializationData': return {
      ...state,
      page: 1,
      searchArg: '',
      data: [],
      hasMoreData: true,
    }
    case 'HasMoreDataExist': return {
      ...state,
      searchArg: action.payload,
    }

    case 'IntializationSearchData': return {
      ...state,
      data: [],
      page: 1,
      hasMoreData: true,
      searchArg: action.payload,

    }

    case 'GetData': return {
      ...state,
      page: action.payload.page,
      data: [...state.data, ...action.payload.data],
    }

    case 'SetFavDataLength': return {
      ...state,
      favDataLength: action.payload,
    }

    default:
      return state;
  }
}