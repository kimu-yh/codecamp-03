import { v4 as uuidv4 } from 'uuid';
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  Button,
  Page,
  SearchWrapper,
  SearchTitle,
  SearchIcon,
  MyWord,
  Challendar,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <SearchWrapper>
        <SearchTitle 
          name="title"
          placeholder="제목을 검색해주세요"
          onChange={props.onChangeSearch}
        />
        <SearchIcon />
        <Challendar 
         renderExtraFooter={() => 'extra footer'}
         name="date"
         onChange={props.onChangeDate} 
        />
        
      </SearchWrapper>

      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id} id={el._id} onClick={props.onClickMoveToBoardDetail}>
          <ColumnBasic>{10 - index}</ColumnBasic>
          <ColumnTitle>{el.title
            .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
            .split('#$%')
            .map(el => (
              <MyWord key={uuidv4()} isMatched={props.keyword === el}>
                {el}
              </MyWord>
            ))
          
          }</ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{el.createdAt.slice(0, 10)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
        <div>
          <span onClick={props.onClickPrevPage}>이전</span>
            { new Array(10).fill(1).map( (_, index) => (
              props.startPage + index <= props.lastPage &&
              <Page 
                key={props.startPage + index}
                id={String(props.startPage + index)}
                onClick={props.onClickPage}
              >
                {props.startPage + index}
              </Page>  
             ))}
           <span onClick={props.onClickNextPage}>다음</span>
        </div>
        <Button onClick={props.onClickMoveToBoardNew}>
          🖌 게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
