import { MenuItem, Wrapper } from "./Navigation.styles"

export default function NavigationUI(props) {
  return (
    <Wrapper>
      <MenuItem id="/boards" onClick={props.onClickMenu}>📜 남의 글도 읽기</MenuItem>
      <>|</>
      <MenuItem id="/markets" onClick={props.onClickMenu}>🎧 음악들으러 가기</MenuItem>
      <>|</>
      <MenuItem id="/mypages" onClick={props.onClickMenu}>🖌 내 기분 끄적이기</MenuItem>
      <>|</>
    </Wrapper>
  )
}