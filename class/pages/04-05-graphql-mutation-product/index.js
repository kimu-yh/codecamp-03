import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql` 
  mutation createProduct(
    $seller: String, 
    $createProductInput: CreateProductInput!
    ) {
    createProduct(
      seller: $seller, 
      createProductInput: $createProductInput
      ){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationProductPage() {
  const [ createProduct ] = useMutation(CREATE_PRODUCT) 
  const [ myseller, setMySeller ] = useState('')
  const [ productName, setProductName ] = useState('')
  const [ productDetail, setProductDetail ] = useState('')
  const [ productPrice, setProductPrice ] = useState('')
  
  function onChangeMySeller(e) {
    setMySeller(e.target.value)
  }
 
  function onChangeProductName(e) {
    setProductName(e.target.value)
  }

  function onChangeProductDetail(e) {
    setProductDetail(e.target.value)
  }

  function onChangeProductPrice(e) {
    setProductPrice(e.target.value)
  }

  async function onClickSubmit() {
    const result = await createProduct({
      variables: {
        seller: myseller,
        createProductInput: {
          name: productName,
          detail: productDetail,
          price: Number(productPrice)
        }
      }
    }) 
    console.log(result.data.createProduct._id)
  }

  return (
    <div>
      판매자: <input type="text" onChange={onChangeMySeller} /><br />
      상품명: <input type="text" onChange={onChangeProductName} /><br />
      상품상세: <input type="text" onChange={onChangeProductDetail} /><br />
      상품가격: <input type="text" onChange={onChangeProductPrice} /><br />
      <button onClick={onClickSubmit}>상품 등록하기!!!</button>
    </div>
  )
}