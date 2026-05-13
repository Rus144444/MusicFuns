import { useState, useEffect } from "react"

export function TrackDetail({selectedTrackId}) {
  const [selectedTrack, setSelectedTrack] = useState(null)
  useEffect(()=>{
      if (!selectedTrackId) {
        setSelectedTrack(null)
        return
      }

      fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks/"+selectedTrackId, 
        {
          headers: {
            "api-key": "eb364bcf-e657-4f9e-b048-9cd0cb4d9758"
          }
        }
      ).then(response => response.json()).then((json) => {setSelectedTrack(json.data)})
    }, [selectedTrackId])

  return (
        <div>
          <h2>Details</h2>
            {!selectedTrack && !selectedTrackId && "Track is not selected."}
            {!selectedTrack && selectedTrackId && "Loading..."}
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