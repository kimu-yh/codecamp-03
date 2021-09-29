import BoardListUI from "./BoardList.presenter";
import { useState } from 'react'
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage }
  })
  const { data: totalBoardsCount } = useQuery(FETCH_BOARDS_COUNT)

  const lastPage = Math.ceil(totalBoardsCount?.fetchBoardsCount/10)

  function onClickPage(e) {
    refetch({ page: Number(e.target.id) })
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

  function onClickNextPage(e) {
    if (startPage + 10 > lastPage) return;
    setStartPage(prev => prev + 10);
    
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
      
    />
  );
}
