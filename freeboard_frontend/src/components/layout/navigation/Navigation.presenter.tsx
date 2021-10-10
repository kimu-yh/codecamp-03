import { MenuItem, Wrapper } from "./Navigation.styles"

export default function NavigationUI(props) {
  return (
    <Wrapper>
       <MenuItem id="/gallery" onClick={props.onClickMenu}>🖼 예술 끼얹기</MenuItem>
      <>|</>
      <MenuItem id="/boards" onClick={props.onClickMenu}>📜 남의 글 읽기</MenuItem>
      <>|</>
      <MenuItem id="/music" onClick={props.onClickMenu}>🎹 음악 듣기</MenuItem>
      <>|</>
      <MenuItem id="/boards/new" onClick={props.onClickMenu}>🖌 내 이야기</MenuItem>
      <>|</>
      <MenuItem id="/market" onClick={props.onClickMenu}>📦 중고마켓</MenuItem>
    </Wrapper>
  )
}