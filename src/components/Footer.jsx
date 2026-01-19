import { A } from "@solidjs/router";
import { navLinks, personalInfo } from "../data/siteData";
import { For } from "solid-js";

export default function Footer() {
    return (
        <footer class="py-8 mt-auto">
            <div class="container-main">
                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                    <For each={navLinks}>
                        {(link) => (
                            <A
                                href={link.path}
                                class="text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                {link.label}
                            </A>
                        )}
                    </For>
                </div>
                <div class="text-center mt-6 text-slate-500 text-xs">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
