import Image from "next/image";
import Link from "next/link";

export default function HypertensionPage() {
  return (
    <section className="relative min-h-screen bg-amber-100 pb-12">
      {/* Purple curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-purple-500 rounded-t-[50%] -z-10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-24">
        <h1 className="text-5xl font-bold text-purple-900 mb-12">Hypertension</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Doctor Image - Left Side */}
          <div className="relative rounded-full overflow-hidden w-full h-[400px] md:h-[500px]">
            <Image 
              src="/hypertension.png" 
              alt="Doctor checking blood pressure" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          {/* Did You Know Section - Right Side */}
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Did You Know?</h2>
            
            <div className="relative">
              <div className="text-4xl text-pink-500 absolute -left-6 top-0">❝</div>
              <p className="text-lg text-purple-900 mb-4 pl-4">
                Hypertension, or high blood pressure, is often called the &lsquo;silent killer&rsquo; because it usually has no
                symptoms but can lead to serious health problems like heart disease and stroke if left untreated.
              </p>
              <div className="text-4xl text-pink-500 absolute right-0 bottom-0">❞</div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Image 
                src="/hypertension.svg" 
                alt="Blood pressure monitor" 
                width={80} 
                height={80}
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="#what-you-need-to-know" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            WHAT YOU NEED TO KNOW
          </Link>
          <Link href="#managing-at-work" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            MANAGING AT WORK
          </Link>
          <Link href="#medical-care-prevention" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            MEDICAL CARE & PREVENTION
          </Link>
        </div>
        
        {/* Content Sections */}
        <div className="space-y-16 text-black">
          {/* What You Need to Know Section */}
          <section id="what-you-need-to-know" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">What You Need to Know</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Hypertension is defined as blood pressure consistently above 130/80 mmHg. It affects nearly 1 in 3 adults
                and is more common in women after menopause.
              </p>
              <p className="text-lg">
                Risk factors specific to women include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hormonal birth control</li>
                <li>Pregnancy (preeclampsia)</li>
                <li>Menopause</li>
                <li>Stress and anxiety</li>
                <li>Family history</li>
              </ul>
              <p className="text-lg">
                Regular monitoring is essential as hypertension often has no symptoms until it causes damage to organs
                like the heart, brain, kidneys, and eyes.
              </p>
            </div>
          </section>
          
          {/* Managing at Work Section */}
          <section id="managing-at-work" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Managing at Work</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Managing hypertension in the workplace is crucial for maintaining your health and productivity.
              </p>
              <p className="text-lg">
                Workplace strategies include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Take regular breaks to stand and stretch</li>
                <li>Practice stress-reduction techniques like deep breathing</li>
                <li>Keep healthy snacks at your desk</li>
                <li>Stay hydrated with water instead of caffeinated beverages</li>
                <li>Use lunch breaks for short walks</li>
                <li>Consider requesting accommodations for regular blood pressure monitoring if needed</li>
              </ul>
              <p className="text-lg">
                Remember that managing your condition is protected under workplace health regulations.
              </p>
            </div>
          </section>
          
          {/* Medical Care & Prevention Section */}
          <section id="medical-care-prevention" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Medical Care & Prevention</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Regular medical care is essential for managing hypertension effectively.
              </p>
              <p className="text-lg">
                Prevention and treatment approaches include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular blood pressure screenings (at least annually)</li>
                <li>Following the DASH diet (rich in fruits, vegetables, whole grains, and low-fat dairy)</li>
                <li>Limiting sodium intake to less than 1,500 mg per day</li>
                <li>Regular physical activity (aim for 150 minutes per week)</li>
                <li>Maintaining a healthy weight</li>
                <li>Limiting alcohol consumption</li>
                <li>Not smoking</li>
                <li>Taking prescribed medications as directed</li>
              </ul>
              <p className="text-lg">
                Always consult with your healthcare provider before making significant lifestyle changes or starting new
                exercise routines.
              </p>
            </div>
          </section>
        </div>
        
        {/* Back to Conditions Button */}
        <div className="mt-12 text-center">
          <Link href="/conditions" className="inline-flex items-center text-purple-800 hover:text-pink-500 font-medium">
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