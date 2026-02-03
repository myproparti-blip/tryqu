"use client"

import Image from "next/image"

export function GallerySection() {
    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop",
            alt: "Advanced IT infrastructure with servers and networking equipment",
            title: "Infrastructure Excellence",
            description: "Enterprise-grade infrastructure designed for reliability",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1517694712199-2cf4e4d3b0e1?w=400&h=300&fit=crop",
            alt: "Cloud computing platform dashboard",
            title: "Cloud Services",
            description: "Scalable cloud solutions",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
            alt: "Data center with networking infrastructure",
            title: "Data Centers",
            description: "Mission-critical infrastructure",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1516321318423-f06f70e504f0?w=400&h=300&fit=crop",
            alt: "Network security systems and monitoring",
            title: "Security Systems",
            description: "Advanced protection measures",
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
            alt: "Professional team collaborating on technology projects",
            title: "Team Collaboration",
            description: "Expert professionals",
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
            alt: "Technology innovation and digital transformation",
            title: "Innovation & Growth",
            description: "Cutting-edge solutions",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                    Our Work & Expertise
                </h2>
                <p className="text-lg text-white/70">
                    From infrastructure to innovation, see how we transform businesses
                </p>
            </div>

            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((img, idx) => (
                    <div
                        key={img.id}
                        className={`group relative overflow-hidden rounded-xl border border-lime-400/30 hover:border-lime-300 shadow-lg shadow-lime-400/5 hover:shadow-lime-400/20 transition-all duration-300 ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                    >
                        <div
                            className={`relative ${idx === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-video"
                                } overflow-hidden bg-gradient-to-br from-black to-black/80`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                sizes={idx === 0 ? "(max-width: 768px) 100vw, 600px" : "300px"}
                                priority={idx < 3}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-lg font-bold text-lime-300">{img.title}</h3>
                                {img.description && (
                                    <p className="text-sm text-white/80">{img.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
