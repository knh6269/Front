import React, { useState, useEffect } from 'react'
const APP_KEY = 'eaeeee414a3dfd48ad9a03586fc868db'
const divBtnOpt = {
  width: '50px',
  height: '50px',
  position: 'fixed',
  top: '100px',
  zIndex: '10',
}

const App = () => {
  const [map, setMap] = useState(null)
  const [markerArr, setMarkerArr] = useState([])
  const [locationArr, setLocationArr] = useState([])

  const getLocation = async id => {
    const data = await fetch(`http://localhost:3000/data${id}.json`)
    const dataJSON = await data.json()
    setLocationArr(dataJSON.location)
  }

  const createMap = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
      const { kakao } = window
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap')
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        }
        const createdMap = new kakao.maps.Map(container, options)
        setMap(createdMap)
      })
    }
  }

//   const createMarker = () => {
//     const { kakao } = window
//     const tempArr = []
//     locationArr.forEach(e => {
//       tempArr.push(
//         new kakao.maps.Marker({
//           map: map,
//           position: new kakao.maps.LatLng(e.mapY, e.mapX),
//         })
//       )
//     })
//     setMarkerArr(tempArr)
//   }

//   const deleteMarker = () => markerArr.forEach(e => e.setMap(null))

//   useEffect(() => {
//     getLocation(1) // location 정보 fetch
//     createMap()
//   }, [])

//   // marker 생성 + 표시
//   useEffect(() => map && locationArr.length && createMarker(), [
//     map,
//     locationArr,
//   ])

//   return (
//     <div className="App">
//       <div
//         onClick={() => getLocation(2)}
//         style={{ ...divBtnOpt, backgroundColor: 'red', left: '100px' }}
//       />
//       <div
//         onClick={deleteMarker}
//         style={{ ...divBtnOpt, backgroundColor: 'blue', left: '150px' }}
//       />
//       <div id="Mymap" style={{ width: '100vw', height: '100vh' }}></div>
//     </div>
//   )
}

export default App