import {
  InsideWrapper, BackImage, Header, InfoWrapper, Profile, 
  Name, CreatedAt, LikeWrapper, Thumbup, LikeNumber, 
} from './Post.styles'

export default function PostThumbnail(post) {

  return (
    <InsideWrapper>
      {post.map(el => el.image, el.writer, el.createdAt, el.likeCount, )}
      <BackImage alt="image" src="/" />
      <Header>{el.title}</Header>
      <InfoWrapper>
        <Profile alt="default profile" src="/defaultProfile.png" />
        <Name>{el.writer}</Name>
        <CreatedAt>{el.createdAt}</CreatedAt>
      </InfoWrapper>
      <LikeWrapper>
        <Thumbup alt="like" src="/thumbUp.png" />
        <LikeNumber>{el.likeCount}</LikeNumber>
      </LikeWrapper>
    </InsideWrapper>
  )
}