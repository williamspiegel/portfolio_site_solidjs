import { createSignal } from 'solid-js';
import { personalInfo } from '../data/siteData';

const EmailIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
);

const GithubIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
);

const LinkedinIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
);

const CopyIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
    <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' />
  </svg>
);

const CheckIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = createSignal(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <main class='pt-28 pb-16 flex justify-center'>
      <div class='container-main'>
        <div class='max-w-lg mx-auto'>
          <h1 class='section-title mb-12'>Contact</h1>

          <div class='glass-card p-8 space-y-8'>
            {/* Email */}
            <div class='space-y-3'>
              <div class='flex items-center gap-3 text-cyan-400'>
                <EmailIcon />
                <span class='font-medium'>Email</span>
              </div>
              <div class='flex items-center gap-3'>
                <p class='text-slate-300 flex-1'>{personalInfo.email}</p>
                <button
                  onClick={copyEmail}
                  class='p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-cyan-400 transition-all'
                  aria-label='Copy email'
                >
                  {copied() ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
              {copied() && (
                <p class='text-cyan-400 text-sm animate-fade-in-up'>
                  Copied to clipboard!
                </p>
              )}
            </div>

            {/* Social Links */}
            <div class='space-y-4'>
              <p class='text-slate-400 text-sm'>Or connect with me on:</p>
              <div class='flex gap-4'>
                <a
                  href={personalInfo.social.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  class='flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all group'
                >
                  <span class='text-slate-400 group-hover:text-cyan-400 transition-colors'>
                    <GithubIcon />
                  </span>
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  class='flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all group'
                >
                  <span class='text-slate-400 group-hover:text-cyan-400 transition-colors'>
                    <LinkedinIcon />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Resume */}
            <div class='pt-4 border-t border-slate-700/50'>
              <a
                href={personalInfo.resumeUrl}
                target='_blank'
                rel='noopener noreferrer'
                class='btn-primary w-full justify-center'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
