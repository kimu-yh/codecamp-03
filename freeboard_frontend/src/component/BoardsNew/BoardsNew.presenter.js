import { 
  Wrapper, Title, WriteWrapper, Writer, Label, InputWrapper, Subject, Contents, Password,
  ZipcodeWrapper, Zipcode, SearchButton, Address, Youtube, ImageWrapper, UploadButton,
  OptionWrapper, RadioButton, RadioLabel, ButtonWrapper, CancelButton, SubmitButton, ErrorMessage
} from './BoardsNew.styles'

export default function BoardsNewUI(props){
return (
  <Wrapper>
    <Title>게시물 등록</Title>
    <WriteWrapper>
      <InputWrapper>
        <Label>작성자</Label>
        <Writer name="writer" type="text" placeholder="이름을 적어주세요." onChange={props.onChangeWriter} />
        <ErrorMessage>{props.writerError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호</Label>
        <Password name="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={props.onChangePw} />
        <ErrorMessage>{props.pwError}</ErrorMessage>
      </InputWrapper>
    </WriteWrapper>
    <InputWrapper>
      <Label>제목</Label>
      <Subject name="title" type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle} />
      <ErrorMessage>{props.titleError}</ErrorMessage>
    </InputWrapper>
    <InputWrapper>
      <Label>내용</Label>
      <Contents name="contents" type="text" placeholder="내용을 작성해주세요." onChange={props.onChangeContents} />
      <ErrorMessage>{props.contentsError}</ErrorMessage>
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
        <SubmitButton onClick={props.onClickSubmit} isActive={props.isActive}>등록하기</SubmitButton>
      </ButtonWrapper>
    </ImageWrapper>
  </Wrapper>
  )
}