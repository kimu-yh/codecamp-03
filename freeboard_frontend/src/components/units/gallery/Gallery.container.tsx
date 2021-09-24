import axios from "axios";
import { useEffect, useState } from "react";


export default function Gallery() {

  const [gallery, setGallery] = useState({objectId: 1, url:`https://api.harvardartmuseums.org/object/'${this.objectId}'?apikey=f4f039f0-0f71-44bf-8c0c-e33b685c0962`})

  function onClickPrev() {
    setGallery.objectId( prev => {
      if (prev === 0) return;
      prev -= 1})
  }

  function onClickNext() {
    setGallery.objectId( prev => {
      if (prev === 50000) return;
      prev += 1})
  }

  useEffect(() => {
    async function getGallery() {
      const object = await axios.get("https://api.harvardartmuseums.org/object?apikey=f4f039f0-0f71-44bf-8c0c-e33b685c0962")
      
      setGallery(`https://api.harvardartmuseums.org/object/${gallery.objectId}?apikey=f4f039f0-0f71-44bf-8c0c-e33b685c0962`)
    }
    getGallery()
  }, [])

    //   url = 'https://api.harvardartmuseums.org/activity?type=studycenterviews&q=date:>2020&apikey=0000-0000-0000-000&size=100'
    // viewsCounter(url)

    // # Take the dictionary of recorded views and get the one with the most views
    // object_id = max(views, key=views.get)

    // # Return the number of times that object has been seen in 2020, convert to string
    // object_views = str(views[object_id])

    // # Fetch the information of that object
    // object_url = 'https://api.harvardartmuseums.org/object/' + object_id + '?apikey=0000-0000-0000-0000'
    // object_info = requests.get(object_url)

    // # Convert to JSON format
    // object_data = object_info.json()

    // # Get title and artist of object
    // object_title = object_data["title"]
    // object_artist = object_data["people"][0]["name"]

    // print('The object that has been viewed the most in 2020 is ' + object_title + ' by ' + object_artist + ' (' + object_id + ')' + ' at ' + object_views + ' views')



  return (
    <div>
     <img src={gallery} /><br />
     <button onClick={onClickPrev}>prev</button>
     <button onClick={onClickNext}>next</button>
    </div>
  )
}