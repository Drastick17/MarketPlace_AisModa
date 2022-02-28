import React from 'react'

const Cart = () => {
  return (
    <div class="flex justify-center items-center">

      <div className='flex space-x-16 items-center justify-center my-20  p-16 w-4/5 h-full border rounded-3xl  '>


        <div className='flex flex-row'>
          <h1>My Cart</h1>
          <ul>
            <li></li>
          </ul>
        </div>

        <div>
          <h4>

            Order summary
          </h4>
          <div>
            <div>

              Total
            </div>
            <div>

              $1,150.00
            </div>
          </div>

          Checkout
          Secure Checkout
        </div>
      </div>

    </div>
  )
}

export default Cart