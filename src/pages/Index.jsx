import { Box, VStack, Text, Input, Button, HStack, useToast } from "@chakra-ui/react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleSendMessage = () => {
    if (input.trim() === "") {
      toast({
        title: "Message is empty.",
        description: "You need to write something to send a message.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, { text: input, sender: "user" }]);
    // Simulate AI response
    setTimeout(() => {
      setMessages((messages) => [...messages, { text: `Echo: ${input}`, sender: "bot" }]);
    }, 1000);
    setInput("");
  };

  return (
    <VStack spacing={4} p={5}>
      <Box w="100%" p={5} bg="black" borderRadius="lg">
        <Text fontSize="2xl" mb={4} fontWeight="bold" color="white">
          Lucy
        </Text>
        <VStack spacing={4} overflowY="auto" maxH="300px">
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} bg={message.sender === "user" ? "blue.200" : "green.200"} p={3} borderRadius="lg" fontSize="lg" fontWeight="medium">
              {message.text}
            </Box>
          ))}
        </VStack>
        <HStack mt={4}>
          <Input placeholder="Type your message here..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <Button colorScheme="blue" onClick={handleSendMessage}>
            <FaPaperPlane />
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Index;
