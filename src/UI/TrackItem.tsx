import {type PlaylistListItemResource} from "../DAL/api"

type TrackItemProps = {
    track: PlaylistListItemResource
    selectedTrackId: string | null
    onSelect: (id: string) => void
}

export function TrackItem({track, selectedTrackId, onSelect}: TrackItemProps){
    return (
            <li
                style={{
                border: track.id === selectedTrackId ? "1px solid orange" : "none",
                }}
            >
                <div
                onClick={() => onSelect(track.id)}
                >
                {track.attributes.title}
                </div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
        )
    }
