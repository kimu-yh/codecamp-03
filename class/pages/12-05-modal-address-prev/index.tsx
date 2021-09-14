import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react'
import { Modal } from "antd"

export default function ModalAddressPrevPage() {
  const [myZipcode, setMyZipcode] = useState("")
  const [myAddress, setMyAddress] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleComplete = (data) => {
    setMyZipcode(data.zonecode)
    setMyAddress(data.address)
    console.log(data.zonecode)
    console.log(data.address)
    setIsOpen(false)
  }

  function onToggleZipCode() {
    setIsOpen(prev => !prev)
  }

  return (
    <>
    <button onClick={onToggleZipCode}>우편번호 검색</button>
    {isOpen && (<Modal visible={true} onCancel={onToggleZipCode} onOk={onToggleZipCode}> 
      <DaumPostcode onComplete={handleComplete} />
    </Modal>
    )}
    </>
  );
}