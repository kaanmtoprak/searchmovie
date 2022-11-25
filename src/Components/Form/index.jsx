import { Box, Container, Flex, Img } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import {useState,useEffect} from 'react'
import style from './style.module.css'
import logo from '../../Images/logo.png'
import { useSelector,useDispatch } from 'react-redux';
import {getSearchMoviesAsync} from '../../Redux/services'

const Form = () => {
  const dispatch = useDispatch()
  const [movie,setMovie] = useState("");


  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   console.log(movie)
  // dispatch(getSearchMoviesAsync(movie));
  // }
  return (
    <>
      <Container  maxW="5xl">
        <Flex flexDirection="column" alignItems="center">
          <Box mt="10">
            <Img src={logo}/>
          </Box>
       <Box mt="10">
       <Box>
          <Flex className={style.input} justifyContent="center">
          <input name='movie' value={movie} onChange={(e)=>setMovie(e.target.value)}  type="text" />
          <button onClick={()=>dispatch(getSearchMoviesAsync(movie))}><SearchIcon/></button>
          </Flex>
        </Box>
       </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Form