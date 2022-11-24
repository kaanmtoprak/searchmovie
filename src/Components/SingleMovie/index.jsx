import { Box, Flex,Img, Text,Badge, Button } from '@chakra-ui/react'
import React from 'react'


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
            <Button>More Detail</Button>

        </Flex>

    </>
  )
}

export default SingleMovie