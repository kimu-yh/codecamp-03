import {
  AddressModal,
  AddressSearch,
  Error,
  Address,
  ButtonWrapper,
  Contents,
  ImageWrapper,
  InputWrapper,
  Label,
  OptionWrapper,
  Password,
  RadioButton,
  RadioLabel,
  SearchButton,
  Subject,
  SubmitButton,
  Title,
  Wrapper,
  Writer,
  WriterWrapper,
  Youtube,
  Zipcode,
  ZipcodeWrapper,
  UploadButton
} from "./BoardWrite.styles";

// interface IProps {
//   isEdit: boolean,
//   isActive: boolean,
//   writerError: string,
//   passwordError: string,
//   titleError: string,
// }

export default function BoardWriteUI(props) {
  return (
  <>
    {props.isOpen && (
      <AddressModal visible={true} onCancel={props.onToggleZipcode} onOk={props.onToggleZipcode}>
        <AddressSearch onComplete={props.onCompleteAddressSearch}  />
      </AddressModal>
    )}
    <Wrapper>
        <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Error>{props.myError.writer}</Error>
            <Writer
              name="writer"
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeMyInputs}
              defaultValue={props.data?.fetchBoard.writer}
              readOnly={Boolean(props.data?.fetchboard?.writer)}
            />
            
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Error>{props.myError.password}</Error>
            <Password
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangeMyInputs}
            />
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Error>{props.myError.title}</Error>
          <Subject
            name="title"
            type="text"
            defaultValue={props.data?.fetchBoard.title}
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeMyInputs}
          />
         
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Error>{props.myError.contents}</Error>
          <Contents
            name="contents"
            defaultValue={props.data?.fetchBoard.contents}
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeMyInputs}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              name="zipcode"
              placeholder="07250"
              readOnly
              value={
                props.boardAddress.zipcode || props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <SearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address 
            readOnly 
            value={
              props.boardAddress.address || props.data?.fetchBoard.boardAddress?.address
              } />
          <Address 
            name="addressDetail"
            onChange={props.onChangeAddressDetail} 
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail} 
          />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Error>{props.myError.youtubeUrl}</Error>
          <Youtube
            name="youtubeUrl"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeMyInputs}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            {/* <input
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
            /> */}
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
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
        {!props.isEdit && (
          <SubmitButton 
            onClick={props.onClickSubmit} 
            isActive={props.isActive} 
            disabled={!props.isActive}>
            등록하기
          </SubmitButton>
        )}
        {props.isEdit && (
          <SubmitButton
            onClick={props.onClickUpdate}
            isActive={true}>
          수정하기</SubmitButton>
        )}
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
