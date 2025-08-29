import { Stars } from "@mui/icons-material";
import { FaStar } from "react-icons/fa6";
import Contact from "../../helpers/components/Contact";
import Header from "../../helpers/components/Header";

const REVIEWS = [
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
  {
    name: "Muhammed Shabeer",
    role: "CPA Student",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

        <Header />
      {/* Gradient header bar */}
      <header className="h-32 mt-28 w-full bg-gradient-to-r from-[#001333] to-[#0e4fb5] flex items-center justify-center">
        <h1 className="text-3xl md:text-[40px] font-bold text-white text-balance">
          Reviews
        </h1>
      </header>

      {/* Grid of review cards */}
      <section className="mx-auto md:px-16 px-4  py-10">
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-3 md:gap-10 ">
            {REVIEWS.map((review) => (
              <article className="relative rounded-xl bg-white p-6 shadow-xl  mt-7">
                {/* Overlapping avatar in the top-left with white ring */}
                <div className="absolute -top-6 left-6 ">
                  <img
                    src={"/team/Screenshot 2025-08-22 at 3.50.57 PM 2.png"}
                    alt={review.avatarAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full ring-1 ring-white shadow-xl"
                  />
                </div>

                {/* Body */}
                <div className="mt-4">
                  <p className="mt-4 text-sm leading-6 text-gray-800 font-semibold text-pretty">
                    {review.text}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-800 -mt-1">{review.role}</div>
                    </div>

                    {/* Stars on the right, slightly lowered */}
                    <div className="translate-y-1 flex">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar className="text-[#e0b43f]" key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact/>
    </main>
  );
}
