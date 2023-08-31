import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/system"

import { Navbar, VideoDetail, ChannelDetail, Feed, SearchFeed } from './components'

const App = () => ( 
    <div>
        <BrowserRouter>
            <Box sx={{backgroundColor: '#000'}}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Feed />}/>
                    <Route path="/video/:id" exact element={<VideoDetail />}/>
                    <Route path="/channel/:id" exact element={<ChannelDetail />}/>
                    <Route path="/search/:searchTerm" exact element={<SearchFeed />}/>                    
                </Routes>
            </Box>
        </BrowserRouter>
    </div>  
);

export default App