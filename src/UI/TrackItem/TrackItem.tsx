import clsx from "clsx"
import {type PlaylistListItemResource} from "../../DAL/api"
import css from "./TrackItem.module.css"

type TrackItemProps = {
    track: PlaylistListItemResource
    selectedTrackId: string | null
    onSelect: (id: string) => void
}

 
export function TrackItem({track, selectedTrackId, onSelect}: TrackItemProps){
    const taskClassName = clsx({
        [css.item]: selectedTrackId === track.id
 })

    return (
            <li className={taskClassName}>
                <div onClick={() => onSelect(track.id)}>{track.attributes.title}</div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
        )
    }
