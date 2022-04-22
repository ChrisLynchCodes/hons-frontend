import React from 'react'

export const FAQPage = () => {
    return (

     

            <div>
                <section className="text-gray-700">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                                Frequently Asked Question
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The most common questions about how our business works and what
                                can do for you.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How long does it take to ship my order?
                                    </summary>

                                    <span>
                                        <h3 className='text-primary'>Orders are usually shipped within 1-2 business days after placing the order.</h3>
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                        When will my order arrive?
                                    </summary>

                                    <span>

                                        <h3 className='text-primary'>Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation email you’ve received.</h3>

                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        How do I track my order?
                                    </summary>

                                    <span>
                                        <h3 className='text-primary'>Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.</h3>
                                    </span>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        What’s your return policy?
                                    </summary>

                                    <span className="px-4 py-2">

                                        <h3 className='text-primary'>We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.</h3>
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Do you ship internationally?
                                    </summary>

                                    <span className="px-4 py-2">

                                        <h3 className='text-primary'>We currently ship to the, UK and Europe.</h3>
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                        Can I receive a refund?
                                    </summary>

                                    <span className="px-4 py-2">
                                        <h3 className='text-primary'>If you are unhappy with the product you’ve received, you can get a refund.</h3>
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
     

    )
}


//TODO create and fill in Contact page
//TODO create and fill in terms of use page
//TODO create fill in privacy policy page
//TODO create fill in cookie policy page