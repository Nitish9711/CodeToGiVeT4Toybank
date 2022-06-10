import Grid from '@mui/material/Grid';
import Cards from '../Cards/Cards'

export default function ArrangedCards({ type }) {
    return (
        <div className="ArrangedCardsContainer">
            <Grid
                container
                spacing={3}
                sx={{
                    paddingLeft: "50px",
                }}
                justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Cards type={type} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards type={type} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards type={type} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards type={type} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards type={type} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Cards type={type} />
                </Grid>
            </Grid>
        </div>
    )
}