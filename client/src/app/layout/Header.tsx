import { AppBar, Switch, Toolbar, Typography } from "@material-ui/core";

interface Prop {
    darkMode: boolean;
    handleTheme: () => void;
}

export default function Header({darkMode, handleTheme}: Prop) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6'>RE-STORE</Typography>
                <Switch
                    checked={darkMode}
                    onChange={handleTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Toolbar>
        </AppBar>
    )
}