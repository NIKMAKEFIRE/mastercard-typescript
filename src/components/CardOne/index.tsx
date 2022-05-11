import React from 'react'
import {
    Container, CardComponent,
    CardInner, CardBalance,
    CardCurrentBalance, CardPrice,
    CardNumber, CardNumberComponent,
    CardDate
} from '../../styles/styles'
import MClogo from '../../assets/images/mastercard_logo.svg'

const CardOne = () => {
    return (
        <>
            <Container>
                <CardComponent>
                    <CardInner>
                        <CardBalance>
                            <div>
                                <CardCurrentBalance>Current Balance</CardCurrentBalance>
                                <CardPrice>$5,750,20</CardPrice>
                            </div>
                            <img src={MClogo} alt="img" className="card__images" />
                        </CardBalance>
                        <CardNumberComponent>
                            <CardNumber>5282 3456 7890 1289</CardNumber>
                            <CardDate>09/25</CardDate>
                        </CardNumberComponent>
                    </CardInner>
                </CardComponent>
            </Container>
        </>
    )
}

export default CardOne