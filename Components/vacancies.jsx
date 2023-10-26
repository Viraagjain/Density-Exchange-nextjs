import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

const OpenVacanciesSection = () => {
  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (rect.top < viewportHeight * 0.7 && rect.bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Box width="100%" px={4} mt={5}>
      <Heading
        ref={headingRef}
        className={animate ? "heading-animation" : ""}
        fontSize={["2xl", "3xl", "4xl"]}
        mb={["20px", "30px"]}
        textAlign="center"
      >
        Open Vacancies
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={5}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Box
            key={index}
            bgColor="#FEFBEC"
            borderRadius="10px"
            p={4}
            fontSize={["sm", "md"]}
          >
            <Text fontWeight="bold" mb={2} fontSize={["lg", "xl"]}>
              Senior Full Stack Engineer
            </Text>
            <ul style={{ marginLeft: "12px" }}>
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>$65-85k, 0.5-1.50% equity share option</li>
            </ul>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OpenVacanciesSection;
