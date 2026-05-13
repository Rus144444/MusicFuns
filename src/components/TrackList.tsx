import { useState, useEffect } from "react"
import { PageTitle } from "./PageTitle"
import { TrackItem } from "./TrackItem"
 
export function TrackList({onTrackSelected, selectedTrackId}) {
    const [tracks, setTracks] = useState([])
  
      useEffect(() => {
      fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {headers: {
        "api-key": "eb364bcf-e657-4f9e-b048-9cd0cb4d9758"
      }}).then(response => response.json()).then((json) => {setTracks(json.data)})
      
    }, [])

    const handleResetClick = () => {
        onTrackSelected?.(null)
    }

    return (
      <div >
        <div>
          <PageTitle/>
          <button
            onClick={handleResetClick}
          >
            reset selection
          </button>
        </div>
        <div style={{"display": "flex", "gap": "50px"}}>
          <ul style={{"listStyle": "none"}}>
              {tracks === null && <div><PageTitle/><span>loading...</span></div>}
              {tracks.length === 0 &&  <div><PageTitle/><span>No tracks</span></div> }
              {tracks.map((track) => {
              return (
                <TrackItem track={track} selectedTrackId={selectedTrackId} onSelect={onTrackSelected}/>
              )
            })}
          </ul>
        </div>
      </div>
    )
}