
import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
  mutation createUsedItem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      price
      name
      remarks
      contents
      price
    }
  }
`

export const UPDATE_USEDITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!,$useditemId: ID!) {
      updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
          _id

    } 
  }
`

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
    }
  }
`