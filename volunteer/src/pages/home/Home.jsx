import Navbar from '../../components/Navbar/Navbar'
import CardLayout from '../../components/CardLayout/CardLayout'

export default function Home() {
    return (
        <div className="homeContainer">
            <Navbar />
            <div className="allEventCards">
                <CardLayout />
            </div>
        </div>
    )
}
