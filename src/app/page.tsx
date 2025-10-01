import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/doctor.png"
                alt="Doctor with clipboard"
                width={400}
                height={400}
                className="rounded-tl-[450px] rounded-tr-[310px] rounded-br-[300px] rounded-bl-[350px] mx-auto"
                priority
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h1 className="quote-text mb-6">
                Because her heart, hormones, and health are all connected.
              </h1>
              <div className="space-y-4">
                <p className="text-purple-700">
                  Welcome to <span className="font-bold">She Matters</span>, an
                  initiative born out of a vital need—to prioritize and protect
                  the cardiovascular and reproductive health of women at every
                  life stage.
                </p>
                <p className="text-purple-700">
                  Here, we tackle often-overlooked risks like hypothyroidism,
                  diabetes, cardiovascular disease, and infertility—all through
                  a gender-sensitive, physician-centered lens.
                </p>
                <p className="text-purple-700">
                  This platform is designed to empower you—our healthcare
                  partners—with practical, evidence-based tools to make early
                  diagnoses, provide timely care, and influence better health
                  outcomes for your female patients.
                </p>
                <div className="pt-4">
                  <a
                    href="/conditions"
                    className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors"
                  >
                    Explore conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
