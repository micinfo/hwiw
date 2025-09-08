import Image from "next/image";
import Link from "next/link";

export default function DiabetesPage() {
  return (
    <section className="relative min-h-screen bg-amber-100 pb-12">
      {/* Teal curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-teal-500 rounded-t-[50%] -z-10"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-24">
        <h1 className="text-5xl font-bold text-teal-800 mb-12">Diabetes</h1>
        
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
            <h2 className="text-3xl font-bold text-teal-700 mb-6">Did You Know?</h2>
            
            <div className="relative">
              <div className="text-4xl text-cyan-500 absolute -left-6 top-0">❝</div>
              <p className="text-lg text-teal-800 mb-4 pl-4">
                Women with diabetes have a higher risk of heart disease than men. They're also more likely to have poor blood glucose control, 
                obesity, high blood pressure, and unhealthy cholesterol levels, which can all contribute to heart disease.
              </p>
              <div className="text-4xl text-cyan-500 absolute right-0 bottom-0">❞</div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Image 
                src="/diabetes.svg" 
                alt="Glucose monitor" 
                width={80} 
                height={80}
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="#what-you-need-to-know" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            WHAT YOU NEED TO KNOW
          </Link>
          <Link href="#managing-at-work" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            MANAGING AT WORK
          </Link>
          <Link href="#medical-care-prevention" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
            MEDICAL CARE & PREVENTION
          </Link>
        </div>
        
        {/* Content Sections */}
        <div className="space-y-16">
          {/* What You Need to Know Section */}
          <section id="what-you-need-to-know" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">What You Need to Know</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Diabetes is a chronic condition that affects how your body turns food into energy. There are several types of diabetes, with Type 1, Type 2, and gestational diabetes being the most common.
              </p>
              <p className="text-lg">
                Women-specific factors that affect diabetes include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hormonal changes during menstrual cycles can affect blood sugar levels</li>
                <li>Pregnancy can lead to gestational diabetes</li>
                <li>Polycystic ovary syndrome (PCOS) increases diabetes risk</li>
                <li>Menopause can affect insulin sensitivity</li>
                <li>Eating disorders are more common in women with diabetes</li>
              </ul>
              <p className="text-lg">
                Symptoms may include increased thirst and urination, fatigue, blurred vision, slow-healing sores, and unexplained weight loss.
              </p>
            </div>
          </section>
          
          {/* Managing at Work Section */}
          <section id="managing-at-work" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">Managing at Work</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Managing diabetes in the workplace requires planning and communication.
              </p>
              <p className="text-lg">
                Workplace strategies include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep diabetes supplies and snacks at your desk</li>
                <li>Set reminders for medication and blood sugar checks</li>
                <li>Inform close colleagues about your condition and how they can help in emergencies</li>
                <li>Schedule regular short breaks for checking blood sugar or taking medication</li>
                <li>Consider requesting reasonable accommodations if needed</li>
                <li>Plan ahead for meetings and work events where food will be served</li>
              </ul>
              <p className="text-lg">
                Remember that the Americans with Disabilities Act protects employees with diabetes from discrimination.
              </p>
            </div>
          </section>
          
          {/* Medical Care & Prevention Section */}
          <section id="medical-care-prevention" className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-teal-700 mb-6">Medical Care & Prevention</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Regular medical care is essential for managing diabetes and preventing complications.
              </p>
              <p className="text-lg">
                Prevention and management approaches include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular check-ups with your healthcare provider</li>
                <li>Monitoring blood glucose levels as recommended</li>
                <li>Taking medications as prescribed</li>
                <li>Following a balanced meal plan rich in fruits, vegetables, whole grains, and lean proteins</li>
                <li>Regular physical activity (aim for 150 minutes per week)</li>
                <li>Maintaining a healthy weight</li>
                <li>Getting regular eye exams, foot exams, and dental check-ups</li>
                <li>Managing stress through relaxation techniques</li>
              </ul>
              <p className="text-lg">
                For women planning pregnancy, it's especially important to work closely with healthcare providers to manage diabetes before and during pregnancy.
              </p>
            </div>
          </section>
        </div>
        
        {/* Back to Conditions Button */}
        <div className="mt-12 text-center">
          <Link href="/conditions" className="inline-flex items-center text-teal-700 hover:text-cyan-500 font-medium">
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