import { Flex } from '@chakra-ui/react'
import React from 'react'
import Form from '../../Components/Form'
import Movies from '../../Components/Movies'
const Home = () => {
  return (
    <>
  <Flex flexDirection="column" >
  <Form/>
    <Movies/>
  </Flex>
    </>
  )
}

export default Home