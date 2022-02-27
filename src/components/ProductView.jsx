import React from 'react'
const ProductView = () => {
  return (
    <div>
      <div class=" md:py-12 lg:px-20 py-9 px-4 mx-auto mx-24">

        <div id="viewerBox" class="mt-16 md:p-6 p-4 bg-white ">

          <div class="mt-3 md:mt-4 flex items-strech justify-center lg:space-x-8">
            {/* img */}
            <div class="w-2/4 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
              <div class="flex items-center">
                <button onclick="goPrev()" aria-label="slide back" class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                  <svg class="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 16L24 32L40 48" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div class="slider">
                <div class="slide-ana lg:relative">
                  <div class="flex" >
                    <img src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png" alt="A black chair with wooden legs" class="w-full h-full" />
                  </div>

                </div>
              </div>
              <div class="flex items-center">
                <button onclick="goNext()" aria-label="slide forward" class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                  <svg class="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 16L40 32L24 48" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            {/* img */}

            <div class="lg:w-1/3 flex flex-col   mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 class="text-2xl text-gray-800">Bar Stool</h1>
          <p class="text-base leading-normal text-gray-600 mt-2">Description: You don't just want to be comfortable sitting in a bar stool—you want to be comfortable shimmying it up to the bar, closer to your lover, or back slightly to include a third person in the conversation.</p>
              <p class="text-2xl font-light italic text-red-600  mt-4">$300</p>
              <div class="flex flex-col">
                <label htmlFor="cuantity">Quantity</label>
                <input type="number" name="cuantity" id="" defaultValue="1" class="border py-2 px-4 w-1/4 " />
              </div>

              <div class="flex items-center flex-col  space-y-3 mt-8 ">
              <button
                  class="w-full border border-gray-800 leading-none
                  text-base  text-gray-800 
                  py-3 bg-red-600 hover:bg-opacity-80 text-gray-300  hover:text-white">Add to cart</button>
                <button
                  class="w-full border border-gray-800 leading-none
                  text-base  
                  py-3 bg-gray-900 hover:bg-gray-800 text-gray-50  hover:text-white">buy now</button>

              </div>
              <div class="mt-6">
                <button class="text-xl underline text-gray-800 hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">add to wishlist</button>
              </div>
            </div>
          </div>


        </div>
      </div>



    </div>
  )
}

export default ProductView

{/* <script>// more free and premium Tailwind CSS components at https://tailwinduikit.com/ */ }
// let slides = document.querySelectorAll(".slide-ana>div");
// let slideSayisi = slides.length;
// let prev = document.getElementById("prev");
// let next = document.getElementById("next");
// for (let index = 0; index < slides.length; index++) {
//   const element = slides[index];
//   element.style.transform = "translateX(" + 100 * index + "%)";
// }
// let loop = 0 + 1000 * slideSayisi;

// function goNext() {
//   loop++;
//   for (let index = 0; index < slides.length; index++) {
//     const element = slides[index];
//     element.style.transform =
//       "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
//   }
// }

// function goPrev() {
//   loop--;
//   for (let index = 0; index < slides.length; index++) {
//     const element = slides[index];
//     element.style.transform =
//       "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
//   }
// }

// function openView() {
//   document.getElementById("viewerButton").classList.add("hidden");
//   document.getElementById("viewerBox").classList.remove("hidden");
// }
// function closeView() {
//   document.getElementById("viewerBox").classList.add("hidden");
//   document.getElementById("viewerButton").classList.remove("hidden");
// }

// </script>