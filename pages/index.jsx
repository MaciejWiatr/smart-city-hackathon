import { Stack } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header.tsx'

export default function Home() {
  return (
    <Stack>
      <Header>
        <h1>Cześć Paweł</h1>
      </Header>
    </Stack>
  )
}
