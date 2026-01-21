import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Doctors = () => {

  const parms = useParams();
  
  return (
    <>
    <Header/>

      <Breadcrumbs 
      items={[
        { label: "Doctor"}
      ]}
      />
    <Footer/>
    </>
  )
}

export default Doctors