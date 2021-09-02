import { 
  Wrapper, Title, WriteWrapper, Writer, Label, InputWrapper, Subject, Contents, Password,
  ZipcodeWrapper, Zipcode, SearchButton, Address, Youtube, ImageWrapper, UploadButton,
  OptionWrapper, RadioButton, RadioLabel, ButtonWrapper, CancelButton, SubmitButton, ErrorMessage
} from '../../../styles/Boardsnew'

import { useState } from "react";
import { useMutation, gql } from '@apollo/client';

const CREATE_BOARD = gql`
  mutation createBoard(
    $createBoardInput: CreateBoardInput!
    ){
      createBoard(
        createBoardInput: $createBoardInput
      ){
        _id
      }
    }
  `

export default function BoardsNewPage(){
  const [createBoard] = useMutation(CREATE_BOARD)
  const [writer, setWriter] = useState('');
  const [writerError, setWriterError] = useState('');
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState('');
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contents, setContents] = useState('');
  const [contentsError, setContentsError] = useState('');

  const onChangeWriter = e => setWriter(e.target.value)
  const onChangePw = e => setPw(e.target.value)
  const onChangeTitle = e => setTitle(e.target.value)
  const onChangeContents = e => setContents(e.target.value)
  
  async function onClickSubmit() {
    if (writer.length === 0) {
      setWriterError("작성자가 없습니다!")
    } else {
      setWriterError("")
    }
    if (pw.length === 0) {
      setPwError("비밀번호가 없습니다!")
    } else {
      setPwError("")
    }
    if (title.length === 0) {
      setTitleError("제목이 없습니다!")
    } else {
      setTitleError("")
    }
    if (contents.length === 0) {
      setContentsError("내용이 없습니다!")
    } else {
      setContentsError("")
    }
    if (writer !== '' && pw !== '' && title !== '' && contents !== '') {
      alert("게시물을 등록합니다.")
    }

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          password: pw,
          title: title, 
          contents: contents
        }
      }
    })
    console.log(result.data.createBoard._id)
  }
  

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriteWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer name="writer" type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
          <ErrorMessage>{writerError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password name="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePw} />
          <ErrorMessage>{pwError}</ErrorMessage>
        </InputWrapper>
      </WriteWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject name="title" type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
        <ErrorMessage>{titleError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents name="contents" type="text" placeholder="내용을 작성해주세요." onChange={onChangeContents} />
        <ErrorMessage>{contentsError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode name="zipcode" placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipcodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube name="youtube" placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>
          {/* <input type="file" style={{display: "none"}} ref={fileref} /> */}
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div>+</div>
          <div>Upload</div>
        </UploadButton>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <CancelButton>취소하기</CancelButton>
          <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
        </ButtonWrapper>
      </ImageWrapper>
    </Wrapper>
    )
}