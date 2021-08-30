import { Wrapper, Title, SubTitle, Item, Input, Box, BoxWrap, RegisterBtn, Content, Postbox, PostboxSearch, Radio } from '../../../styles/Boardsnew'

export default function BoardsNewPage(){
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <Item>
        <SubTitle>제목</SubTitle>
        <Input type="text" placeholder="제목을 작성해주세요" />
      </Item>
      <Item>
        <SubTitle>내용</SubTitle>
        <Content>내용을 작성해주세요</Content>
      </Item>  
      <Item>
        <SubTitle>주소</SubTitle>
        <Postbox type="text" placeholder="07250"/>
        <PostboxSearch>우편번호 검색</PostboxSearch>
        <Input />
        <Input />
      </Item>  
      <Item>
        <SubTitle>유튜브</SubTitle>
        <Input type="text" placeholder="링크를 복사해주세요" />
      </Item>  
      <Item>
        <SubTitle>사진 첨부</SubTitle>
        <BoxWrap>
          <Box>+<br />
            Upload
          </Box>
          <Box>+<br />
            Upload
          </Box>
          <Box>+<br />
            Upload
          </Box>
        </BoxWrap>
      </Item>  
      <Item>
        <SubTitle>메인 설정</SubTitle>
        <Radio type="radio" name="main" value="youtube" checked="checked" />유튜브
        <Radio type="radio" name="main" value="photo" />사진
      </Item>
      <RegisterBtn>등록하기</RegisterBtn>
    </Wrapper>
    )
}