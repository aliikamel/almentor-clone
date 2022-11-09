import react from "react";
import Header from "./Header"
import HomeBanner from "./HomeBanner";
import Picks from "./Picks";
import MainArea from "./MainArea";

function App(){
    return(
        <div>
            <Header />
            <HomeBanner />
            <Picks />
            <MainArea />
        </div>
    )
}

export default App