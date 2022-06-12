import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards'

export default function ArrangedCards({ type, list }) {
    return (
        <div className="ArrangedCardsContainer">
            <Grid
                container
                spacing={3}
                sx={{
                    paddingLeft: "50px",
                }}
                justifyContent="center">
                {
                    list.map((event) => (
                        <Grid item xs={12} sm={6} md={4} key={event.id}>
                            <Cards type={type} data={event} category={event.eventMode === 'vitual' ? "Virtual Event" : "On Ground Event"}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}