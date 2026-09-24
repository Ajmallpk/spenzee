// import {
//   SiStripe,
//   SiRazorpay,
//   SiShopify,
//   SiVercel,
//   SiMongodb,
// } from "react-icons/si"

// import { FaAws } from "react-icons/fa"

// const TrustedBy = () => {
//   return (
//     <section className="w-full border-y border-slate-200 bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

//         {/* Heading */}
//         <p className="text-center text-xs font-bold tracking-wide text-slate-500">
//           TRUSTED BY THOUSANDS
//         </p>

//         {/* Logos */}
//         <div className="mt-8 grid grid-cols-2 items-center gap-y-8 sm:grid-cols-3 md:grid-cols-6 md:gap-8 px-4 md:px-10 lg:px-16">

//           {/* Stripe */}
//           <div className="flex flex-col items-center gap-2">
//             <SiStripe className="h-8 w-auto text-slate-700" />

//             <span className="text-sm font-semibold text-slate-600">
//               Stripe
//             </span>
//           </div>

//           {/* Razorpay */}
//           <div className="flex flex-col items-center gap-2">
//             <SiRazorpay className="h-7 w-auto text-slate-700" />

//             <span className="text-sm font-semibold text-slate-600">
//               Razorpay
//             </span>
//           </div>

//           {/* Shopify */}
//           <div className="flex flex-col items-center gap-2">
//             <SiShopify className="h-9 w-auto text-slate-700" />

//             <span className="text-sm font-semibold text-slate-600">
//               Shopify
//             </span>
//           </div>

//           {/* AWS */}
//           <div className="flex flex-col items-center gap-2">
//             <FaAws className="h-9 w-auto text-slate-700" />

//             <span className="text-sm font-semibold text-slate-600">
//               AWS
//             </span>
//           </div>

//           {/* Vercel */}
//           <div className="flex flex-col items-center gap-2">
//             <SiVercel className="h-8 w-auto text-slate-700" />

//             <span className="text-sm font-semibold text-slate-600">
//               Vercel
//             </span>
//           </div>

//           {/* MongoDB */}
//           <div className="flex flex-col items-center gap-2">
//             <SiMongodb className="h-9 w-auto text-slate-700" />

//             <span className="text-sm font-semibold text-slate-600">
//               MongoDB
//             </span>
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default TrustedBy




import {
  SiStripe,
  SiRazorpay,
  SiShopify,
  SiVercel,
  SiMongodb,
} from "react-icons/si"

import { FaAws } from "react-icons/fa"

const TrustedBy = () => {
  return (
    <section className="w-full border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">

        {/* Heading */}
        <p className="text-center text-xs font-bold tracking-wide text-slate-500">
          TRUSTED BY THOUSANDS
        </p>

        {/* Logos */}
        <div className="mt-8 grid grid-cols-2 items-center gap-y-8 px-4 sm:grid-cols-3 md:grid-cols-6 md:gap-8 md:px-10 lg:px-16">

          {/* Stripe */}
          <div
            className="
              group flex cursor-pointer flex-col items-center gap-2
              rounded-xl px-5 py-3
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-sm
            "
          >
            <SiStripe
              className="
                h-8 w-auto text-slate-700
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:text-slate-900
              "
            />

            <span
              className="
                text-sm font-semibold text-slate-600
                transition-colors duration-300
                group-hover:text-slate-900
              "
            >
              Stripe
            </span>
          </div>

          {/* Razorpay */}
          <div
            className="
              group flex cursor-pointer flex-col items-center gap-2
              rounded-xl px-5 py-3
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-sm
            "
          >
            <SiRazorpay
              className="
                h-7 w-auto text-slate-700
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:text-slate-900
              "
            />

            <span
              className="
                text-sm font-semibold text-slate-600
                transition-colors duration-300
                group-hover:text-slate-900
              "
            >
              Razorpay
            </span>
          </div>

          {/* Shopify */}
          <div
            className="
              group flex cursor-pointer flex-col items-center gap-2
              rounded-xl px-5 py-3
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-sm
            "
          >
            <SiShopify
              className="
                h-9 w-auto text-slate-700
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:text-slate-900
              "
            />

            <span
              className="
                text-sm font-semibold text-slate-600
                transition-colors duration-300
                group-hover:text-slate-900
              "
            >
              Shopify
            </span>
          </div>

          {/* AWS */}
          <div
            className="
              group flex cursor-pointer flex-col items-center gap-2
              rounded-xl px-5 py-3
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-sm
            "
          >
            <FaAws
              className="
                h-9 w-auto text-slate-700
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:text-slate-900
              "
            />

            <span
              className="
                text-sm font-semibold text-slate-600
                transition-colors duration-300
                group-hover:text-slate-900
              "
            >
              AWS
            </span>
          </div>

          {/* Vercel */}
          <div
            className="
              group flex cursor-pointer flex-col items-center gap-2
              rounded-xl px-5 py-3
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-sm
            "
          >
            <SiVercel
              className="
                h-8 w-auto text-slate-700
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:text-slate-900
              "
            />

            <span
              className="
                text-sm font-semibold text-slate-600
                transition-colors duration-300
                group-hover:text-slate-900
              "
            >
              Vercel
            </span>
          </div>

          {/* MongoDB */}
          <div
            className="
              group flex cursor-pointer flex-col items-center gap-2
              rounded-xl px-5 py-3
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-sm
            "
          >
            <SiMongodb
              className="
                h-9 w-auto text-slate-700
                transition-all duration-300 ease-out
                group-hover:scale-110
                group-hover:text-slate-900
              "
            />

            <span
              className="
                text-sm font-semibold text-slate-600
                transition-colors duration-300
                group-hover:text-slate-900
              "
            >
              MongoDB
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TrustedBy