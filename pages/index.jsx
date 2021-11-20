import { Input } from '@chakra-ui/input'
import {
    Heading,
    Stack,
    Center,
    Wrap,
    Button,
    WrapItem,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/header.tsx'
import theme from '../src/theme'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    return (
        <Stack pl={1} pr={1}>
            <Header bgImage="bg1.png">
                <Heading
                    pb="3"
                    maxWidth="700"
                    width="60vw"
                    fontSize="35"
                    textAlign="left"
                >
                    Cześć, jak masz na imię?
                </Heading>
                <Input
                    maxWidth="700"
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
                <Stack maxWidth="700">
                    <Heading
                        maxWidth="700"
                        width="60vw"
                        fontWeight="600"
                        pt="5"
                        pb="5"
                        textAlign="left"
                        color={theme.textGrey}
                    >
                        Gdzie jesteś? 🤔
                    </Heading>
                    <Stack direction="row" align="center">
                        <Input
                            placeholder="Kraków, polska"
                            size="lg"
                            w="full"
                        ></Input>

                        <Button
                            ml="3"
                            colorScheme="Black"
                            bgColor="black"
                            color="white"
                            size="lg"
                            onClick={() => {
                                router.push('/categories')
                            }}
                        >
                            Zatwierdz
                        </Button>
                    </Stack>
                    <Box mt={'20'} mb={'20'} height={'300'}>
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Krak%C3%B3w,%20Przemys%C5%82owa%2012&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            style={{
                                borderRadius: '11',
                                margin: '5',
                            }}
                        ></iframe>
                    </Box>
                </Stack>
            </Center>
        </Stack>
    )
}
