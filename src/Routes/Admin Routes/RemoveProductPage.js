import React from 'react'
import { WarningAlert } from '../../Components/Layout/WarningAlert'
import { RemoveProduct } from '../../Components/Products/RemoveProduct'

export const RemoveProductPage = () => {
    return (
        <>

            <WarningAlert text="This will be permenant" />

            <RemoveProduct />


        </>
    )
}
