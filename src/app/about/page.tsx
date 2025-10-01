import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="bg-amber-100 py-12 relative overflow-hidden">
            {/* Pink curved shape in top-right corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-bl-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden">
              <Image 
                src="/meeting.png" 
                alt="Women in a meeting" 
                width={400} 
                height={400} 
                className="rounded-tl-[250px] rounded-tr-[310px] rounded-br-[400px] rounded-bl-[450px] mx-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl font-bold text-purple-700 mb-6">About us</h1>
            <div className="space-y-4">
              <p className="text-purple-700">
                <span className="font-bold">She Matters</span> was created with one clear purpose: to put women&apos;s health at the 
                forefront. Our initiative recognizes the urgent need to prioritize and protect women&apos;s 
                cardiovascular and reproductive health across every stage of life.
              </p>
              <p className="text-purple-700">
                Too often, conditions like hypothyroidism, diabetes, cardiovascular disease, and 
                infertility are underdiagnosed, undertreated, or overlooked. At <span className="font-bold">She Matters</span>, we 
                address these challenges through a gender-sensitive and physician-centered 
                approach, ensuring that women receive the care and attention they deserve.
              </p>
              <p className="text-purple-700">
                We are committed to empowering healthcare professionals with practical, evidence-
                based resources designed to:
              </p>
              <ul className="list-disc pl-8 text-purple-700">
                <li>Enable earlier and more accurate diagnoses</li>
                <li>Support timely and effective interventions</li>
                <li>Improve long-term health outcomes for women</li>
              </ul>
              <p className="text-purple-700 mt-4">
                Together, we can build a future where every woman&apos;s health truly matters.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-colors">
                  Contact Us!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}