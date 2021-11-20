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
import { Card } from '../src/components/card.tsx'
import { useRouter } from 'next/router'
const CategoriesPage = () => {
    const router = useRouter()
    return (
        <>
            <Stack pl={1} pr={1}>
                <Header bgImage="bg2.png">
                    <Stack>
                        <Heading
                            maxWidth="700"
                            width="60vw"
                            fontSize="35"
                            textAlign="left"
                        >
                            Cześć Paweł
                        </Heading>
                        <Text fontSize="25" fontWeight="600" color="white">
                            powiedz nam co cię intersuje
                        </Text>
                    </Stack>
                    <Input
                        maxWidth="700"
                        width="60vw"
                        color="black"
                        variant="outline"
                        borderRadius="11"
                        p="6"
                        placeholder="np. sztuka nowoczesna, Dobre piwo"
                        bgColor="white"
                    ></Input>
                </Header>
                <Center position="relative" top="-10">
                    <Stack maxWidth="700" width="60vw">
                        <Grid templateColumns="repeat(2, 4fr)" gap={6}>
                            <Card
                                bgImage="his.jpg"
                                header="Historia"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Card
                                bgImage="cardBg1.png"
                                header="Teatry"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Card
                                bgImage="piwo.jpg"
                                header="Piwo"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Card
                                bgImage="auto.jpg"
                                header="Motoryzacja"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Card
                                bgImage="sztuka.jpg"
                                header="Sztuka"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                            <Card
                                bgImage="park.jpg"
                                header="Natura"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            />
                        </Grid>
                    </Stack>
                </Center>
            </Stack>
            <Button
                size="lg"
                position="fixed"
                colorScheme="teal"
                right="10"
                bottom="10"
                onClick={() => {
                    router.push('/offer')
                }}
            >
                Dalej
            </Button>
        </>
    )
}

export default CategoriesPage
