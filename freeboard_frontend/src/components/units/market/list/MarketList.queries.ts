
import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems(
    $isSoldout: Boolean
    $search: String
    $page: Int
    ) {
    fetchUseditems(
      isSoldout: $isSoldout
      search: $search
      page: $page
      ) {
        _id
        name
        remarks
        contents
        price  
        images
        pickedCount
        seller {,
          _id
          name
          picture
      }
    }
  }
`

export const FETCH_USEDITEMS_OFTHEBEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
    }
  }
`

export const FETCH_USEDITEMS_IBOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        name
        picture
      }
      soldAt
      createdAt
    }
  }
`

export const FETCH_USEDITEM_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      picture
      userPoint {
        amount
      }
    }
  }
`