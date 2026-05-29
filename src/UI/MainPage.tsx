import { useState } from "react"
import { TrackList } from "./TrackList"
import { TrackDetail } from "./TrackDetail"

export function MainPage() {
  const [trackId, setTrackId] = useState<string| null>(null)
  
  return (
      <div style={{ display: "flex" }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelected={setTrackId}
        />
        <TrackDetail  selectedTrackId={trackId} />
      </div>
  )
}
