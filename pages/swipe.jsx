import { Box, Flex, HStack, VStack, Text, Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SwipeSidebarCard from "../src/components/SwipeSidebarCard";
import TinderCard from "react-tinder-card";
import {useState, useRef, useMemo} from 'react';
import Swiper from "../src/components/Swiper";

const mockData = [
    {
        title: "Muzeum powstańców śląskich",
        desc: "Occaecat exercitation tempor do cupidatat anim voluptate elit labore eiusmod ullamco",
        img: "https://images.pexels.com/photos/5845467/pexels-photo-5845467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        tags: ["muzeum", "historia"],
    },
    {
        title: "Koncert jubileuszowy Eweliny Lisowskiej",
        desc: "Occaecat exercitation tempor do cupidatat anim voluptate elit labore eiusmod ullamco",
        tags: ["muzyka", "pop"],
        img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        title: "Pijalnia wódki i piwa",
        desc: "Occaecat exercitation tempor do cupidatat anim voluptate elit labore eiusmod ullamco",
        tags: ["piwo", "imprezy", "lokalne specjały"],
        img: "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

const SwipePage = () => {
    const [currentIndex, setCurrentIndex] = useState(mockData.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)
  
    const childRefs = useMemo(
      () =>
        Array(mockData.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    )
  
    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }
  
    const canGoBack = currentIndex < mockData.length - 1
  
    const canSwipe = currentIndex >= 0
  
    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
      setLastDirection(direction)
      updateCurrentIndex(index - 1)
    }
  
    const outOfFrame = (name, idx) => {
      console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
      // handle the case in which go back is pressed before card goes outOfFrame
      currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
      // TODO: when quickly swipe and restore multiple times the same card,
      // it happens multiple outOfFrame events are queued and the card disappear
      // during latest swipes. Only the last outOfFrame event should be considered valid
    }
  
    const swipe = async (dir) => {
      if (canSwipe && currentIndex < mockData.length) {
        await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
      }
    }
  
    // increase current index and show card
    const goBack = async () => {
      if (!canGoBack) return
      const newIndex = currentIndex + 1
      updateCurrentIndex(newIndex)
      await childRefs[newIndex].current.restoreCard()
    }

    return (
        <HStack h="100vh" w="100vw" bgColor="#eeeeee">
            <VStack w="50%" maxW="lg" h="full" bg="white">
                <VStack
                    bg="green"
                    w="full"
                    p="8"
                    spacing="4"
                    bgImage="/swiper-banner.png"
                >
                    <HStack w="full" justifyContent="flex-start">
                        <Flex
                            justify="center"
                            alignItems="center"
                            bgColor="white"
                            h="8"
                            w="8"
                            rounded="full"
                        >
                            <AiOutlineUser />
                        </Flex>
                        <Text fontWeight="semibold" color="white">
                            Maciej Wiatr
                        </Text>
                    </HStack>
                    <HStack
                        fontWeight="semibold"
                        fontSize="xl"
                        w="full"
                        color="white"
                    >
                        <HiOutlineLocationMarker />
                        <Text>Kraków, Poland</Text>
                    </HStack>
                </VStack>
                <Tabs isFitted w="full" m="0" overflowY="scroll">
                    <TabList pos="sticky" top="0" zIndex="90" bgColor="white">
                        <Tab>Polubione</Tab>
                        <Tab>Historia</Tab>
                    </TabList>
                    <TabPanels overflow="hidden">
                        <TabPanel overflow="hidden">
                            <VStack
                                pl="3"
                                pr="3"
                                spacing="6"
                                h="full"
                                overflow="hidden"
                            >
                                {mockData.map(({ title, tags, desc, img }) => {
                                    return (
                                        <SwipeSidebarCard
                                            key={title}
                                            title={title}
                                            desc={desc}
                                            img={img}
                                            tags={tags}
                                        />
                                    );
                                })}
                            </VStack>
                        </TabPanel>
                        <TabPanel overflow="hidden">
                            <VStack
                                pl="3"
                                pr="3"
                                spacing="6"
                                h="full"
                                overflow="hidden"
                            >
                                {mockData
                                    .reverse()
                                    .map(({ title, tags, desc, img }) => {
                                        return (
                                            <SwipeSidebarCard
                                                key={title}
                                                title={title}
                                                desc={desc}
                                                img={img}
                                                tags={tags}
                                            />
                                        );
                                    })}
                            </VStack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </VStack>
            <Flex h="full" w="60%" justifyContent="center" alignItems="center">
                <VStack h="full">
                    <Center
                        h="20vh"
                        textAlign="center"
                        fontWeight="semibold"
                        fontSize="xl"
                    >
                        ✨Odkryj nowe atrakcje i trasy wycieczkowe ✨
                    </Center>
                    <Flex
                        w="full"
                        justifyContent="center"
                        h="60vh"
                        alignItems="center"
                    >
                            <Swiper/>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        w="full"
                        h="20vh"
                    >
                        <Button
                            mr="4"
                            fontSize="sm"
                            bgColor="black"
                            color="white"
                            size="lg"
                            _hover={{ bgColor: "#303030" }}
                            _focus={{ bgColor: "#404040" }}
                        >
                            Atrakcje i trasy
                        </Button>
                        <Button
                            fontSize="sm"
                            size="lg"
                            variant="ghost"
                            border="1px #C1C1C1 solid"
                            color="#C1C1C1"
                        >
                            Wydarzenia
                        </Button>
                    </Flex>
                </VStack>
            </Flex>
        </HStack>
    );
};

export default SwipePage;
