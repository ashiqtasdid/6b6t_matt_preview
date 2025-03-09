"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react"; 
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaImage,
  FaClock,
} from "react-icons/fa";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
  date: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/assets/images/1.png",
      alt: "Spawn Area",
      category: "landmarks",
      description:
        "The chaotic spawn area of 6b6t, constantly changing as players battle and build.",
      date: "January 2023",
    },
    {
      id: 2,
      src: "/assets/images/2.png",
      alt: "Player Battles",
      category: "events",
      description:
        "Players engaging in PvP combat using end-game gear and tactics.",
      date: "February 2023",
    },
    {
      id: 3,
      src: "/assets/images/3.png",
      alt: "Base Building",
      category: "bases",
      description:
        "An impressive base built by a group of players far from spawn.",
      date: "March 2023",
    },
    {
      id: 4,
      src: "/assets/images/4.png",
      alt: "Vast Landscapes",
      category: "exploration",
      description:
        "The endless terrain stretching far beyond spawn, waiting to be explored.",
      date: "April 2023",
    },
    {
      id: 5,
      src: "/assets/images/5.png",
      alt: "Nether Highways",
      category: "landmarks",
      description:
        "The extensive nether highway system connecting distant areas of the map.",
      date: "May 2023",
    },
    {
      id: 6,
      src: "/assets/images/6.png",
      alt: "Player Monuments",
      category: "builds",
      description:
        "A monument built to commemorate a famous player or event on the server.",
      date: "June 2023",
    },
    {
      id: 7,
      src: "/assets/images/7.png",
      alt: "Griefed Bases",
      category: "raids",
      description:
        "The aftermath of a raid, showing the destruction that can happen in anarchy gameplay.",
      date: "July 2023",
    },
    {
      id: 8,
      src: "/assets/images/8.png",
      alt: "The End",
      category: "exploration",
      description:
        "The mysterious End dimension, a valuable area for resources and ender dragons.",
      date: "August 2023",
    },
    {
      id: 9,
      src: "/assets/images/9.png",
      alt: "Community Events",
      category: "events",
      description:
        "Players gathering for a rare community event in the lawless world of 6b6t.",
      date: "September 2023",
    },
    {
      id: 10,
      src: "/assets/images/10.png",
      alt: "Untouched Wilderness",
      category: "exploration",
      description:
        "A distant, untouched landscape far from spawn - a rare sight on an anarchy server.",
      date: "October 2023",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "landmarks", name: "Landmarks" },
    { id: "bases", name: "Bases" },
    { id: "events", name: "Events" },
    { id: "builds", name: "Builds" },
    { id: "exploration", name: "Exploration" },
    { id: "raids", name: "Raids" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const navigateImage = useCallback((direction: "next" | "prev") => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateImage]);

  return (
    <div className="bg-[#211F22] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            6b6t Server <span className="text-[#08CFF9]">Gallery</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Explore screenshots from the chaotic and creative world of 6b6t
            anarchy server
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-[#08CFF9] text-[#211F22]"
                  : "bg-slate-800/40 text-slate-300 hover:bg-slate-800/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg border border-slate-700 bg-slate-800/40 cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                layout
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -5 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211F22] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-medium">{image.alt}</h3>
                    <div className="flex items-center mt-1 text-xs text-slate-300">
                      <FaClock className="mr-1 text-[#08CFF9]" />
                      <span>{image.date}</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <FaExpand className="text-white bg-[#211F22]/70 p-1 rounded-full h-6 w-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <FaImage className="mx-auto text-4xl text-slate-600 mb-3" />
            <p className="text-slate-400">No images found in this category.</p>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#211F22]/95 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-6xl w-full max-h-[90vh] bg-slate-800/40 rounded-lg border border-slate-700 overflow-hidden"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>

                {/* Navigation buttons */}
                <button
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#211F22]/60 hover:bg-[#211F22]/90 text-white p-3 rounded-full"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                >
                  <FaChevronLeft />
                </button>

                <button
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#211F22]/60 hover:bg-[#211F22]/90 text-white p-3 rounded-full"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                >
                  <FaChevronRight />
                </button>

                {/* Close button */}
                <button
                  className="absolute top-4 right-4 bg-[#211F22]/60 hover:bg-[#211F22]/90 text-white p-2 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes />
                </button>

                {/* Image info */}
                <div className="p-5">
                  <h3 className="text-xl font-medium text-white">
                    {selectedImage.alt}
                  </h3>
                  <div className="flex items-center mt-1 text-sm text-slate-400">
                    <span className="px-2 py-1 bg-[#211F22]/70 rounded-md mr-3 text-[#08CFF9] text-xs">
                      {categories.find((c) => c.id === selectedImage.category)
                        ?.name || selectedImage.category}
                    </span>
                    <FaClock className="mr-1" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <p className="mt-3 text-slate-300">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;