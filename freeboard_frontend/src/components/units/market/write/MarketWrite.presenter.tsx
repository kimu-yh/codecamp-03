import { S } from './MarketWrite.styles'
import LineInput01 from '../../../commons/lineInput/LineInput01'
import LineInput02 from '../../../commons/lineInput/LineInput02'
import ImageUpload from '../../../commons/imageUpload/imageUpload.container'
import TextBox from '../../../commons/textBox'
import SubmitButton from  '../../../Button/SubmitButton'
import RadioButton from '../../../Button/RadioButton'

export default function MarketWriteUI(props) {

  return (
    <S.Form
     onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Title>상품 등록하기</S.Title>
      <LineInput01 name="상품명" register={props.register("name")} />
      <LineInput01 name="한줄요약" register={props.register("remarks")} />
      <TextBox name="상품설명" register={props.register("contents")} />
      <LineInput01 name="판매 가격" register={props.register("price")} />
      <LineInput01 name="태그" onChange={props.onChangeTags} />
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
          <S.ImageWrapper>
            <ImageUpload />
          </S.ImageWrapper>
        </S.PhotoWrapper>
        <S.RadioButtonWrapper>
          <RadioButton 
            label="메인 사진 설정" 
            one="사진1" 
            two="사진2" 
          />
        </S.RadioButtonWrapper>
        <SubmitButton 
          name="등록하기"
          type="submit"
          isValid={props.formState.isValid}
        />
    </S.Form>
  )
}