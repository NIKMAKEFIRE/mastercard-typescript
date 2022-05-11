import React from 'react'
import {
    Container, CardComponent,
    CardTwoInner, CardInfo,
    DateNumber, Date,
    CardCVV, CVV, CVVNumber
} from '../../styles/styles'
import whiteMC from '../../assets/images/master-white.svg'
import chip from '../../assets/images/chip.svg'

const CardTwo = () => {
    return (
        <>
            <Container>
                <CardComponent>
                    <CardTwoInner>
                        <img src={whiteMC} alt="img" className="card__img" />
                        <CardInfo>
                            <div>
                                <Date>Date</Date>
                                <DateNumber>09/25</DateNumber>
                            </div>
                            <CardCVV>
                                <CVV>Date</CVV>
                                <CVVNumber>09/25</CVVNumber>
                            </CardCVV>
                        </CardInfo>
                        <img src={chip} alt="img" className="card__chip" />
                    </CardTwoInner>
                </CardComponent>
            </Container>
        </>
    )
}

export default CardTwo