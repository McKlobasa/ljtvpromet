import React, {useState} from 'react'
import useInterval from "./hooks/useInterval.js"
import OnAir from './OnAir.js'
import Selector from './Selector.js'
import './App.css'

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
  const [chosenImages, setChosenImages] = useState([null, null, null, null, null, null])
  const [onAir, setOnAir] = useState(false)

  const [imageData, setImageData] = useState({
    urls : imgSources,
    time : Date.now()
  })
  useInterval (() => setImageData({
    urls: imgSources,
    time: Date.now()
  }), 5000)

  const [imageSet, setImageSet] = useState(0)

  return (
    <div className="App">
          { onAir 
                  ? <OnAir locations={chosenImages.map((image, iter) => locations[image])} images={chosenImages.map((number, iter) => imgSources[number])} /> 
                  : <Selector  
                              images={imgSources} 
                              setChosenImages={setChosenImages}
                    />
          }
        <button onClick={() => setOnAir(!onAir)}>{ onAir ? 'pojdi na izbiro' : 'pojdi on air' }</button>
    </div>
  )
}

export default App;
