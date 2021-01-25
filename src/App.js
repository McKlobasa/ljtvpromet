import React, {useState} from 'react'
import './App.css'
import useInterval from "./hooks/useInterval.js"

/*

*/
function App() {
  const imgSources = [
    "http://www.drsc.si/kamere/KamSlike/Catez/Slike/Cat1_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/Koper2/Slike/Kpc2_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/JezerskoMP/Slike/Jmp1_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/Lendava/Slike/Len1_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/LjubeljT/Slike/Ljt1_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/Podcetrtek/Slike/Pdc1_0001.jpg",

    "https://promet.si/dc/agg.kamere.dars.images/kamere/msc2pics/Cam22_SPEED_IZHOD.jpg",
    "https://promet.si/dc/agg.kamere.dars.images/kamere/ljubljana/Kam20_pociva_Barje.jpg",
    "https://promet.si/dc/agg.kamere.dars.images/kamere/Golovec/K13_Zadobrova_Letaliska_5.jpg",
    "https://promet.si/dc/agg.kamere.dars.images/kamere/Golovec/K10_Golovec_Strmec.jpg",
    "https://promet.si/dc/agg.kamere.dars.images/kamere/Sentvid_Jug/cam9.jpg",
    "https://promet.si/dc/agg.kamere.dars.images/kamere/Sentvid_Jug/cam7.jpg",


    "http://www.drsc.si/kamere/KamSlike/BrezovicaAC/Slike/Bac1_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/Lavrica/Slike/Lav1_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/Medvode/Slike/Med1_0001.jpg",
    "https://promet.si/dc/agg.kamere.dars.images/kamere/Vrhnika/CP_Vrhnika_Panorama_izhod.JPG",
    "http://www.drsc.si/kamere/KamSlike/Skofljica2/Slike/Sko2_0001.jpg",
    "http://www.drsc.si/kamere/KamSlike/Trzin/Slike/Trz1_0001.jpg"
  ]
  const locations = [
    "ČATEŽ",
    "KOPER",
    "MEJNI PREHOD JEZERSKO",
    "LENDAVA",
    "LJUBELJ",
    "PODČETRTEK",
    
    "ŠENTVID",
    "POČIVALIŠČE BARJE",
    "ZADOBROVA",
    "GOLOVEC",
    "ŠENTVID",
    "ŠENTVID",

    "BREZOVICA",
    "LAVRICA",
    "MEDVODE",
    "VRHINKA",
    "ŠKOFLJICA",
    "TRZIN"
  ]
  const [imageData, setImageData] = useState({
    urls : imgSources,
    time : Date.now()
  })
  useInterval (() => setImageData({
    urls: imgSources,
    time: Date.now()
  }), 5000)
  console.log(imageData.urls)

  const [imageSet, setImageSet] = useState(0)

  return (
    <div className="App">
      <div id="aspect_ratio_container">
        <div id="main_container">
          <div class="image_container_0">
            <img alt="" class="image" src={`${imageData.urls[0 + 6 * imageSet]}?${Date.now()}`} />
          </div>
          <div class="image_container_1">
            <img alt="" class="image" src={`${imageData.urls[1 + 6 * imageSet]}?${Date.now()}`} />
          </div>
          <div class="image_container_2">
            <img alt="" class="image" src={`${imageData.urls[2 + 6 * imageSet]}?${Date.now()}`} />
          </div>
          <div class="image_container_3">
            <img alt="" class="image" src={`${imageData.urls[3 + 6 * imageSet]}?${Date.now()}`} />
          </div>
          <div class="image_container_4">
            <img alt="" class="image" src={`${imageData.urls[4 + 6 * imageSet]}?${Date.now()}`} />
          </div>
          <div class="image_container_5">
            <img alt="" class="image" src={`${imageData.urls[5 + 6 * imageSet]}?${Date.now()}`} />
          </div>
        </div>
      </div>
      <button onClick={() => { setImageSet(0) }}>Slovenia</button>
      <button onClick={() => { setImageSet(1) }}>okolica ljubljane</button>
      <button onClick={() => { setImageSet(2) }}>obvoznica</button>
    </div>
  )
}

export default App;
