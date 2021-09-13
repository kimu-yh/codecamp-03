import styled from "@emotion/styled"
import { Rate } from "antd"

export const CommentsWrapper = styled.div`
display: flex;
flex-direction: row;
width: 1200px;
border-bottom: 1px solid #BDBDBD;
margin: 20px 0 20px 100px;
padding-top: 30px;
`
export const Profile = styled.img`
width: 40px;
height: 40px;
margin-top: 10px;
`
export const ShowWrapper = styled.div`
width: 1000px;
display: flex;
flex-direction: column;
padding: 10px;
margin-left: 16px;
`
export const InfoShowWrapper =  styled.div`
/* display: flex;
flex-direction: row; */
`
export const ShowWriter = styled.span`
width: 45px;
height: 24px;
font-size: 16px;
letter-spacing: 1px;
`

export const ShowStar = styled.span`
width: 180px;
height: 18px;
color: #FFD600;
margin-left: 18px;
`

export const ShowText = styled.div`
margin-top: 8px;
height: 40px;
letter-spacing: 1px;
`

export const ShowDate = styled.div`
margin-top: 14px;
width: 120px;
height: 18px;
color: #BDBDBD;
margin-bottom: 20px;
`

export const FixDelWrapper = styled.div`
width: 52px;
margin-left: 75px;
`

export const Fix = styled.img`
width: 18px;
height: 18px;
`

export const Delete = styled.img`
margin-left: 16px;
width: 18px;
height: 18px;
`

export const Star = styled(Rate)`
color: lavender
`