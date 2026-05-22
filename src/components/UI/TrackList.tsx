import { useState, useEffect } from "react"
import { PageTitle } from "./PageTitle"
import { TrackItem } from "./TrackItem"
import { getTracks } from "../../DAL/api-fake"
import type {GetPlaylistsOutput, PlaylistListItemResource} from "../../DAL/api"

type TrackListProps = {
  selectedTrackId: string | null
  onTrackSelected: (id: string | null) => void
}

export function TrackList({onTrackSelected, selectedTrackId}: TrackListProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tracks, setTracks] = useState<PlaylistListItemResource[]>([])
    useEffect(() => {
      setIsLoading(true)
      getTracks()
      .then((json: GetPlaylistsOutput) => {
        setTracks(json.data)})
      .catch((error: Error)=>{setError(error.message)})
      .finally(() => {setIsLoading(false)})
      }, [])
    if (isLoading) {return <div><PageTitle/>Loading...</div>}
    if (error) {return <div><PageTitle/>{error}</div>}
  return (
      <div >
        <div>
          <PageTitle/>
          <button
            onClick={() => onTrackSelected(null)}
          >
            reset selection
          </button>
        </div>
        <div style={{"display": "flex", "gap": "50px"}}>
          <ul style={{"listStyle": "none"}}>
              {tracks.length === 0 &&  <div><PageTitle/><span>No tracks</span></div> }
              {tracks.map((track) => {
              return (
                  <TrackItem  key={track.id} track={track} selectedTrackId={selectedTrackId} onSelect={onTrackSelected}/>
              )
            })}
          </ul>
        </div>
      </div>
    )
}