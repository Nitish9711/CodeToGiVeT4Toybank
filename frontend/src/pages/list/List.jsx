import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import EventDatatable from "../../components/eventDatatable/EventDatatable"

const List = ({ type }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {
          type === 'volunteer' ? <Datatable /> : <EventDatatable type={type}/>
        }
      </div>
    </div>
  )
}

export default List