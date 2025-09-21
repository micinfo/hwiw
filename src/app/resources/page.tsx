"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ResourcesPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const VideoModal = () => (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
      onClick={() => setIsVideoOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
          onClick={() => setIsVideoOpen(false)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <video
          className="w-full rounded-lg"
          controls
          autoPlay
          src="/videos/sample.mp4"
        />
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-amber-100 pb-12">
      {isVideoOpen && <VideoModal />}
      {/* Pink curved shape at the top */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-pink-500 rounded-b-[50%] -z-10"></div>

      <div className="container mx-auto px-4 pt-16 pb-24">
        <h1 className="text-5xl font-bold text-white text-center mb-16">
          Video Resources
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

          {/* Right side - Video Cards */}
          <div className="space-y-6 grid grid-cols-2 gap-4">
            {/* Hypertension Video Card */}
            <div className="bg-pink-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div
                className="relative cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="/video-hypertension.svg"
                  alt="Sodium label on food packaging"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />

                <div className="absolute top-2 right-2 bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                  $25.00
                </div>
              </div>
              <div className="p-4">
                <div className="uppercase text-xs font-bold text-purple-700 mb-1">
                  HYPERTENSION
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-2">
                  Sodium Alert: What Office Snacks You Should Watch Out For
                  Pressure in 10 Minutes
                </h3>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>4,250 views</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>

            {/* Diabetes Video Card */}
            <div className="bg-cyan-100 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div
                className="relative cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="/video-diabetes.svg"
                  alt="Glucose monitoring device"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                  $65.00
                </div>
              </div>
              <div className="p-4">
                <div className="uppercase text-xs font-bold text-teal-700 mb-1">
                  DIABETES
                </div>
                <h3 className="text-lg font-bold text-teal-800 mb-2">
                  Understanding Gestational Diabetes as a Working Mom
                </h3>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>2,312 views</span>
                  <span>6 days ago</span>
                </div>
              </div>
            </div>

            {/* Thyroid Video Card */}
            <div className="bg-purple-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div
                className="relative cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="/video-thyroid.svg"
                  alt="Woman with thyroid pain"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                  $13.00
                </div>
              </div>
              <div className="p-4">
                <div className="uppercase text-xs font-bold text-purple-700 mb-1">
                  THYROID
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-2">
                  Managing Thyroid Symptoms During Your Workday
                </h3>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>1,845 views</span>
                  <span>1 week ago</span>
                </div>
              </div>
            </div>

            {/* Hypertension Video Card 2 */}
            <div className="bg-pink-200 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div
                className="relative cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="/video-hypertension2.svg"
                  alt="Blood pressure monitor"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                  $19.00
                </div>
              </div>
              <div className="p-4">
                <div className="uppercase text-xs font-bold text-purple-700 mb-1">
                  HYPERTENSION
                </div>
                <h3 className="text-lg font-bold text-purple-900 mb-2">
                  Monitoring Blood Pressure at Home: A Complete Guide
                </h3>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>3,120 views</span>
                  <span>3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/videos/sample.mp4"
              className="w-full h-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
}
