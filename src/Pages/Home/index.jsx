import { Flex } from '@chakra-ui/react'
import {useEffect,useState} from 'react'
import Form from '../../Components/Form'
import Movies from '../../Components/Movies'
// import {getSearchMoviesAsync} from '../../Redux/services'
import { useSelector } from 'react-redux';
import Searched from '../../Components/Searched';
const Home = () => {
  const searchPending = useSelector(state =>state.searchmovies.pending)
  const [control,setControl] = useState(false)


  useEffect(()=>{
    setControl(searchPending)
  },[searchPending])

  return (
    <>
  <Flex flexDirection="column" >
  <Form/>
    {
      !control ? <Movies/> : <Searched/>
    }
  </Flex>
    </>
  )
}

export default Home