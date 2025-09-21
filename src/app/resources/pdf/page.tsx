import Image from "next/image";

export default function PDFResourcesPage() {
  {
    return (
      <section className="relative min-h-screen bg-amber-100 pb-12">
        {/* Pink curved shape at the top */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-pink-500 rounded-b-[50%] -z-10"></div>

        <div className="container mx-auto px-4 pt-16 pb-24">
          <h1 className="text-5xl font-bold text-purple-800 text-center mb-16">
            PDF Resources
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left side - Customer Support Image */}
            <div className="relative rounded-full overflow-hidden h-[400px] md:h-[500px]">
              <Image
                src="/doctor.png"
                alt="Customer support representatives"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded-l-full"
              />
            </div>

            {/* Right side - PDF Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
              {/* Hypertension PDF Card */}
              <div className="bg-pink-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="relative">
                  <Image
                    src="/pdf-hypertension.svg"
                    alt="Woman working out at her desk"
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                    <a
                      href="/pdfs/sample-local-pdf.pdf"
                      download="sample-local-pdf.pdf"
                      className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-lg font-bold transition-colors duration-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">
                    Desk-Friendly Workouts to Lower Blood Pressure in 10 Minutes
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="uppercase text-xs font-bold text-purple-700">
                    HYPERTENSION
                  </div>
                </div>
              </div>

              {/* Diabetes PDF Card */}
              <div className="bg-cyan-100 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="relative">
                  <Image
                    src="/pdf-diabetes.svg"
                    alt="Woman packing a healthy lunch"
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                    <a
                      href="/pdfs/sample-local-pdf.pdf"
                      download="sample-local-pdf.pdf"
                      className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-lg font-bold transition-colors duration-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-teal-800 mb-2">
                    Packing Smart: Healthy Lunches for Women with Prediabetes
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="uppercase text-xs font-bold text-teal-700">
                    DIABETES
                  </div>
                </div>
              </div>

              {/* Thyroid PDF Card */}
              <div className="bg-purple-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="relative">
                  <Image
                    src="/pdf-thyroid.svg"
                    alt="Woman experiencing brain fog"
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                    <a
                      href="/pdfs/sample-local-pdf.pdf"
                      download="sample-local-pdf.pdf"
                      className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full text-lg font-bold transition-colors duration-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">
                    Brain Fog at Work? It Might Be Your Thyroid
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="uppercase text-xs font-bold text-purple-700">
                    THYROID
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
