/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const GALLERY_TILE_COUNT = 6;

type GalleryEntry = { src: string; alt: string; caption: string };

function GalleryPlaceholder() {
    return (
        <div className="aspect-square rounded-xl border border-dashed border-border flex items-center justify-center">
            <ImageIcon className="size-8 text-muted-foreground" aria-hidden />
        </div>
    );
}

function GalleryTile({ entry }: { entry?: GalleryEntry }) {
    const [imageError, setImageError] = useState(false);

    if (!entry?.src || imageError) {
        return <GalleryPlaceholder />;
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
                <img
                    src={entry.src}
                    alt={entry.alt}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                />
            </div>
            {entry.caption && (
                <span className="text-xs text-muted-foreground">{entry.caption}</span>
            )}
        </div>
    );
}

export default function GallerySection() {
    const tiles = Array.from(
        { length: GALLERY_TILE_COUNT },
        (_, index) => DATA.gallery[index]
    );

    return (
        <section id="gallery">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Gallery</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A few moments</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            A glimpse into the things I&apos;ve built, the places I&apos;ve
                            been, and the moments in between.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-[800px] mx-auto w-full">
                    {tiles.map((entry, id) => (
                        <BlurFade key={id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                            <GalleryTile entry={entry} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
