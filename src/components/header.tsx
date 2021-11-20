import { Stack, HStack, VStack, Center } from '@chakra-ui/react'
import theme from '../theme'
export const Header = (props) => {
  return (
    <Center
      width="100vw"
      height="35vh"
      color="white"
      p="15rem 2rem 7rem 2rem"
      bgColor={theme.overlayColor}
      overflow="hidden"
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '35vh',
          padding: '15rem 2rem 7rem 2rem',
          backgroundImage: `url(${props.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          opacity: 0.5,
          top: 0,
          left: 0,
        }}
      ></div>
      <Stack zIndex={2}>{props.children}</Stack>
    </Center>
  )
}