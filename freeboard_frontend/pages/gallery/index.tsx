import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 30px;
  margin: 20px auto;
  font-size: 30px;
  font-family: "gamja";
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Menu = styled.span`
  margin: 20px;
  cursor: pointer;
  color: #2a5004;
`
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function OpenapiWithUseEffectPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [objectId, setObjectId] = useState("201086")

  function onClickPrev() {
    setObjectId( prev => {
      if (prev === '0') return;
      prev = Number(prev) - 1;
      return String(prev)
    })
      
  }

  function onClickNext() {
    setObjectId( prev => {
      if (prev === '60000') return;
      prev = Number(prev) + 1;
      return String(prev)
    })
     
  }

  useEffect(() => {
    async function getImage() {
      const result = await axios.get(
        `https://api.harvardartmuseums.org/object/${objectId}?apikey=f4f039f0-0f71-44bf-8c0c-e33b685c0962`
      );
      setImageUrl(result.data.images[0].baseimageurl);
    }
    getImage();
  }, [objectId]);

  return (
    <Wrapper>
      <Menu onClick={onClickPrev}>이전</Menu>
      <ImageWrapper>
        <Menu>Havard Art Museum에 소장된 작품입니다</Menu>
        <img src={imageUrl} width={"700px"} />
      </ImageWrapper>
      <Menu onClick={onClickNext}>다음</Menu>
    </Wrapper>
  )
}