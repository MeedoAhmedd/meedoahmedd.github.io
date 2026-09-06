// -----------------------------------------------------------------------------
// Central site configuration.
// Update these values as real links become available.
// A value of "" (empty string) is treated as "not available yet" and the UI
// will render it as a clearly-marked placeholder rather than a broken link.
// -----------------------------------------------------------------------------

export const site = {
  name: "Mohamed Ahmed",
  roles: ["Computer Science Student", "Software Developer", "Game Developer"],

  // Real, confirmed
  email: "mohamedahmedmaxx1@gmail.com",

  // Placeholders — fill in when available
  github: "", // e.g. "https://github.com/your-username"
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  cv: "", // e.g. "/cv.pdf" (place the file in /public)
};

// Helper: returns the href if set, otherwise null (so components can decide
// whether to render a link or a "coming soon" placeholder).
export const link = (value: string) => (value && value.trim() ? value : null);
