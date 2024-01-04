import Header from "../components/Header/Header"
import MainContent from "../components/MainContent/MainContent"
import Navbar from "../components/Navbar/Navbar"

function Dashboard() {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <Navbar />
                    <MainContent />
                </div>
            </div>
        </>
    )
}

export default Dashboard