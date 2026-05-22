export type ApiResponse = {
  data: SelectedTrackType
}

export type SelectedTrackType = {
  id: string
  attributes: Attributes
}

export type Attributes = {
  title: string
  lyrics: string
}

export type PlaylistListItemAttributes = {
  title: string
  attachments: TrackItemTypeArray
}

export type PlaylistListItemResource = {
  id: string
  attributes: PlaylistListItemAttributes
}

export type GetPlaylistsOutput = {
  data: PlaylistListItemResource[]
}

export type TrackItemTypeArray = {
  url: string
}[]

export async function getTrack(id: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${id}`,
    {
      headers: {
        "api-key": "eb364bcf-e657-4f9e-b048-9cd0cb4d9758",
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch track")
  }

  return response.json()
}

export async function getTracks(): Promise<GetPlaylistsOutput> {
  const response = await fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        "api-key": "eb364bcf-e657-4f9e-b048-9cd0cb4d9758",
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch tracks")
  }

  return response.json()
}