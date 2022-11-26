import React from 'react'
import {Flex,Box,Button,Container,Text} from '@chakra-ui/react';
import not from '../../Images/404.png'
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <>
        <Container maxW="7xl" mt={10}>
            <Flex flexDirection="column" alignItems="center">
                <Box mb="5">
                    <img src={not} alt="" />
                </Box>
                <Box textAlign="center">
                    <Text mb="10" fontWeight="500" fontSize="50px" > Page Not Found :/</Text>
                    <Link to="/"><Button>Go Back Home Page!</Button></Link>

                </Box>
            </Flex>
        </Container>
    
    
    </>
  )
}

export default NotFound