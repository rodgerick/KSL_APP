import {useHistory, useParams, useLocation, Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default () => {
    const { id } = useParams()
    const history = useHistory()
    const { name, listings, price } = useLocation()
    return(
        <>
          <Button onClick={()=> history.goBack()}>go back</Button>
          <Link to='/categories'><Button>go back</Button></Link>
          <h1>Listings: {listings.name}, Price: {price.name} has id {id}</h1>
          
          <h3></h3>
        </>
    )
}