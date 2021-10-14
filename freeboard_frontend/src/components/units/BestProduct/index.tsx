import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 12px;
  width: 282px;
  height: 391px;
  padding: 20px;
  border: none;
	box-shadow: 0px 0px 10px gray;
  display: flex;
  flex-direction: column;
  position: relative;
`
const ProductImage = styled.img`
  width: 242px;
  height: 242px;
`
const ProductName = styled.div`
  margin-top: 20px;
  height: 27px;
`
const Remarks = styled.div`
  margin-top: 4px;
  height: 18px;
`
const Price = styled.div`
  margin-top: 12px;
  height: 28px;
`
const PickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 22px;
  height: 40px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`
const Pick = styled.img`
  height: 18px;
  width: 20px;
`
const PickCount = styled.div`
  height: 20px;
  width: 20px;
`
export default function BestProductComponent({bestImages, bestName, 
  bestRemarks, bestPrice, bestPickedCount, onClick}) {

  return (
    <Wrapper onClick={onClick}>
      <ProductImage src={`https://storage.googleapis.com/${{bestImages}}`} />
      <ProductName>{bestName}</ProductName>
      <Remarks>{bestRemarks}</Remarks>
      <Price>{bestPrice}</Price>
      <PickWrapper>
        <Pick src="/images/heartFull.png"/>
        <PickCount>{bestPickedCount}</PickCount>
      </PickWrapper>
    </Wrapper>
  )
}
