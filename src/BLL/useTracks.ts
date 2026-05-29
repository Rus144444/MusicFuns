import { useState, useEffect } from "react"
import type {GetPlaylistsOutput, PlaylistListItemResource} from "../DAL/api"
import { getTracks } from "../DAL/api-fake"

export function useTracks (){
  const [tracks, setTracks] = useState<PlaylistListItemResource[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
      setIsLoading(true)
      getTracks()
      .then((json: GetPlaylistsOutput) => {
        setTracks(json.data)})
      .catch((error: Error)=>{setError(error.message)})
      .finally(() => {setIsLoading(false)})
      }, [])

      return {
        tracks,
        isLoading,
        error
      }
}