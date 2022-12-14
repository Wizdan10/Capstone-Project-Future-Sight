import React from "react";
import NoteListApp from "../../components/NoteListApp";
import { getActiveNotes } from "../../utils/network-data";
import { useSearchParams } from "react-router-dom";
import SearchEngineNotes from "../../components/SearchEngineNotes";
import NothingNote from "./NothingNotes";
import AddButton from "../../components/button/ButtonAdd";
import ScrollToTop from "react-scroll-to-top";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import FooterDown from "../../components/FotterDown";

function Notepage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, [notes]);

  async function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filterNotes = notes.filter((data) => {
    return data.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <div className="note-show">
        <ScrollToTop
          smooth
          width="40px"
          height="40px"
          component={<BsFillArrowUpSquareFill />}
        />
      </div>
      <h2 className="note-title text-dark d-flex justify-content-center">
        Your Notes
      </h2>
      <SearchEngineNotes
        keyword={keyword}
        keywordChange={onKeywordChangeHandler}
      />
      {filterNotes.length !== 0 ? (
        <NoteListApp notes={filterNotes} />
      ) : (
        <NothingNote />
      )}
      <AddButton />
      <FooterDown/>
    </>
  );
}

export default Notepage;
