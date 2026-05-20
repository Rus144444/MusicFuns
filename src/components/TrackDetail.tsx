import { useState, useEffect } from "react"

type ApiResponse = {
  data: SelectedTrackType
}
type TrackDetailProps = {
  selectedTrackId: string | null
}
type SelectedTrackType = {
  id: string
  attributes: Attributes
}
type Attributes = {
  title: string
  lyrics: string
}

export function TrackDetail({selectedTrackId}: TrackDetailProps) {
  const [selectedTrack, setSelectedTrack] = useState<SelectedTrackType|null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(()=>{
      if (!selectedTrackId) {
          setSelectedTrack(null)
          setError(null)
          setIsLoading(false)
        return
      }

      setIsLoading(true)
      setError(null)

      fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/"+selectedTrackId, 
        {
          headers: {
            "api-key": "eb364bcf-e657-4f9e-b048-9cd0cb4d9758"
          }
        }
      )
      .then(response =>  response.json())
      .then((json:ApiResponse) => {setSelectedTrack(json.data)})
      .catch((error: Error)=>{setError(error.message)})
      .finally(() => {setIsLoading(false)})
    }, [selectedTrackId])

    if (!selectedTrackId) {
      return <div>"Track is not selected."</div>
    }

    if (isLoading) {
      return <div>"Loading..."</div>
    }

    if (error) {
      return <div>"Error..."</div>
    }

  return (
        <div>
          <h2>Details</h2>
            {selectedTrack && ( 
              <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <h4>Lyrics</h4>
                <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
              </div>
            )}
        </div>
  )
}