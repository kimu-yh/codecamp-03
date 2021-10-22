import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions(
    $page: Int
    $useditemId: ID!
    ) {
      fetchUseditemQuestions(
        page: $page
        useditemId: $useditemId) {
          _id
          contents
          createdAt
          user {
            picture
          }
    }
  }
`

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers(
    $page: Int
    $useditemQuestionId: ID!
    ) {
      fetchUseditemQuestionAnswers(
        page: $page,
        useditemQuestionId: $useditemQuestionId
      ) {
      _id
      contents
      createdAt
      user {
        picture
      }
    }
  }
`

export const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
      ) {
        _id
        user {
          picture
        }
      }
  }
`
export const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`

export const CREATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!,
    $useditemQuestionId: ID!
    ) {
      createUseditemQuestionAnswer(
        createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput,
        useditemQuestionId: $useditemQuestionId
      ) {
        _id
      }
    }
`

export const DELETE_USEDITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId) 
  }
`
export const DELETE_USEDITEM_QUESTION_ANSWER = gql`
    mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
      deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
    }
`

export const UPDATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
    ) {
      updateUseditemQuestionAnswer(
        updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
        useditemQuestionAnswerId: $useditemQuestionAnswerId
      ) {
        _id
        contents
        user {
          picture
          name
        }
     }

    }
`
