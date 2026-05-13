export function TrackItem({track, selectedTrackId, onSelect}){
    const handleClick = () => {
        onSelect?.(track.id)
    }

    return (
        <li>
            <div>
                <li
                    key={track.id}
                    style={{
                    border: track.id === selectedTrackId ? "1px solid orange" : "none",
                    }}
                >
                    <div
                    onClick={handleClick}
                    >
                    {track.attributes?.title}
                    </div>
                    <audio src={track.attributes?.attachments[0].url} controls></audio>
                </li>
            </div>
        </li>
    )
}