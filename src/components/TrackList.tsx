import { useState, useEffect } from "react"
import { PageTitle } from "./PageTitle"
import { TrackItem } from "./TrackItem"

type PlaylistListItemAttributes = {
  title: string
  attachments: TrackItemTypeArray
}
type PlaylistListItemResource = {
  id: string
  attributes: PlaylistListItemAttributes
}
type GetPlaylistsOutput = {
  data: PlaylistListItemResource[]
}
type TrackListProps = {
  selectedTrackId: string | null
  onTrackSelected: (id: string | null) => void
}
type TrackItemTypeArray = [
    {url: string}
]

export function TrackList({onTrackSelected, selectedTrackId}: TrackListProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tracks, setTracks] = useState<PlaylistListItemResource[]>([])
    useEffect(() => {
      setIsLoading(true)
      fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {headers: {
        "api-key": "eb364bcf-e657-4f9e-b048-9cd0cb4d9758"}})
      .then(response => {
         if (!response.ok) {
            throw new Error("Failed to fetch tracks")
          }
        return response.json()})
      .then((json: GetPlaylistsOutput) => {
        console.log(json.data)
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