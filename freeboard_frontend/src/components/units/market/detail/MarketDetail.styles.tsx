import styled from '@emotion/styled'
import { Tooltip } from 'antd'

export const S = {

  Container: styled.div`
    padding: 0px 204px;
    margin: 80px auto;
    display: flex;
    width: 1200px;
    border-bottom: 1px solid gray;
  `,
  Header: styled.div`
    padding-bottom: 23px;
    height: 65px;
    border-bottom: 1px solid gray;
  `,
  Date: styled.div`

  `,
  IconWrapper: styled.div`
    text-align: center;
    margin-bottom: 10px;
  `,

  LinkIcon: styled.img`
    margin-right: 10px;
  `,
  LocationIcon: styled.img`
    margin-left: 10px;
  `,

  ShowAddress: styled(Tooltip)``
}