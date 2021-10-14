import styled from '@emotion/styled'

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const CircleImage = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow:  8px 8px 15px #c7c7c7,
              -8px -8px 15px #ffffff;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Writer = styled.div``
const CreatedAt = styled.div``

export default function AvatarComponent({user, writer, date}) {

  return (
    <AvatarWrapper>
    <CircleImage src={user ? `https://storage.googleapis.com/${user}` : "/images/avatar.png"} />
    <Info>
      <Writer>{writer}</Writer>
      <CreatedAt>{date?.slice(0, 10)}</CreatedAt>
    </Info>
  </AvatarWrapper>
  )
}