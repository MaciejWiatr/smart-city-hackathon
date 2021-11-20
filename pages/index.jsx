import { Input } from '@chakra-ui/input'
import { Heading, Stack } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header.tsx'

export default function Home() {
  return (
    <Stack>
      <Header>
        <Heading
          pb="3"
          maxWidth="600"
          width="60vw"
          fontSize="2.2rem"
          textAlign="left"
        >
          Cześć, jak masz na imię?
        </Heading>
        <Input
          maxWidth="600"
          width="60vw"
          color="black"
          variant="outline"
          borderRadius="11"
          p="6"
          placeholder="Grzegorz"
          bgColor="white"
        ></Input>
      </Header>
      
    </Stack>
  )
}
