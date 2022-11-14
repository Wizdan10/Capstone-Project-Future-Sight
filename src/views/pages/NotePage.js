import React from "react";
import NoteListApp from "../../components/NoteListApp";
import { getActiveNotes } from "../../utils/network-data";
import {useSearchParams} from "react-router-dom";
import SearchEngine from "../../components/SearchEngine";
import NothingNote from "./NothingNotes";
import AddButton from "../../components/button/ButtonAdd"

function Notepage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(()=>{
        return searchParams.get('keyword')||''
    
    });

    React.useEffect(()=>{
        getActiveNotes().then(({data})=>{
            setNotes(data)
        })
    },[notes])

    async function onKeywordChangeHandler(keyword){
        setKeyword(keyword)
        setSearchParams({keyword})
    }

    const filterNotes = notes.filter((data)=>{
        return data.title.toLowerCase().includes(
            keyword.toLowerCase()
        )
    })


    return(
        <>
            <SearchEngine keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {filterNotes.length !== 0 ? (<NoteListApp notes={filterNotes}/>):<NothingNote/>}
            <AddButton/>
            </>
    )
}

export default Notepage