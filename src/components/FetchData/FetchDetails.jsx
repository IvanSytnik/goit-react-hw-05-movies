import axios from 'axios';
const Api = 'https://www.themoviedb.org/3'
const ApiKey = '2ab76973979a35747718d3c676d235cc'

export default async function  fetchDetails(top, setFilms) {
    // setLoading(true)
    try{
      
      const {data} = await axios.get(`${top}`)
      console.log(data)
      setFilms(data)
      
      
    //   setImages(prev => [...prev, ...data.hits])
      
    //   openButton(data)
    //   setPage(prev => prev+1)

      } catch(error) {
        // setError(true)
        // if(isError) {
        //   toast.error('Error')
        //   console.log(error)
        }
       finally{
        // setLoading(false)
        console.log('end')
        console.log(`${Api}${top}${ApiKey}`)
    }
  }