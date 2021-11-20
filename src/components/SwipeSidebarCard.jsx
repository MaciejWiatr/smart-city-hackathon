import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";

const SwipeSidebarCard = ({ title, desc, img, tags }) => {
    return (
        <Flex
            p="6"
            pos="relative"
            rounded="lg"
            overflow="hidden"
            bgColor="#636363"
        >
            <VStack h="full" w="full" pos="relative" zIndex="20" color="white">
                <Text
                    w="full"
                    textAlign="left"
                    fontSize="lg"
                    fontWeight="semibold"
                >
                    {title}
                </Text>
                <HStack w="full">
                    {tags.map((tag) => (
                        <Flex
                            pos="relative"
                            color="#404040"
                            bg="white"
                            key={tag}
                            p="1"
                            shadow="lg"
                            rounded="full"
                            pl="4"
                            pr="4"
                            fontSize="sm"
                            flexWrap="wrap"
                        >
                            {tag}
                        </Flex>
                    ))}
                </HStack>
                <Text fontSize="sm">{desc}</Text>
            </VStack>
            <Box
                w="full"
                h="full"
                pos="absolute"
                top="0"
                left="0"
                bgImage={img}
                bgPosition="center"
                bgSize="cover"
                opacity="0.4"
            ></Box>
        </Flex>
    );
};

export default SwipeSidebarCard;
