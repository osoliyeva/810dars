import { Box, Grid, IconButton, List, Paper, Stack, TextField, Typography } from "@mui/material"
import ChatItem from "../components/ChatItem"
import { ArrowBackIosSharp, Send } from "@mui/icons-material"
import Message from "./Message"



const Chats = () => {
    return (
        <Grid container sx={{height:"100vh"}} >
            <Grid sm={4}>
                <List sx={{   }}>
                    <ChatItem/>
                    <ChatItem/>
                    <ChatItem/>

                </List>
                
            </Grid>
            
            <Grid sm={8} >
                <Paper sx={{height:"100vh", display:"flex", flexDirection:"column"}} >
                    {/* chat header */}
                    <Paper >
                        <Box>
                            <Paper sx={{ p: 2 }}>
                                <Box display={"flex"} alignItems={"center"} gap={1}>
                                    <IconButton sx={{display:{sm:"none"}}}>
                                        <ArrowBackIosSharp color="primary" />
                                    </IconButton>
                                    <Typography>
                                        Olivia
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Paper>

                
                    <Paper >
                        <Stack justifyContent={"flex-end"} spacing={2} sx={{p:2, flex:1}}>
                            <Message sender={ "me"} />
                            <Message/>
                            <Message sender={ "me"}/>
                            <Message />
                        </Stack>
                        <Box display={"flex"} m={2}>
                            <TextField
                                fullWidth
                                label="message..."
                                variant="outlined"
                                placeholder="message..."
                                size="small"
                            />
                            <IconButton color="primary" >
                                <Send/>
                            </IconButton>
                        </Box>
                    </Paper>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default Chats