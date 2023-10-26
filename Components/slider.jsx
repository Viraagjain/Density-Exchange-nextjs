import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    raised: { opacity: 1, x: 0, rotate: -5, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Box width="100%" margin="auto" mt="55px">
        <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
          {() => (
            <Flex
              alignItems="center"
              flexDir={["column", "row"]}
              gap={["10px", "23px"]}
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : -50,
                }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", left: 0 }}
              >
                <Heading>Does this sound familiar...</Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 50,
                }}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", left: isVisible ? 0 : "100%" }}
              >
                <Image
                  src="/Images/img1.png"
                  alt="img1"
                  height="60px"
                  width="50px"
                />
              </motion.div>
            </Flex>
          )}
        </VisibilitySensor>
      </Box>

      <Flex
        margin="auto"
        width="100%"
        mt="20px"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={["20px", "5px"]}
      >
        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          whileHover="raised"
          width={["100%", "30%"]}
        >
          <Box
            bgColor="#D8F2FF"
            borderRadius="7px"
            padding={["20px", "30px"]}
            mb="20px"
          >
            😊
            <Text color="black" fontSize={["12px", "15px"]} fontWeight="bold">
              You argue with a colleague
            </Text>
            <Text fontSize={["10px", "12px"]}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          whileHover="raised"
          width={["100%", "30%"]}
        >
          <Box
            bgColor="#EEEBFE"
            borderRadius="7px"
            padding={["20px", "30px"]}
            mb="20px"
          >
            😀
            <Text color="black" fontSize={["12px", "15px"]} fontWeight="bold">
              You argue with a colleague
            </Text>
            <Text fontSize={["10px", "12px"]}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "raised" : "hidden"}
          whileHover="raised"
          width={["100%", "30%"]}
        >
          <Box
            bgColor="#6341EF"
            borderRadius="7px"
            padding={["20px", "30px"]}
            mb="20px"
          >
            🤨
            <Text color="black" fontSize={["12px", "15px"]} fontWeight="bold">
              You argue with a colleague
            </Text>
            <Text fontSize={["10px", "12px"]}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          whileHover="raised"
          width={["100%", "30%"]}
        >
          <Box
            bgColor="#FFEFD5"
            borderRadius="7px"
            padding={["20px", "30px"]}
            mb="20px"
          >
            😮
            <Text color="black" fontSize={["12px", "15px"]} fontWeight="bold">
              You argue with a colleague
            </Text>
            <Text fontSize={["10px", "12px"]}>
              You get angry and defensive, instead of staying open and working
              towards common grounds.
            </Text>
          </Box>
        </motion.div>
      </Flex>
    </>
  );
};

export default Slider;


