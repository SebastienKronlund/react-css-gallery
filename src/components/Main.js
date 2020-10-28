import React, { useState }from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';

const Main = ({stateIndex}) => {

  const [allData, setAllData] = useState();

  const Images = ({ allData }) => {
    if(allData) {

      const arr = []

      for(let i = stateIndex - 5; i <= stateIndex; i++){
        arr.push(<ImageCard key={i} src={allData[i-1].urls.regular} />)
      }

      return (
        <div id="image-gallery" className="image-gallery">
          {arr}
        </div>
      );
    }
    return null
  }

  return (
    <main>
      <SearchBar setAllData={setAllData} />
      <Images allData={allData} />
    </main>
  );
}

export default Main;
