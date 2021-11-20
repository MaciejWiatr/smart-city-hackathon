import React from 'react'
import { Input } from '@chakra-ui/input'
import {
    Heading,
    Stack,
    Center,
    Wrap,
    Button,
    WrapItem,
    Text,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/header.tsx'
import theme from '../src/theme'
import { OfferCard } from '../src/components/card.tsx'
import { useRouter } from 'next/router'

const OfferPage = () => {
    const router = useRouter()
    return (
        <>
            <Stack pl={1} pr={1}>
                <Header bgImage="bg3.png">
                    <Stack>
                        <Heading
                            maxWidth="700"
                            width="60vw"
                            fontSize="35"
                            textAlign="left"
                        >
                            Czego szukasz?
                        </Heading>
                        <Text fontSize="25" fontWeight="600" color="white">
                            Wybierz opcję którą chciałbyś teraz przeglądać,
                            <br />
                            będziesz mógł to zmienić później w opcjach
                        </Text>
                    </Stack>
                </Header>
                <Center position="relative" top="-10">
                    <Stack maxWidth="700" width="60vw">
                        <Grid templateColumns="repeat(1, 4fr)" gap={6}>
                            <OfferCard
                                bgImage="bg5.png"
                                header="Wydarzenia 🎉"
                                text="Przeglądaj aktualne wydarzenia i wybierz idealne dla siebie"
                                onClick={() => {
                                    router.push('/swipe')
                                }}
                            />
                            <OfferCard
                                bgImage="bg6.png"
                                header="Atrakcje i trasy wycieczkowie 🛣"
                                text="Znajdź najciekawsze miejsca w swoim regionie i dobierz idealne pod siebie"
                                onClick={() => {
                                    router.push('/swipe')
                                }}
                            />
                        </Grid>
                    </Stack>
                </Center>
            </Stack>
        </>
    )
}

export default OfferPage
