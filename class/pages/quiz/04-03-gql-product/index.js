import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct (
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
      createProduct(
        seller: $seller,
        createProductInput: $createProductInput
      ) {
        _id
        number
        message
      }
    }
`

export default function QuizGqlProduct() {
  const [ createProduct ] = useMutation(CREATE_PRODUCT)
  const [ seller, setSeller ] = useState('')
  const [ product, setProduct ] = useState('')
  const [ productDetail, setProductDetail ] = useState('')
  const [ productPrice, setProductPrice ] = useState('')

  const onChangeSeller = e => setSeller(e.target.value)
  const onChangeProduct = e => setProduct(e.target.value)
  const onChangeProductDetail = e => setProductDetail(e.target.value)
  const onChangeProductPrice = e => setProductPrice(e.target.value)
  
  async function onClickSubmit () {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: product,
          detail: productDetail,
          price: Number(productPrice)
        }
      }
    })
    console.log(result.data.createProduct._id)
  }

  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} /><br />
      상품명: <input type="text" onChange={onChangeProduct} /><br />
      상품상세: <input type="text" onChange={onChangeProductDetail} /><br />
      상품가격: <input type="text" onChange={onChangeProductPrice} /><br />
      <button onClick={onClickSubmit}>상품 등록</button>
    </div>
  )
}