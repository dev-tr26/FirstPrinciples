export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "paper" | "repo" | "youtube" | "blog";
  tags: string[];
}

export const resources: Resource[] = [
  // Research Papers
  {
    id: "p1",
    title: "Attention Is All You Need",
    description: "The groundbreaking paper introducing the Transformer architecture that revolutionized NLP and beyond.",
    url: "https://arxiv.org/abs/1706.03762",
    type: "paper",
    tags: ["Transformers", "NLP"],
  },
  {
    id: "p2",
    title: "Denoising Diffusion Probabilistic Models",
    description: "Foundational paper on diffusion models for image generation.",
    url: "https://arxiv.org/abs/2006.11239",
    type: "paper",
    tags: ["Diffusion", "Image Gen"],
  },
  {
    id: "p3",
    title: "Language Models are Few-Shot Learners (GPT-3)",
    description: "OpenAI's paper on GPT-3 demonstrating impressive few-shot learning capabilities.",
    url: "https://arxiv.org/abs/2005.14165",
    type: "paper",
    tags: ["LLMs", "GPT"],
  },
  {
    id: "p4",
    title: "High-Resolution Image Synthesis with Latent Diffusion Models",
    description: "The Stable Diffusion paper - efficient high-resolution image synthesis.",
    url: "https://arxiv.org/abs/2112.10752",
    type: "paper",
    tags: ["Image Gen", "Diffusion"],
  },

  // GitHub Repos
  {
    id: "r1",
    title: "huggingface/transformers",
    description: "State-of-the-art Machine Learning for PyTorch, TensorFlow, and JAX.",
    url: "https://github.com/huggingface/transformers",
    type: "repo",
    tags: ["Python", "ML"],
  },
  {
    id: "r2",
    title: "AUTOMATIC1111/stable-diffusion-webui",
    description: "A browser interface for Stable Diffusion with extensive features.",
    url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    type: "repo",
    tags: ["Image Gen", "WebUI"],
  },
  {
    id: "r3",
    title: "openai/whisper",
    description: "Robust speech recognition via large-scale weak supervision.",
    url: "https://github.com/openai/whisper",
    type: "repo",
    tags: ["Audio", "ASR"],
  },
  {
    id: "r4",
    title: "langchain-ai/langchain",
    description: "Building applications with LLMs through composability.",
    url: "https://github.com/langchain-ai/langchain",
    type: "repo",
    tags: ["LLMs", "Python"],
  },

  // YouTube Channels
  {
    id: "y1",
    title: "Two Minute Papers",
    description: "AI research explained in an accessible and entertaining way.",
    url: "https://www.youtube.com/@TwoMinutePapers",
    type: "youtube",
    tags: ["Research", "Explainers"],
  },
  {
    id: "y2",
    title: "Andrej Karpathy",
    description: "Deep learning tutorials from the former Tesla AI Director.",
    url: "https://www.youtube.com/@AndrejKarpathy",
    type: "youtube",
    tags: ["Deep Learning", "Tutorials"],
  },
  {
    id: "y3",
    title: "Yannic Kilcher",
    description: "In-depth paper reviews and AI news analysis.",
    url: "https://www.youtube.com/@YannicKilcher",
    type: "youtube",
    tags: ["Papers", "Analysis"],
  },
  {
    id: "y4",
    title: "3Blue1Brown",
    description: "Beautiful visualizations of mathematical concepts behind ML.",
    url: "https://www.youtube.com/@3blue1brown",
    type: "youtube",
    tags: ["Math", "Visualization"],
  },

  // Blogs
  {
    id: "b1",
    title: "Lil'Log by Lilian Weng",
    description: "Excellent deep dives into ML concepts from OpenAI researcher.",
    url: "https://lilianweng.github.io/",
    type: "blog",
    tags: ["Research", "Deep Dives"],
  },
  {
    id: "b2",
    title: "The Gradient",
    description: "Perspectives on AI research and its implications.",
    url: "https://thegradient.pub/",
    type: "blog",
    tags: ["Research", "Essays"],
  },
  {
    id: "b3",
    title: "Jay Alammar's Blog",
    description: "Visual explanations of transformers and NLP concepts.",
    url: "https://jalammar.github.io/",
    type: "blog",
    tags: ["NLP", "Visualizations"],
  },
  {
    id: "b4",
    title: "Distill.pub",
    description: "Clear explanations of machine learning research.",
    url: "https://distill.pub/",
    type: "blog",
    tags: ["Research", "Interactive"],
  },
];

export const getResourcesByType = (type: Resource["type"]) =>
  resources.filter((resource) => resource.type === type);
