import BoardListUI from "./BoardList.presenter";
import { useState, ChangeEvent} from 'react'
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import _ from "lodash";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs} from "../../../../commons/types/generated/types";




export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState('')
  
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS, { 
    variables: { page: startPage 
  }})
  
  const { data: totalBoardsCount } = useQuery<
  Pick<IQuery, "fetchBoardsCount">,
  IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT)
  
  const lastPage = Math.ceil(totalBoardsCount?.fetchBoardsCount/10)

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.currentTarget.id}`);
  }

  function onClickPage(e) {
    refetch({ search: keyword, page: Number(e.target.id) })
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
    refetch({ search: data })
    setKeyword(data)
  }, 2000)

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value)
  }

  function onChangeDate(date) {
    refetch({startDate: date[0], endDate: date[1]})
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
      onChangeDate={onChangeDate}
      keyword={keyword}
    />
  );
}
