

export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=철수"
  }
  function onClickSaveLocalStorage() {
    localStorage.setItem("bbb", "영희")
  }
  function onClickSaveSessionStorage() {
    sessionStorage.setItem("ccc", "훈이")
  }
  function onClickGetCookie() {
    console.log('myCookie:', document.cookie)
    const temp = document.cookie
      .split("; ")
      .filter(e => e.startsWith("aaa="))[0]
      .split('=')[1]
      console.log('myCookieTemp:', temp)
  }
  function onClickGetLocalStorage() {
    const name2 = localStorage.getItem("bbb")
    console.log('로컬스토리지:', name2)
  }
  function onClickGetSessionStorage() {
    const name3 = sessionStorage.getItem("ccc")
    console.log('세션스토리지:', name3)
  }

  return (
    <>
    <button onClick={onClickSaveCookie}>쿠키에 저장하기</button><br />
    <button onClick={onClickSaveLocalStorage}>로컬스토리지에 저장하기</button><br />
    <button onClick={onClickSaveSessionStorage}>세션스토리지에 저장하기</button><br />
    ======================================================================<br />
    <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button><br />
    <button onClick={onClickGetLocalStorage}>로컬스토리지에 있는 값 가져오기</button><br />
    <button onClick={onClickGetSessionStorage}>세션스토리지에 있는 값 가져오기</button>
    </>
  )
}