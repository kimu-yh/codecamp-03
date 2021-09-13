import ReactPlayer from 'react-player'
import styled from '@emotion/styled'

const MyYoutube = styled(ReactPlayer)`
  border: 3px solid yellow;
  /* width: 100px;
  height: 100px; */
  /* background-size: 200px 200px; */
`

export default function LibraryYoutubePage() {

  return (
    <MyYoutube 
    width={500}
    height={500}
    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

  )
}