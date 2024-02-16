/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect } from 'react'
import Card from '../components/card'
import { useDispatch, useSelector } from 'react-redux';
import { getData, getSearchData } from '../action/actions';
import '../css/home.css';
import InfiniteScroll from 'react-infinite-scroll-component'
import loader from '../gif/loader.gif'

function home() {


  let data = useSelector((state) => state.data);
  let searchArg = useSelector((state) => state.searchArg);
  let hasMoreData = useSelector((state) => state.hasMoreData);
  let page = useSelector((state) => state.page);






  const dispatch = useDispatch();

  useEffect(() => {
    if (searchArg === '')
      dispatch({ type: 'IntializationData', payload: true });
  }, []);


  useEffect(() => {
    if (searchArg === '')
      dispatch(getData(page));

    else {
      dispatch(getSearchData(searchArg, page));
    }
  }, [page, searchArg]);





  return (

    <InfiniteScroll
      dataLength={data.length} // take actual data length .
      next={() => page}
      hasMore={data.length <= page * 10 ? false : hasMoreData}

      loader={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
        <img style={{ height: "3rem" }} src={loader} alt='loading...' />
      </div>}

      endMessage={
        <p style={{ textAlign: 'center', color: "skyblue" }}>
          {data.length ? <b>You have seen it all</b> : <></>}
        </p>
      }
      className='homeContainer'

    >



      {data.map((item, index) => <Card key={index} data={item} />)}


    </InfiniteScroll>
  );
}

export default home