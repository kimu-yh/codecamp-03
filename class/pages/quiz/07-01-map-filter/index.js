import { useQuery, gql, useMutation } from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts{
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`
const Column = styled.div`
  width: 20%;
`

const Table = styled.div`
  width: 960px;
  border: 1px solid gray;
  margin: 100px auto;
  padding: 10px 20px;
`
export default function MapFilterPage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCTS)

  async function onClickDelete(event) {
    await deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }]
    })
  }

  return (
    <Table>
      {data?.fetchProducts.map(el => (
        <Row key={el._id}>
          <Column><input type="checkbox" /></Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column><button id={el._id} onClick={onClickDelete}>삭제하기</button></Column>
        </Row>
      ))}
    </Table>
  )
}