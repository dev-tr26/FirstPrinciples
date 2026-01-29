export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "audio" | "image" | "llms";
  image: string;
  date: string;
  slug: string;
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Rise of Text-to-Speech: How AI is Revolutionizing Voice Generation",
    excerpt: "Exploring the latest advances in neural text-to-speech systems and their impact on content creation, accessibility, and entertainment.",
    content: `
## Introduction

Text-to-speech technology has come a long way from the robotic voices of early systems. Today's neural TTS models can produce speech that's nearly indistinguishable from human voices.

![TTS Waveform](/placeholder.svg)

## Key Technologies

Modern TTS systems use several breakthrough technologies:

- **Neural vocoders** like WaveNet and HiFi-GAN
- **Attention mechanisms** for natural prosody
- **Multi-speaker models** for voice cloning

## Applications

The applications are vast:

1. Audiobook narration
2. Accessibility tools
3. Virtual assistants
4. Content localization

## Conclusion

As these systems continue to improve, we're entering an era where synthetic speech will become ubiquitous in our daily lives.
    `,
    category: "audio",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop",
    date: "Jan 5, 2026",
    slug: "/blog/tts-revolution",
  },
  {
    id: "2",
    title: "Music Generation AI: From MIDI to Full Orchestral Scores",
    excerpt: "A deep dive into how AI models are learning to compose music across genres, from simple melodies to complex symphonies.",
    content: `
## The Evolution of Music AI

Music generation has evolved from simple algorithmic composition to sophisticated deep learning models capable of creating emotionally resonant pieces.

## Current State of the Art

Models like MusicLM, Suno, and Udio are pushing boundaries.

## The Creative Process

How do these models understand musical structure? Through massive training on diverse musical datasets.
    `,
    category: "audio",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop",
    date: "Jan 3, 2026",
    slug: "/blog/music-generation-ai",
  },
  {
    id: "3",
    title: "Diffusion Models Explained: The Technology Behind DALL-E and Stable Diffusion",
    excerpt: "Understanding the mathematical foundations and practical applications of diffusion-based image generation models.",
    content: `
## What Are Diffusion Models?

Diffusion models learn to generate images by reversing a gradual noising process.

![Diffusion Process](/placeholder.svg)

## The Math Behind It

At their core, diffusion models learn to predict and remove noise from images.

## Practical Applications

- Art generation
- Photo editing
- Design prototyping
    `,
    category: "image",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&auto=format&fit=crop",
    date: "Jan 4, 2026",
    slug: "/blog/diffusion-models-explained",
  },
  {
    id: "4",
    title: "ControlNet and Beyond: Precise Control in Image Generation",
    excerpt: "How conditioning mechanisms are giving artists unprecedented control over AI-generated imagery.",
    content: `
## The Control Problem

Early image generation models offered little control beyond text prompts.

## Enter ControlNet

ControlNet introduced spatial conditioning - using depth maps, edge detection, and pose estimation to guide generation.

## Future Directions

New conditioning approaches continue to emerge.
    `,
    category: "image",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
    date: "Dec 28, 2025",
    slug: "/blog/controlnet-and-beyond",
  },
  {
    id: "5",
    title: "GPT-5 and the Future of Large Language Models",
    excerpt: "What we know about the next generation of language models and their potential impact on society.",
    content: `
## The LLM Landscape

Large language models have transformed how we interact with computers.

## What's Next?

Speculation about GPT-5 and competing models.

## Implications

The societal impact of increasingly capable language models.
    `,
    category: "llms",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    date: "Jan 6, 2026",
    slug: "/blog/gpt5-future-llms",
  },
  {
    id: "6",
    title: "Fine-Tuning LLMs: A Practical Guide for Developers",
    excerpt: "Step-by-step instructions for customizing language models for specific use cases and domains.",
    content: `
## Why Fine-Tune?

Pre-trained models are powerful but generic.

## Techniques

- Full fine-tuning
- LoRA and QLoRA
- Prompt tuning

## Best Practices

Tips for effective fine-tuning.
    `,
    category: "llms",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
    date: "Dec 30, 2025",
    slug: "/blog/finetuning-llms-guide",
  },
];

export const getBlogsByCategory = (category: Blog["category"]) => 
  blogs.filter(blog => blog.category === category);

export const getBlogBySlug = (slug: string) => 
  blogs.find(blog => blog.slug === slug);
