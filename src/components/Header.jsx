
import { Box,Menu,MenuButton,MenuItem,MenuList,Text,Button,useDisclosure,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Input } from "@chakra-ui/react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from '@material-ui/icons/Search';
import {React} from "react";

const Header = () => {


  //states
  const { isOpen, onOpen, onClose } = useDisclosure()

  //functions

  //component
  return (
    <Box width="100vw" height="8rem" padding="2rem 0px" display='flex' justifyContent='center' alignItems='center'>
      <Text width='80%' textAlign='center'>Symbol</Text>
      <Menu maxWidth='5rem'>
        <MenuButton as={Button} padding='5px 10px' rightIcon={<KeyboardArrowDownIcon />}>
          Act
        </MenuButton>
        <MenuList padding='0' minWidth='0' width='6rem'>
          <MenuItem>
            <Text
              fontFamily="heading"
              fontWeight="600"
              textAlign="center"
              fontSize="1.5rem"
              margin="0px auto"
            >
              &#8377;
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              fontFamily="heading"
              fontWeight="600"
              textAlign="center"
              fontSize="1.5rem"
              margin="0px auto"
            >
              &#x24;
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              fontFamily="heading"
              fontWeight="600"
              textAlign="center"
              fontSize="1.5rem"
              margin="0px auto"
            >
              &euro;
            </Text>
          </MenuItem>
          <MenuItem>
            <Text
              fontFamily="heading"
              fontWeight="600"
              textAlign="center"
              fontSize="1.5rem"
              margin="0px auto"
            >
              &#8381;
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Button colorScheme='teal' onClick={onOpen} margin='0px 0.5rem' >
        <SearchIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign='center' fontSize='1.5rem'>Search coin</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose} backgroundColor='red.800' color='white' _hover={{backgroundColor:'red.900'}}>
              Cancel
            </Button>
            <Button backgroundColor='green.800' color='white' _hover={{backgroundColor:'green.900'}}>Search</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
