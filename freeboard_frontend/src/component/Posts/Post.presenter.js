import {
  Container, BestPostsWrapper, Title, 
  SearchWrapper, Icon, SearchDate, SearchButton, 
  Table, Row, Column, Page, UploadButton, 
} from './Post.styles'

import { PostThumbnail } from './PostThumbnail'

export default function PostPageUI(props) {

  return (
    
    <Container>
      <BestPostsWrapper>
        <Title>베스트 게시글</Title>
        <PostThumbnail 
          post={props.data}
        />
      </BestPostsWrapper>
      <SearchWrapper>
        <SearchTitle type="text" placeholder="제목을 검색해주세요" />
        <Icon alt="search" src="/search.png"></Icon>
        <SearchDate type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <SearchButton>검색하기</SearchButton>
      </SearchWrapper>
      <Table>
        {props.data?.fetchBoards.map((el, index) => 
          <Row key={el._id}>
            <Column>{index}</Column>
            <Column>{el.title}</Column>
            <Column>{el.writer}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        )}
        
      </Table>
      <Page>〈  1   2  〉</Page>
      <UploadButton>게시물 등록하기</UploadButton>
      <Icon alt="pen" src="/pen.png"></Icon>
    </Container>
  )
}