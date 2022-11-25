import {useEffect, useState} from 'react'
import {getSearchMoviesAsync} from '../../Redux/services'
import { useSelector,useDispatch } from 'react-redux';
import { Box, Button, Container, Divider, Flex, Grid, Spinner, Text,useMediaQuery } from '@chakra-ui/react';
import SingleMovie from '../SingleMovie';
import { changePending } from '../../Redux/Slices/searchSlice';


const Searched = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const dispatch = useDispatch()
    const searchResults = useSelector(state =>state.searchmovies.items)
    const searchIsLoading = useSelector(state =>state.searchmovies.isLoading)
    const searchError = useSelector(state =>state.searchmovies.error)
    const searchPending = useSelector(state =>state.searchmovies.pending)
    const [control,setControl] = useState(false)

    useEffect(()=>{
        dispatch(getSearchMoviesAsync());
        console.log(searchPending)
    },[dispatch,searchPending]);





  return (
    <>
        <Container maxW="7xl" mt={10}>
            <Flex mb="5" justifyContent="space-between" alignItems="center">
                <Text fontSize="25px" fontWeight="500">Searched Movies</Text>
                <Button onClick={()=>dispatch(changePending)}>Close</Button>
            </Flex>
            <Divider mb="5"/>
            <Grid templateColumns={isLargerThan1280 ? 'repeat(4, 1fr)' : isLargerThan900 ? 'repeat(3, 1fr)' : isLargerThan768 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'  } gap={3}>
  {/* <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' /> */}
  {
   !searchIsLoading  ? searchResults.results.map((result) =>(
        <SingleMovie key={result.id} result={result}/>
    )) :  searchIsLoading ?   <Container  maxW="7xl" mt={10}>
    <Spinner
thickness='4px'
speed='0.65s'
emptyColor='gray.200'
color='blue.500'
size='xl'
/>
</Container> : searchError && <>Error</>
  }
  
</Grid>
            </Container>

    </>
  )
}

export default Searched