import BoardListUI from "./BoardList.presenter";
import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import _ from "lodash";



export default function BoardList() {
  const [search, setSearch] = useState({
    title: '',
    endDate: '',
    startDate: '',
  })
  const [keyword, setKeyword] = useState('')
  const [startPage, setStartPage] = useState(1);
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage }
  })
  const { data: totalBoardsCount } = useQuery(FETCH_BOARDS_COUNT)

  

  const lastPage = Math.ceil(totalBoardsCount?.fetchBoardsCount/10)

  function onClickPage(e) {
    refetch({ search: keyword, page: Number(e.target.id) })
  }

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage(prev => prev - 10)
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage(prev => prev + 10);
    
  }

  const getDebounce = _.debounce((data) => {
    // console.log(data.name, data.value)
    // data.name.includes('Date') &&
    // setSearch({...search, 
    //   startDate: data.value.slice(0, 10), 
    //   endDate: data.value.slice(-10)})
    // data.name.includes('title') &&
    // setSearch({...search, title: data.value})
    refetch({ search: data.value })
    setKeyword(data.value)
  }, 1000)

  function onChangeSearch(event) {
    getDebounce(event.target)
    // setSearch({...search, [event.target.name]: event.target.value})
  }

  function onClickSearch(event) {
    refetch ({ ...search })
    setKeyword(search.title)
  }


  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      setStartPage={setStartPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      keyword={keyword}
    />
  );
}
