import axios from 'axios';

export const getData = (page) => async (dispatch) => {
  try {


    const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
    if (response.data.length === 0) {
      dispatch({ type: 'HasMoreDataExist', payload: false });
    }

    else {
      dispatch({ type: 'GetData', payload: { data: response.data, page: page } });
    }
  } catch (error) {
    console.error(error);

  }
};


// get Search Data
export const getSearchData = (searchArg, page) => async (dispatch) => {
  try {

  console.log('page here',page);
  console.log('arg here',searchArg);
    const response = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${searchArg}&page=${page}&per_page=10`);

    if (response.data.length === 0) {
      dispatch({ type: 'HasMoreDataExist', payload: false });
    }
 
    else {
      dispatch({ type: 'GetData', payload: { data: response.data, page: page } });

    

    }
  } catch (error) {
    console.error(error);

  }
};


