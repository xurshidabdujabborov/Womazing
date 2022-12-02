import React from 'react'
import { Grid, Container } from '@mui/material'
import car from "../../assets/img/card 3.png"
import "./Center.css"
function Center() {
    return (
        <div className='Center'>
            <Container maxWidth="xl">
                <h2 className="title">Команда мечты Womazing</h2>
                <Grid container spacing={"5"} alignItems={"center"}>
                    <Grid items md={8} sm={12} xs={12}>
                        <img src={car} alt="" />
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="right">
                            <h4>Для каждой</h4>
                            <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                                <br />
                                <br />

                                Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                                <a href="#">Подробнее о бренде</a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Center