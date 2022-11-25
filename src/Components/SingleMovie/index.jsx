import { Box, Flex,Img, Text,Badge, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const SingleMovie = ({result}) => {
    const image_url = `https://image.tmdb.org/t/p/original/${result.poster_path}`
  return (
    <>
        <Flex flexDirection="column" justifyContent="space-between">
            <Box mb="5">
                <Img src={image_url} />
            </Box>
            <Box mb="5">
                <Text fontSize="18px">
                    {result.title}
                </Text>
                <Badge colorScheme={result.vote_average >= 7 ? "green" : result.vote_average >= 5.5 ? "yellow" : "red" }>10 / {result.vote_average}</Badge>
               
            </Box>
            <Link to={`/movie/detail/${result.id}`}><Button w="100%">More Details</Button></Link>

        </Flex>

    </>
  )
}

export default SingleMovie