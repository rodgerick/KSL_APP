import { Link } from "react-router-dom"
import { Button } from "semantic-ui-react"

export default  () => {
    return(
        <>
          <h1>Home</h1>
          <Link to='/category'><Button>Category</Button></Link>
          <Link to='/job'><Button>Job</Button></Link>
          <Link to='/about'><Button>About</Button></Link>
        </>
    )
}

