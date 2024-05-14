import { Container, Box, VStack, HStack, Text, Image, IconButton, Heading, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box as="header" textAlign="center" py={5} borderBottom="1px" borderColor="gray.200">
          <Heading as="h1" size="2xl">
            Devon House Jamaica
          </Heading>
          <Text fontSize="lg" color="gray.600">
            A Historical Landmark and Cultural Experience
          </Text>
        </Box>

        {/* Main Content */}
        <Box as="main">
          <VStack spacing={8} align="stretch">
            {/* Feature Article */}
            <Box>
              <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwSmFtYWljYXxlbnwwfHx8fDE3MTU2ODc2OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House" borderRadius="md" />
              <Heading as="h2" size="xl" mt={4}>
                Discover the Charm of Devon House
              </Heading>
              <Text mt={2} fontSize="md" color="gray.700">
                Devon House is one of Jamaica's most celebrated landmarks, known for its rich history and stunning architecture. Built in the late 19th century, this Georgian-style mansion offers a glimpse into the island's colonial past. Visitors can explore the beautifully preserved rooms, enjoy the lush gardens, and indulge in the famous Devon House I-Scream.
              </Text>
            </Box>

            <Divider />

            {/* Secondary Articles */}
            <HStack spacing={8} align="stretch">
              <Box flex="1">
                <Image src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwSWNlJTIwQ3JlYW18ZW58MHx8fHwxNzE1Njg3Njk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Ice Cream" borderRadius="md" />
                <Heading as="h3" size="lg" mt={4}>
                  Indulge in Devon House I-Scream
                </Heading>
                <Text mt={2} fontSize="md" color="gray.700">
                  No visit to Devon House is complete without tasting the world-renowned Devon House I-Scream. With a variety of flavors to choose from, this ice cream is a treat for all ages.
                </Text>
              </Box>
              <Box flex="1">
                <Image src="https://images.unsplash.com/photo-1452626212852-811d58933cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEZXZvbiUyMEhvdXNlJTIwQmFrZXJ5fGVufDB8fHx8MTcxNTY4NzY5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Devon House Bakery" borderRadius="md" />
                <Heading as="h3" size="lg" mt={4}>
                  Savor the Delights of Devon House Bakery
                </Heading>
                <Text mt={2} fontSize="md" color="gray.700">
                  The Devon House Bakery offers a wide range of freshly baked goods, from traditional Jamaican patties to delicious pastries. It's the perfect spot for a quick snack or a leisurely meal.
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" textAlign="center" py={5} borderTop="1px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.600">
            © 2023 Devon House Jamaica. All rights reserved.
          </Text>
          <HStack spacing={4} justify="center" mt={2}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
