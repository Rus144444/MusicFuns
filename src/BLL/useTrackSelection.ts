import { useState, useEffect } from "react"
import { getTrack } from "../DAL/api-fake"
import type { SelectedTrackType, ApiResponse } from "../DAL/api"

export function useTrackSelection (selectedTrackId: string| null) {
  const [selectedTrack, setSelectedTrack] = useState<SelectedTrackType|null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  useEffect(()=>{
      if (!selectedTrackId) {
          setSelectedTrack(null)
          setError(null)
          setIsLoading(false)
        return
      }

      setIsLoading(true)
      setError(null)

      getTrack(selectedTrackId)
      .then((json: ApiResponse) => {setSelectedTrack(json.data)})
      .catch((error: Error)=>{setError(error.message)})
      .finally(() => {setIsLoading(false)})
    }, [selectedTrackId])

    return{
      selectedTrack,
      isLoading,
      error
    }
}
