import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct (
    $seller: String, 
    $createProductInput: CreateProductInput!
    ) {
      createProduct(
      seller:$seller, 
      createProductInput:$createProductInput
      ) {
        _id
      }
    }
`

export default function ProductRegisterPage() {
  const router = useRouter()
  const [createProduct]= useMutation(CREATE_PRODUCT)

  const [seller, setSeller] = useState('')
  const [name, setName] = useState('')
  const [detail, setDetail] = useState('')
  const [price, setPrice] = useState('')

  const onChangeSeller = e => setSeller(e.target.value)
  const onChangeName = e => setName(e.target.value)
  const onChangeDetail = e => setDetail(e.target.value)
  const onChangePrice = e => setPrice(e.target.value)

  async function onClickSubmit() {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: { name: name, detail: detail, price: Number(price) }
        }
      })
      console.log(result.data.createProduct._id)
      router.push(`/quiz/05-02-product-detail/${result.data.createProduct._id}`)

    } catch(error) {
      console.log(error)
    }
  }
  
  return (
    <div>
      판매자: <input type="text" onChange={onChangeSeller} /><br />
      상품명: <input type="text" onChange={onChangeName} /><br />
      상품내용: <input type="text" onChange={onChangeDetail} /><br />
      상품가격: <input type="text" onChange={onChangePrice} /><br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  )
}