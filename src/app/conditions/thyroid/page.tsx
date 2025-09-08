import Image from "next/image";
import Link from "next/link";

export default function ThyroidPage() {
  return (
    <section className="relative min-h-screen bg-amber-100 pb-12">
      {/* Purple curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-purple-500 rounded-t-[50%] -z-10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-24">
        <h1 className="text-5xl font-bold text-purple-900 mb-12">Thyroid</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Doctor Image - Left Side */}
          <div className="relative rounded-full overflow-hidden w-full h-[400px] md:h-[500px]">
            <Image 
              src="/doctor.png" 
              alt="Doctor with patient" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          {/* Did You Know Section - Right Side */}
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Did You Know?</h2>
            
            <div className="relative">
              <div className="text-4xl text-purple-500 absolute -left-6 top-0">❝</div>
              <p className="text-lg text-purple-900 mb-4 pl-4">
                Women are five to eight times more likely than men to have thyroid problems. One in eight women will develop thyroid problems during her lifetime, particularly after pregnancy and menopause.
              </p>
              <div className="text-4xl text-purple-500 absolute right-0 bottom-0">❞</div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Image 
                src="/thyroid.svg" 
                alt="Thyroid gland" 
                width={80} 
                height={80}
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="#what-you-need-to-know" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            WHAT YOU NEED TO KNOW
          </Link>
          <Link href="#managing-at-work" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            MANAGING AT WORK
          </Link>
          <Link href="#medical-care-prevention" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            MEDICAL CARE & PREVENTION
          </Link>
        </div>
        
        {/* Content Sections */}
        <div className="space-y-16">
          {/* What You Need to Know Section */}
          <section id="what-you-need-to-know" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">What You Need to Know</h2>
            <div className="space-y-4">
              <p className="text-lg">
                The thyroid is a butterfly-shaped gland in the neck that produces hormones regulating metabolism, energy, and mood. Common thyroid disorders include hypothyroidism (underactive thyroid) and hyperthyroidism (overactive thyroid).
              </p>
              <p className="text-lg">
                Women-specific factors that affect thyroid health include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Autoimmune diseases (more common in women)</li>
                <li>Pregnancy and postpartum period</li>
                <li>Menopause</li>
                <li>Stress and adrenal fatigue</li>
                <li>Nutritional deficiencies (especially iodine and selenium)</li>
              </ul>
              <p className="text-lg">
                Symptoms of thyroid disorders can vary widely and may include fatigue, weight changes, temperature sensitivity, mood changes, irregular periods, and changes in hair, skin, and nails.
              </p>
            </div>
          </section>
          
          {/* Managing at Work Section */}
          <section id="managing-at-work" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Managing at Work</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Thyroid conditions can affect your energy, focus, and comfort at work, but with proper management, you can maintain productivity and well-being.
              </p>
              <p className="text-lg">
                Workplace strategies include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep your workspace at a comfortable temperature</li>
                <li>Take short breaks to move around if you experience stiffness</li>
                <li>Use a reminder system for medication</li>
                <li>Keep healthy snacks available for energy management</li>
                <li>Practice stress-reduction techniques</li>
                <li>Consider flexible work arrangements during symptom flare-ups</li>
              </ul>
              <p className="text-lg">
                If your thyroid condition significantly impacts your work, you may be eligible for reasonable accommodations under disability protection laws.
              </p>
            </div>
          </section>
          
          {/* Medical Care & Prevention Section */}
          <section id="medical-care-prevention" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Medical Care & Prevention</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Regular medical care is essential for managing thyroid conditions effectively.
              </p>
              <p className="text-lg">
                Prevention and management approaches include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular thyroid function tests as recommended by your healthcare provider</li>
                <li>Taking thyroid medications as prescribed (usually on an empty stomach)</li>
                <li>Maintaining a diet with adequate iodine, selenium, zinc, and other nutrients</li>
                <li>Regular moderate exercise</li>
                <li>Stress management techniques</li>
                <li>Avoiding environmental toxins when possible</li>
                <li>Discussing medication interactions with your healthcare provider</li>
              </ul>
              <p className="text-lg">
                Women planning pregnancy should have their thyroid function checked, as thyroid hormones are crucial for fetal development, especially brain development.
              </p>
            </div>
          </section>
        </div>
        
        {/* Back to Conditions Button */}
        <div className="mt-12 text-center">
          <Link href="/conditions" className="inline-flex items-center text-purple-800 hover:text-purple-500 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Conditions
          </Link>
        </div>
      </div>
    </section>
  );
}