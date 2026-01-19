import { personalInfo } from "../data/siteData";

const DownloadIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

export default function Hero() {
    return (
        <section class="pt-28 pb-16 flex justify-center px-4">
            <div class="glass-card p-8 md:p-12 max-w-xl w-full text-center animate-fade-in-up">
                {/* Profile Photo */}
                <div class="mb-6 flex justify-center">
                    <div class="relative">
                        <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-lg shadow-cyan-500/20">
                            <img
                                src={personalInfo.photo}
                                alt={personalInfo.name}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        {/* Glow effect */}
                        <div class="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl -z-10"></div>
                    </div>
                </div>

                {/* Name & Title */}
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                    {personalInfo.name}
                </h1>
                <p class="text-cyan-400 text-lg mb-6">{personalInfo.title}</p>

                {/* Bio */}
                <p class="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                    {personalInfo.bio}
                </p>

                {/* CTA Button */}
                <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary inline-flex"
                >
                    <DownloadIcon />
                    Download Resume
                </a>
            </div>
        </section>
    );
}
