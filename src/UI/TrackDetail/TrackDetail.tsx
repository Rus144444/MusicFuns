import {useTrackSelection} from "../../BLL/useTrackSelection"

type TrackDetailProps = {
  selectedTrackId: string | null
}

export function TrackDetail({selectedTrackId}: TrackDetailProps) {
  const {selectedTrack, isLoading, error} = useTrackSelection(selectedTrackId)
  return (
        <div>
          <h2>Details</h2>
            {!selectedTrackId && <h5>Track is not selected.</h5>}
            {isLoading && <h5>Loading...</h5>}
            {error &&  <h5>Error...</h5>}
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