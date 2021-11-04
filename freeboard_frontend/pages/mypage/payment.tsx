import Head from "next/head"
import styled from "@emotion/styled"
import { useMutation } from "@apollo/client"
import { CREATE_POINT_TRANSACTION_OF_LOADING } from './mypage.queries'
import { useContext, useState } from "react"
import { Modal } from "antd"
import { GlobalContext } from '../_app';

declare const window: typeof globalThis & {
  IMP: any;
}

const Button = styled.button`
  margin-top: 30px;
  color: white;
  background-color: skyblue;
  border-radius: 20px;
  border: none;
  width: 200px;
  height: 52px;
  font-size: 20px;
  font-family: "gamja";
  font-weight: 700;
`

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
`
const Notice1 = styled.div`
  font-size: 20px;
  font-family: "gamja";
  color: skyblue;
`
const Notice = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-family: "gamja";
`
const Text = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  font-size: 18px;
  font-family: "gamja";
`

const InputAmount = styled.input`
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  border-bottom: 1px solid skyblue;
  text-align: center
`

export default function PaymentPage(props) {
  const { setUserInfo, userInfo } = useContext(GlobalContext)
  const [inputAmount, setInputAmount] = useState("")
  const [ createPointTransactionOfLoading ] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING)
  
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능         
    IMP.init("imp49910675"); 

    IMP.request_pay({ // param
      pg: "html5_inicis",
      pay_method: "card",
      name: `포인트 ${inputAmount}캔`,
      amount: inputAmount,
      buyer_email: props.data?.fetchUserLoggedIn.email,
      buyer_name: props.data?.fetchUserLoggedIn.name,
    }, 
    
    function (rsp: any) { // callback
    
      if (rsp.success) {
        try {
          createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            }, 
            update(cache, {data}) {
              cache.modify({
                fields: {
                  fetchUserLoggedIn: (prev) => {
                    return [data.createPointTransactionOfLoading, prev]
                  }
                }
              })
            }
          })
          setUserInfo({
          balance: props.data?.createPointTransactionOfLoading?.balance
          })
          Modal.confirm({content: `${inputAmount}캔 충전되었습니다!!`})
        } catch (error) {
          Modal.error({content: error.message})
        } 
      } else {
        return Modal.error({content: "결제가 성공하지 못했습니다"})
      }
    });
  }

  function onChangeAmount(e) {
    setInputAmount(e.target.value)
  }

  return (
    <>
    <Head>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
      <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
    </Head>

    <Wrapper>
      <Notice1>쉬는 시간 사이트에서 1캔은 1원입니다</Notice1>
      <Notice>{props.data?.fetchUserLoggedIn.name}님의 보유 포인트는 ${
              userInfo.balance || props.data?.fetchUserLoggedIn?.userPoint.amount
            }캔 입니다.</Notice>
      <Text>충전금액:
        <InputAmount type="text" onChange={onChangeAmount} />
       캔
      </Text>
      <Button onClick={onClickPayment}>충전하기</Button>
    </Wrapper>
    </>
  )
}