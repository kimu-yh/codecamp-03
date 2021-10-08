import { Modal } from "antd"

export function checkImage(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" })
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("webp") &&  !file.type.includes("png")) {
    Modal.error({ content: "png, webp, jpeg 확장자만 업로드 가능합니다."})
    return false;
  }
  return file;
}

// 수업시간에는 true/false 리턴하는 함수였는데, 유효성 통과하면 file을 리턴하는 함수로 변경됨