import Header from '../Components/Header'
import Breadcrumbs from '../Components/Breadcrumbs'
import Footer from '../Components/Footer'




const Departments = () => {
  return (
    <>
    <Header/>
      <Breadcrumbs 
      items={[
        { label: "Department"}
      ]}
      />

      
      
      <Footer/>
    </>
  )
}

export default Departments