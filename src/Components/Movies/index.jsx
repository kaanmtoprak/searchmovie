import {useEffect} from 'react'
import { Box, Container, Divider, Grid, GridItem, Text,useMediaQuery,Spinner } from '@chakra-ui/react'

import { useSelector,useDispatch } from 'react-redux';
import {getPopulerMoviesAsync} from '../../Redux/services'
import SingleMovie from '../SingleMovie';


const Movies = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const dispatch = useDispatch()
    const results = useSelector(state =>state.popmovies.items)
    const isLoading = useSelector(state =>state.popmovies.isLoading)
    const error = useSelector(state =>state.popmovies.error)
    useEffect(()=>{
        dispatch(getPopulerMoviesAsync());
    },[dispatch])

    console.log(isLoading)
    console.log(results.results)
    
  
    
    if(isLoading){

        return(

    <Container  maxW="7xl" mt={10}>
            <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </Container>


        )
    }
    if(error){
        return(
            <>Error!!</>
        )
    }

  return (
    <>
        <Container maxW="7xl" mt={10}>
            <Box>
                <Text fontSize="25px" fontWeight="500">Popular Movies</Text>
            </Box>
            <Divider mb="5"/>
<Grid templateColumns={isLargerThan1280 ? 'repeat(4, 1fr)' : isLargerThan900 ? 'repeat(3, 1fr)' : isLargerThan768 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'  } gap={3}>
  {/* <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}
  {
   results.results.map((result) =>(
        <SingleMovie key={result.id} result={result}/>
    ))
  }
  
</Grid>
        </Container>
    </>
  )
}

export default Movies