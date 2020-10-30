import React from 'react';
import SearchBar from './SearchBar';
import ImageCard from './ImageCard';

const Main = ({ stateIndex, allData, setAllData }) => {

  const Images = () => {
    if(allData && !allData.errors) {

      const arr = []

      for(let i = stateIndex - 5; i <= stateIndex; i++){
        arr.push(<ImageCard key={i} id={"image-" + i} src={allData[i-1].urls.regular} description={allData[i-1].alt_description} />)
      }

      return (
        <div id="image-gallery" className="image-gallery">
          {arr}
        </div>
      );
    }
    else if(allData && allData.errors) {
      return (
        <h4 className="error-header">Skooma ... Khajiit can't find image for this 😿 </h4>
      )
    }
    return null;
  }

  return (
    <main>
      <SearchBar setAllData={setAllData} />
      <Images />
    </main>
  );
}

export default Main;
