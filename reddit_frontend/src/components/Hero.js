import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="8vw">Samruddhi & Harshad</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Samruddhi',
}
