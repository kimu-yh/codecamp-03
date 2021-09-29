import styled from "@emotion/styled";
import ReactPlayer from 'react-player'
import { Tooltip } from 'antd'
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;


export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`

export const Youtube = styled(ReactPlayer)`
  margin: auto;
`

export const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

export const LinkIcon = styled.img`
  margin-right: 10px;  
`

export const LocationIcon = styled.img`
  margin-left: 10px;
`

export const LikeIcon =  styled(LikeOutlined)`
  font-size: 24px;
  color: pink;
  margin: 0px 20px;
  cursor: pointer;
`
export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: skyblue;
  margin: 0px 20px;
  cursor: pointer;
`

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const LikeCount = styled.div`
  color: pink;
`

export const DislikeCount = styled.div`
  color: skyblue;
`

export const ShowAddress = styled(Tooltip)``

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
	align-items: center;
	justify-content: center;
`
export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
`
