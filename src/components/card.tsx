import {
    Heading,
    Stack,
    Center,
    Wrap,
    Button,
    WrapItem,
    Text,
    Box,
} from '@chakra-ui/react'
import react, { useState } from 'react'
export const Card = (props) => {
    const [state, setState] = useState(0)
    return (
        <Box
            p="6"
            height="200"
            borderRadius={'11'}
            zIndex={3}
            bgImage={props.bgImage}
        >
            <Heading fontSize="30" color="white">
                {props.header}
            </Heading>
            <Text fontSize="16" color="white">
                {props.text}
            </Text>
            <Stack
                mt="2"
                position="relative"
                bottom="-6"
                fontSize="18"
                direction="row"
                align="center"
            >
                <Box
                    className="pointer"
                    border="2px"
                    p="1"
                    borderRadius="8"
                    borderColor={state === 1 ? '#45c496' : 'white'}
                    onClick={() => {
                        setState(1)
                    }}
                >
                    👍
                </Box>
                <Box
                    className="pointer"
                    border="2px"
                    p="1"
                    borderRadius="8"
                    borderColor={state === 2 ? 'red' : 'white'}
                    onClick={() => {
                        setState(2)
                    }}
                >
                    👎
                </Box>
            </Stack>
        </Box>
    )
}

export const OfferCard = (props) => {
    return (
        <Box
            p="6"
            height="200"
            borderRadius={'11'}
            zIndex={3}
            bgImage={props.bgImage}
            className="pointer"
            onClick={props.onClick}
        >
            <Stack direction="column">
                <Heading pt="50" width="100%" fontSize="20" color="white">
                    {props.header}
                </Heading>
                <Text width="100%" fontSize="16" color="white">
                    {props.text}
                </Text>
            </Stack>
        </Box>
    )
}
