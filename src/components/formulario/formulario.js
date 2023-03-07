import React from "react";
import { Flex, Box, Center, FormControl, Input, FormLabel, HStack, RadioGroup,Radio, Button, VStack, Textarea } from "@chakra-ui/react";
import "./styles.css"

function Formulario(){
    return(
            <Box  h='100vh'> 
            <Center
            as="header"
            color="white"
            bg="black"
            fontWeight="bold"
            fontSize='4xl'
            pb='8'
           >
            Contato
            </Center>
            <Flex
            align='center'
            justify='center'
            bg='black'
            h="calc(100vh - 300)"
            
            >
                <Center
                w="100%"
                maxW={840}
              
                color="white"
                top={180}
                position="absolute"
                borderRadius={5}
                p="6"
                boxShadow='0 1px 2px #ccc'>
                    <FormControl display='flex' flexDir='column' gap="4">
                        <VStack  spacing="4">
                            <Box  w="100%">
                                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                            <Input id="nome"/>
                            </Box>
                            <Box w="100%">
                                <FormLabel htmlFor="email">E-mail</FormLabel>
                                <Input id="email" type="email"/>
                            </Box>
                            </VStack>
                            
                            <VStack spacing="4">
                            <Box w="100%">
                                <FormLabel htmlFor="cel">Celular</FormLabel>
                                <Input id="cel" type="number" />
                            </Box>
                            <Box w="100%">
                                <Textarea placeholder="Deixe seu Comentário" >Deixe seu Comentário</Textarea>
                            </Box>
                            </VStack>
                            <VStack justify="center">
                                <Button 
                                w={240}
                                p="6"
                                type="submit"
                                bg="black"
                                border="2px"
                                color="white"
                                fontWeight="bold"
                                fontSize="xl"
                                mt="2"
                                _hover={{bg: '#1a53ff' }}>
                                    Enviar
                                </Button>
                    </VStack>





                    </FormControl>
                </Center>
                </Flex>
            </Box>

    )
}

export default Formulario;
