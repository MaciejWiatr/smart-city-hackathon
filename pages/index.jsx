import { Input } from '@chakra-ui/input'
import { Heading, Stack, Center } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/header.tsx'
import theme from '../src/theme'

export default function Home() {
  return (
    <Stack>
      <Header bgImage="bg1.png">
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
      <Center pt="2">
        <Stack>
          <Heading
            width="60vw"
            maxWidth="600"
            fontWeight="600"
            pt="5"
            pb="5"
            textAlign="left"
            color={theme.textGrey}
          >
            Gdzie jesteś? 🤔
          </Heading>
        </Stack>
      </Center>
    </Stack>
  )
}
