import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

interface Prop {
    darkMode: boolean;
    handleTheme: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': { color: 'grey.500' },
    '&.active': { color: 'text.secondary' }
}

export default function Header({ darkMode, handleTheme }: Prop) {
    const {basket} = useStoreContext();
    const itemsCount = basket?.items.reduce((acc, item) => acc + item.quantity, 0);
    
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink} exact to='/' sx={{ color: 'inherit', textDecoration: 'none' }}>
                        RE-STORE
                    </Typography>
                    <Switch checked={darkMode} onChange={handleTheme} inputProps={{ 'aria-label': 'controlled' }} />
                </Box>
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={itemsCount} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}