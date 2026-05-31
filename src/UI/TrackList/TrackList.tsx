import { clsx } from "clsx"
import { useTracks } from "../../BLL/useTracks"
import { PageTitle } from "../PageTitle/PageTitle"
import { TrackItem } from "../TrackItem/TrackItem"
import css from "./TrackList.module.css"

type TrackListProps = {
  selectedTrackId: string | null
  onTrackSelected: (id: string | null) => void
}

export function TrackList({onTrackSelected, selectedTrackId}: TrackListProps) {
  const {tracks, isLoading, error} = useTracks()

  const classNameBlock = clsx({
        [css.block]: true
  })

  const classNameList = clsx({
        [css.list]: true
  })

  if (isLoading) {return <div><PageTitle/>Loading...</div>}
  if (error) {return <div><PageTitle/>{error}</div>}
  
  return (
      <div className={classNameBlock}>
        <div>
          <PageTitle/>
          <button
            onClick={() => onTrackSelected(null)}
          >
            reset selection
          </button>
        </div>
        <div>
          <ul className={classNameList}>
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