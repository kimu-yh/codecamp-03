import styled from '@emotion/styled'
import { useEffect } from 'react'

const MapArea = styled.div`
  width: 100%;
  height: 100%;
`

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaomapPage(props) {
 
  useEffect(() => {

    const script = document.createElement("script")
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ee0ed600d899e6b821bf659ce1730f9a"
    document.head.appendChild(script)

    script.onload = () => {

      window.kakao.maps.load(function() {
        const container = document.getElementById('map'); 
        const options = { 
            center: new window.kakao.maps.LatLng(37.48540242910384, 126.89513825584741), 
            level: 3 
        };

        const map = new window.kakao.maps.Map(container, options); 
       

        const marker = new window.kakao.maps.Marker({ 
  
          position: map.getCenter() 
        }); 
        marker.setMap(map);
        window.kakao.maps.event.addListener(map, 'click', function(mouseEvent: {latLng: any}) {        
          const latlng = mouseEvent.latLng; 
          marker.setPosition(latlng);
          props.setValue("lat", latlng.getLat())
          props.setValue("lng", latlng.getLng())
      });
    })
    }
  }, [])



  return (
    <>
      <MapArea id="map"></MapArea>
    </>
  )
}