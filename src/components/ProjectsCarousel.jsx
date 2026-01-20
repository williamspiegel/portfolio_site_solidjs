import { For } from 'solid-js';
import { projects } from '../data/siteData';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <section class='pt-12 pb-16'>
      <div class='container-main'>
        {/* Section Title */}
        <h2 class='section-title mb-12'>Projects</h2>

        {/* Projects Grid */}
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <For each={projects}>
            {(project) => <ProjectCard project={project} />}
          </For>
        </div>
      </div>
    </section>
  );
}
