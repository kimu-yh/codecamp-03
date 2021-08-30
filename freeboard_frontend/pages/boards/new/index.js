export default function BoardsNewPage(){

  return (
    <div>
      <div>게시글 등록 화면</div>
      <h1>게시물 수정</h1>
      <input type="text" placeholder="이름을 적어주세요" />
      <input type="password" placeholder="비밀번호를 적어주세요" />
      <input type="text" placeholder="제목을 작성해주세요" />
      <textarea placeholder="내용을 작성해주세요" />
      <input type="number" placeholder="07250" />
      <button>우편번호 검색</button>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <section>
        <span>사진첨부</span>
        <span> + Upload</span>
        <span> + Upload</span>
        <span> + Upload</span>
      </section>
      <group>메인 설정
        <input type="radio" name="main" value="youtube" checked />유투브
        <input type="radio" name="main" value="photo" />사진
       
      </group>
    </div>
    )
}