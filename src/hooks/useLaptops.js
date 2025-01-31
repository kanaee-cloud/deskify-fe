import { useEffect, useState } from "react"
import api from '../api/api'

const useLaptops = () => {

  const [laptops, setLaptops] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLaptops = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await api.get('/laptops')
        const data = response.data

 
        setLaptops(data.laptop || [])
      } catch (err){
        setError("failed to fetch laptops")
      } finally {
        setIsLoading(false)
      }
    }

    fetchLaptops()
  }, [])

  return {
    laptops,
    isLoading,
    error
}
}

export default useLaptops