type TrackItemProps = {
    track: PlaylistItemResource
    selectedTrackId: string | null
    onSelect: (id: string) => void
}
type PlaylistItemResource = {
    id: string
    attributes: PlaylistListItemAttributes
}
type PlaylistListItemAttributes = {
    title: string
    attachments: Attachment[]
}
type Attachment = {
    url: string
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
