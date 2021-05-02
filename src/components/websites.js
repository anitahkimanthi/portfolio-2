import {
    Card
    // CardHeader,
    // CardContent,
    // CardMedia
} from '@material-ui/core';
import {projects} from './styles'

function websites (){
    const classes = projects();

    return(
        <div className="websites">
            
            <Card className={classes.card}>

            </Card>
        </div>
    )
}

export default websites;