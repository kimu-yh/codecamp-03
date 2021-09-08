

export default function ProductRegisterUI(props) {

  return (
    <div>
      판매자: <input type="text" onChange={props.onChangeSeller} /><br />
      상품명: <input type="text" onChange={props.onChangeName} /><br />
      상품내용: <input type="text" onChange={props.onChangeDetail} /><br />
      상품가격: <input type="text" onChange={props.onChangePrice} /><br />
      { !props.isEdit && 
        <button onClick={props.onClickSubmit}>등록하기</button> }
      { props.isEdit && 
       <button onClick={props.onClickEdit}>수정하기</button> }
    </div>
  )
}