import { useEffect, useState } from 'react';

import Card from '../components/card';
import { useSelector } from 'react-redux';

function FavoriteCollection() {
  const [allData, setAllData] = useState([]);
  const favDataLength = useSelector((state) => state.favDataLength);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      data.push(JSON.parse(value));
    }
    setAllData(data);
  }, [favDataLength]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      {allData.map((item, index) => <Card data={item} key={index} />
      )}
    </div>
  );
}

export default FavoriteCollection;