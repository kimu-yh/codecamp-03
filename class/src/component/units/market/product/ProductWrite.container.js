import ProductRegisterUI from "./ProductWrite.presenter"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries"

export default function ProductRegister(props) {
  const router = useRouter()
  const [createProduct]= useMutation(CREATE_PRODUCT)
  const [updateProduct]= useMutation(UPDATE_PRODUCT)
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
      router.push(`/quiz/08-02-product-detail/${result.data.createProduct._id}`)

    } catch(error) {
      console.log(error)
    }
  }

  async function onClickEdit() {
    try{
      await updateProduct({
        variables: {
          productId: router.query.id,
          updateProductInput: {
            name: name, 
            detail: detail,
            price: Number(price)
          }
        }
      })
      router.push(`/quiz/08-02-product-detail/${router.query.id}`)
    } catch(error) {
      console.log(error)
    }
  }
  
  return <ProductRegisterUI 
    onChangeSeller={onChangeSeller}
    onChangeName={onChangeName}
    onChangeDetail={onChangeDetail}
    onChangePrice={onChangePrice}
    onClickSubmit={onClickSubmit}
    onClickEdit={onClickEdit}
    isEdit={props.isEdit}
   />
}