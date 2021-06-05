import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

function Home (){
  return(
  <>
    <h1>Home</h1>
    <Link to='/category'><Button color='violet'>Category</Button></Link>
    <Link to='/job'><Button color='violet'>Jobs</Button></Link>
    <Link to='/about'><Button color='violet'>About</Button></Link>
  </>
  )
}

export default Home
