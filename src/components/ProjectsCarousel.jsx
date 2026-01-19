import { createSignal, For } from "solid-js";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/siteData";

const ChevronLeft = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ChevronRight = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

export default function ProjectsCarousel() {
    let scrollContainer;
    const [canScrollLeft, setCanScrollLeft] = createSignal(false);
    const [canScrollRight, setCanScrollRight] = createSignal(true);

    const checkScroll = () => {
        if (!scrollContainer) return;
        setCanScrollLeft(scrollContainer.scrollLeft > 0);
        setCanScrollRight(
            scrollContainer.scrollLeft <
            scrollContainer.scrollWidth - scrollContainer.clientWidth - 10
        );
    };

    const scroll = (direction) => {
        if (!scrollContainer) return;
        const scrollAmount = 340;
        scrollContainer.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
        setTimeout(checkScroll, 350);
    };

    return (
        <section class="py-16">
            <div class="container-main">
                {/* Section Title */}
                <h2 class="section-title mb-12">Projects</h2>

                {/* Carousel Container */}
                <div class="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        class={`carousel-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex ${!canScrollLeft() ? "opacity-30 cursor-not-allowed" : ""
                            }`}
                        disabled={!canScrollLeft()}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft />
                    </button>

                    {/* Projects Scroll Container */}
                    <div
                        ref={scrollContainer}
                        onScroll={checkScroll}
                        class="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                        style="scroll-padding: 24px"
                    >
                        <For each={projects}>
                            {(project) => (
                                <div class="snap-start">
                                    <ProjectCard project={project} />
                                </div>
                            )}
                        </For>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        class={`carousel-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex ${!canScrollRight() ? "opacity-30 cursor-not-allowed" : ""
                            }`}
                        disabled={!canScrollRight()}
                        aria-label="Scroll right"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
