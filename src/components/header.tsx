import { Stack, HStack, VStack, Center } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import theme from '../theme'
export const Header = (props) => {
    return (
        <Center
            width="100vw"
            height="45vh"
            color="white"
            p="150 20 10 20"
            bgColor={theme.overlayColor}
            overflow="hidden"
        >
            <Box
                position="absolute"
                width="100%"
                height="45vh"
                padding="150 20 10 20"
                backgroundImage={`url(${props.bgImage})`}
                backgroundSize="cover"
                backgroundPosition="center"
                zIndex={1}
                opacity={0.5}
                top={0}
                left={0}
            ></Box>
            <Stack position="relative" bottom="-10" zIndex={2}>
                {props.children}
            </Stack>
        </Center>
    )
}
