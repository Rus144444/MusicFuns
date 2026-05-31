import clsx from "clsx"
import { useState } from "react"
import { TrackList } from "../TrackList/TrackList"
import { TrackDetail } from "../TrackDetail/TrackDetail"
import css from './MainPage.module.css'


export function MainPage() {
  const [trackId, setTrackId] = useState<string| null>(null)

  const classNameBlock = clsx({
    [css.block]: true
  })
  
  return (
      <div className={classNameBlock}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelected={setTrackId}
        />
        <TrackDetail  selectedTrackId={trackId} />
      </div>
  )
}
