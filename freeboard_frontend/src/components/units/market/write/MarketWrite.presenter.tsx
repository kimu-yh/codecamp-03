import { S } from './MarketWrite.styles'
import LineInput01 from '../../../commons/lineInput/LineInput01'
import LineInput02 from '../../../commons/lineInput/LineInput02'
import ImageUpload from '../../../commons/imageUpload/imageUpload.container'
import TextBox from '../../../commons/textBox'
import SubmitButton from  '../../../Button/SubmitButton'
import RadioButton from '../../../Button/RadioButton'


export default function MarketWriteUI(props) {
  // console.log(props.formState.isValid)
  return (
    <S.Form onSubmit={props.handleSubmit(
      props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}>
      <S.Title>
        {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
      </S.Title>
      <LineInput01 name="상품명" register={props.register("name")} formState={props.formState.errors.name?.message} defaultValue={props.data?.fetchUseditem.name} />
      <LineInput01 name="한줄요약" register={props.register("remarks")} formState={props.formState.errors.remarks?.message} defaultValue={props.data?.fetchUseditem.remarks} />


      <TextBox name="상품설명" formState={props.formState.errors.contents?.message} onChange={props.onChangeMyEditor} 
      //  contents={props.data?.fetchUseditem.contents}
      // contents={props.data?.fetchUseditem?.contents}
      contents={props?.contents} // react-quill의 디폴트 밸류 넘기기
      />
      <LineInput01 name="판매 가격" register={props.register("price")} formState={props.formState.errors.price?.message}
      defaultValue={props.data?.fetchUseditem.price} />
      <LineInput01 name="태그" 
      register={props.register("tags")} formState={props.formState.errors.tags?.message}
      defaultValue={props.data?.fetchUseditem.tags?.join(' #')} />
      <S.LocationWrapper>
        <S.MapWrapper>
          <S.Label>거래위치</S.Label>
          <S.Map src="/images/mapImage.png"/>
        </S.MapWrapper>
        <S.LocationInfoWrapper>
          <S.Label>GPS</S.Label>
          <S.GpsWrapper>
            <S.Gps placeholder="위도(LAT)"></S.Gps>
            <S.LocationImage src="/images/location.png" />
            <S.Gps placeholder="경도(LAT)"></S.Gps>
          </S.GpsWrapper>
          <S.AddressWrapper>
            <S.Label>주소</S.Label>
            <LineInput02 />
            <LineInput02 />
          </S.AddressWrapper>
        </S.LocationInfoWrapper>
        </S.LocationWrapper>
        <S.PhotoWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.ImagesWrapper>
          { new Array(2).fill(1).map((el, index) => (
            <S.ImageWrapper key={`${el}_${index}`}>
              <ImageUpload 
                index={index}
                onChangeFiles={props.onChangeFiles}
                defaultFileUrl={props.data?.fetchUseditem.images}
              />
            </S.ImageWrapper>
            ))
          } 
        </S.ImagesWrapper>
        </S.PhotoWrapper>
        <S.RadioButtonWrapper>
          <RadioButton 
            label="메인 사진 설정" 
            one="사진1" 
            two="사진2" 
          />
        </S.RadioButtonWrapper>
        {props.isEdit 
        ? <SubmitButton 
          name="수정하기"
          type="submit"
          />
        :  <SubmitButton 
          name="등록하기"
          type="submit"
          isValid={props.formState.isValid}
          />
        }
    </S.Form>
  )
}