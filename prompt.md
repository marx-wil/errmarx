I am attaching a design generated from Stitch AI.

Your task is to analyze the design and convert it into a production-ready, interactive web application, not just static UI.

🧠 Objective

Recreate the attached design as a fully functional 3D interactive developer portfolio with smooth animations, scroll-driven storytelling, and optimized performance.

🔍 Step 1: Analyze the Design
Break down the design into:
Layout structure
Components
Animations and transitions
3D elements vs UI elements
Identify:
Which parts should be rendered in Three.js
Which parts should be standard DOM/UI
🧱 Step 2: Define Architecture

Use this stack:

Next.js (App Router, TypeScript)
React Three Fiber (Three.js)
@react-three/drei
GSAP + ScrollTrigger
Framer Motion
Tailwind CSS
Lenis (smooth scrolling)
🎬 Step 3: Implement Core Experience
Hero Section (3D Scene)
Recreate the scene from the design:
Developer at desk coding
Monitor with animated code
Use optimized GLTF models or primitives if needed
Add lighting and subtle animation
Scroll Behavior
Implement scroll-based animation:
Camera zooms into the monitor
Use GSAP ScrollTrigger
Sync with Lenis scroll
3D → UI Transition
Seamlessly transition from 3D scene into UI:
Overlay DOM elements OR map UI to a plane
Ensure transition feels natural and continuous
🖥️ Step 4: Build Portfolio Sections

Recreate all sections from the design:

About
Projects (interactive cards with hover + expand)
Skills (3D or animated visual elements)
Experience (timeline)
Contact (form or terminal UI)

Use:

Framer Motion for UI animations
Drei helpers for 3D interactions
🎮 Step 5: Interactions
Mouse-based parallax
Hover effects with depth and lighting
Smooth transitions between sections
⚡ Step 6: Performance Optimization
Lazy load 3D assets
Use compressed GLTF (Draco)
Avoid unnecessary re-renders
Maintain smooth FPS
📁 Step 7: Code Structure

Organize code into:

/components/3d → Scene, Camera, Models
/components/ui → Sections
/lib/animations → GSAP configs
/hooks → Scroll + interaction logic
📦 Step 8: Output Requirements

Provide:

Full working code (modular and clean)
Clear separation of 3D and UI layers
Comments explaining:
Scroll animation logic
Camera transitions
Performance decisions
🚀 Step 9: Improve the Design (Important)

Do NOT blindly follow the design.

Suggest improvements if:
Something hurts usability
Animations are excessive
Performance risks exist
🧠 Constraints
Prioritize smooth UX over visual overload
Ensure it works on mid-range devices
Provide fallback for low-performance environments
🔥 Final Goal

Turn the design into a real, immersive portfolio experience that is both visually impressive and technically solid.