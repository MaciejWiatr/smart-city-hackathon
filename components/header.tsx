import { Stack, HStack, VStack, Center } from '@chakra-ui/react'
export const Header = (props) => {
  return (
    <Center
      width="100vw"
      height="35vh"
      color="white"
      p="15rem 2rem 7rem 2rem"
      bgColor="#00FFA3"
      overflow="hidden"
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '35vh',
          padding: '15rem 2rem 7rem 2rem',
          backgroundImage: 'url(bg1.png)',
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
