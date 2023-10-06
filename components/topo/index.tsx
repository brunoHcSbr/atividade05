import {
    Box,
    Flex,
    HStack,
    IconButton, 
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi'
import { AiOutlineClose as CloseIcon } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Links = [
    { href: '/', texto: 'Página inicial'},
    { href: '/sobre', texto: 'Sobre'}, 
    { href: '/contato', texto: 'Contato'}
]

interface Props {
    href: string
    children: React.ReactNode
}

const Navlink = (props: Props) => {
    const { children, href } = props 
    return (
       <Link to={href}>
        <Box
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}>
            {children}
        </Box>
       </Link>
    )
}
 export default function Topo() {
    const {isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}> 
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing= {8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
            <Navlink href={link.href} key={link.texto}>{link. texto}</Navlink>
            ))}
            </HStack>
            </HStack>
            </Flex>
            {isOpen ? (
            <Box pb={4} display= {{ md: 'none' }}>
            <Stack as ={'nav'} spacing={4}>
            {Links. map((link) => (
            <Navlink href={link.href} key={link.texto}>{link.texto}</Navlink>
            ))}
            </Stack>
            </Box>
            ): null}
            </Box>
            </>
    )
 }