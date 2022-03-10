import React from "react";
const ProductView = () => {
  return (
    <>
    <div className="grid items-center justify-center min-h-screen w-screen">
      <div className="flex flex-col sm:flex-row items-center gap-8 h-fit  p-6 m-6">
        <div className="relative w-full sm:w-80">
          <div className="flex w-60 mx-auto overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="A black chair with wooden legs"
              className="min-w-full"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex w-full items-center justify-between ">
            <button
              onclick="goPrev()"
              aria-label="slide back"
              className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
            >
              <svg
                className="w-10 h-10 lg:w-16 lg:h-16"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 16L24 32L40 48"
                  stroke="#1F2937"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
                  onclick="goNext()"
                  aria-label="slide forward"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                >
                  <svg
                    className="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 16L40 32L24 48"
                      stroke="#1F2937"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
            </button>
          </div>
        </div>
        <div className="max-w-[300px]">
        <h1 className="text-2xl text-gray-800 capitalize">Bar Stool</h1>
              <p className="text-base leading-normal text-gray-600 mt-2">
                Description: You don't just want to be comfortable sitting in a
                bar stool—you want to be comfortable shimmying it up to the bar,
                closer to your lover, or back slightly to include a third person
                in the conversation.
              </p>
              <p className="text-2xl font-light italic text-red-600  mt-4">$300</p>
              <div className="flex flex-col">
                <label htmlFor="cuantity">Quantity</label>
                <input
                  type="number"
                  name="cuantity"
                  defaultValue="1"
                  min={0}
                  className="border py-2 px-4 w-1/5 "
                />
              </div>

              <div className="flex items-center flex-col  space-y-3 mt-8 ">
                <button
                  className="min-w-[240px] border border-gray-800 leading-none
                  text-base  text-gray-300 capitalize
                  py-3 bg-red-600 hover:bg-opacity-90 transition-all duration-300 hover:text-white"
                >
                  Add to cart
                </button>
                <button
                  className="min-w-[240px] border border-gray-800 leading-none
                  text-base capitalize  
                  py-3 bg-gray-900 hover:bg-gray-800 text-gray-50  hover:text-white"
                >
                  buy now
                </button>
              </div>
              <div className="mt-6">
                <button className="text-xl underline  text-gray-400 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors duration-200">
                  add to wishlist
                </button>
              </div>
            </div>
      </div>
    </div> 
      {/*
     <div>
      <div className=" md:py-12 lg:px-20 py-9 px-4 mx-auto mx-24">

        <div id="viewerBox" className="mt-16 md:p-6 p-4 bg-white ">

          <div className="mt-3 md:mt-4 flex items-strech justify-center lg:space-x-8">
    
            <div className="w-2/4 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
              <div className="flex items-center">
                <button onclick="goPrev()" aria-label="slide back" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                  <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 16L24 32L40 48" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="slider">
                <div className="slide-ana lg:relative">
                  <div className="flex" >
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="A black chair with wooden legs" className="w-full h-full" />
                  </div>

                </div>
              </div>
              <div className="flex items-center">
                <button onclick="goNext()" aria-label="slide forward" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                  <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 16L40 32L24 48" stroke="#1F2937" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
       

            <div className="lg:w-1/3 flex flex-col   mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 className="text-2xl text-gray-800">Bar Stool</h1>
          <p className="text-base leading-normal text-gray-600 mt-2">Description: You don't just want to be comfortable sitting in a bar stool—you want to be comfortable shimmying it up to the bar, closer to your lover, or back slightly to include a third person in the conversation.</p>
              <p className="text-2xl font-light italic text-red-600  mt-4">$300</p>
              <div className="flex flex-col">
                <label htmlFor="cuantity">Quantity</label>
                <input type="number" name="cuantity" id="" defaultValue="1" className="border py-2 px-4 w-1/4 " />
              </div>

              <div className="flex items-center flex-col  space-y-3 mt-8 ">
              <button
                  className="w-full border border-gray-800 leading-none
                  text-base  text-gray-800 
                  py-3 bg-red-600 hover:bg-opacity-80 text-gray-300  hover:text-white">Add to cart</button>
                <button
                  className="w-full border border-gray-800 leading-none
                  text-base  
                  py-3 bg-gray-900 hover:bg-gray-800 text-gray-50  hover:text-white">buy now</button>

              </div>
              <div className="mt-6">
                <button className="text-xl underline text-gray-800 hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">add to wishlist</button>
              </div>
            </div>
          </div>


        </div>
      </div>



    </div>
     */}
    </>
  );
};

export default ProductView;

{
  /* <script>// more free and premium Tailwind CSS components at https://tailwinduikit.com/ */
}
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
//   document.getElementById("viewerButton").classNameList.add("hidden");
//   document.getElementById("viewerBox").classNameList.remove("hidden");
// }
// function closeView() {
//   document.getElementById("viewerBox").classNameList.add("hidden");
//   document.getElementById("viewerButton").classNameList.remove("hidden");
// }

// </script>
