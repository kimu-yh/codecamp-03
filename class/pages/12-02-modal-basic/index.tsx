import { Modal, Button } from 'antd';
import { useState } from "react"

export default function ModalBasicPage() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => setIsModalVisible(true)
  const [myPassword, setMyPassword] = useState('')
  const onChangeMyPassword = event => setMyPassword(event.target.value)
  const closeModal = () => setIsModalVisible(false)
  
  return (
    <>
      <Button onClick={showModal}>모달창 열기</Button>
      <Modal visible={isModalVisible} onCancel={closeModal} onOk={closeModal}>
        비밀번호 입력: <input type="password" onChange={onChangeMyPassword} />
      </Modal>
    </>
  );

}



