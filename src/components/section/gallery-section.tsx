/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function GallerySection() {
    return (
        <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <h2 className="text-xl font-bold">Gallery</h2>
            </BlurFade>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {DATA.gallery.map((src, id) => (
                    <BlurFade key={src} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                        <div className="group aspect-square overflow-hidden rounded-xl ring-2 ring-border transition-all duration-200 hover:ring-foreground/30">
                            <img
                                src={src}
                                alt={`Lucas Cardoso — photo ${id + 1}`}
                                className="size-full object-cover bg-muted transition-transform duration-200 group-hover:scale-105"
                            />
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    );
}
