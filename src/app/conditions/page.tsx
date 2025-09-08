import Image from "next/image";
import Link from "next/link";

export default function ConditionsPage() {
  return (
    <section className="relative min-h-screen bg-amber-100 pb-12">
      {/* Pink curved shape at the top */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-pink-500 rounded-b-[50%] -z-10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-24">
        <h1 className="text-5xl font-bold text-white text-center mb-16">Conditions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Hypertension Card */}
          <div className="bg-pink-200 rounded-lg p-8 flex flex-col items-center shadow-lg transform transition-transform hover:scale-105">
            <div className="w-32 h-32 mb-6">
              <Image 
                src="/hypertension.svg" 
                alt="Hypertension icon" 
                width={100} 
                height={100}
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-purple-900 mb-2 text-center">HYPERTENSION</h2>
            <Link 
              href="/conditions/hypertension" 
              className="mt-4 text-purple-700 hover:text-pink-500 font-medium"
            >
              Learn more
            </Link>
          </div>
          
          {/* Diabetes Card */}
          <div className="bg-cyan-100 rounded-lg p-8 flex flex-col items-center shadow-lg transform transition-transform hover:scale-105">
            <div className="w-32 h-32 mb-6">
              <Image 
                src="/diabetes.svg" 
                alt="Diabetes icon" 
                width={100} 
                height={100}
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-teal-800 mb-2 text-center">DIABETES</h2>
            <Link 
              href="/conditions/diabetes" 
              className="mt-4 text-teal-700 hover:text-teal-500 font-medium"
            >
              Learn more
            </Link>
          </div>
          
          {/* Thyroid Card */}
          <div className="bg-purple-200 rounded-lg p-8 flex flex-col items-center shadow-lg transform transition-transform hover:scale-105">
            <div className="w-32 h-32 mb-6">
              <Image 
                src="/thyroid.svg" 
                alt="Thyroid icon" 
                width={100} 
                height={100}
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-purple-900 mb-2 text-center">THYROID</h2>
            <Link 
              href="/conditions/thyroid" 
              className="mt-4 text-purple-700 hover:text-purple-500 font-medium"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}