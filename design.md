<!-- Contact: Futuristic Terminal -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container": "#201f1f",
                        "surface": "#131313",
                        "inverse-surface": "#e5e2e1",
                        "error": "#ffb4ab",
                        "secondary": "#edb1ff",
                        "on-tertiary-fixed-variant": "#624000",
                        "on-surface-variant": "#bbc9cf",
                        "on-tertiary": "#442b00",
                        "primary-fixed-dim": "#47d6ff",
                        "tertiary-fixed-dim": "#ffba4a",
                        "surface-tint": "#47d6ff",
                        "surface-container-highest": "#353534",
                        "outline": "#859399",
                        "on-error-container": "#ffdad6",
                        "secondary-fixed-dim": "#edb1ff",
                        "on-primary-fixed-variant": "#004e60",
                        "secondary-container": "#6e208c",
                        "tertiary-container": "#ffb229",
                        "surface-container-high": "#2a2a2a",
                        "on-secondary-fixed": "#320046",
                        "tertiary": "#ffd79f",
                        "on-secondary-fixed-variant": "#6e208c",
                        "on-tertiary-container": "#6c4700",
                        "background": "#131313",
                        "on-tertiary-fixed": "#291800",
                        "on-primary": "#003543",
                        "primary-fixed": "#b6ebff",
                        "surface-container-low": "#1c1b1b",
                        "surface-dim": "#131313",
                        "outline-variant": "#3c494e",
                        "on-background": "#e5e2e1",
                        "inverse-on-surface": "#313030",
                        "on-primary-fixed": "#001f28",
                        "tertiary-fixed": "#ffddb1",
                        "primary": "#a5e7ff",
                        "surface-variant": "#353534",
                        "on-surface": "#e5e2e1",
                        "on-error": "#690005",
                        "primary-container": "#00d2ff",
                        "surface-container-lowest": "#0e0e0e",
                        "on-secondary-container": "#e498ff",
                        "secondary-fixed": "#f9d8ff",
                        "on-secondary": "#520070",
                        "surface-bright": "#3a3939",
                        "inverse-primary": "#00677f",
                        "on-primary-container": "#00566a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Space Grotesk"],
                        "body": ["Inter"],
                        "label": ["Space Grotesk"],
                        "mono": ["JetBrains Mono"]
                    }
                }
            }
        }
    </script>
<style>
        .glass-panel {
            background: rgba(32, 31, 31, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(165, 231, 255, 0.05);
        }
        .terminal-grid {
            background-image: radial-gradient(circle at 2px 2px, rgba(165, 231, 255, 0.05) 1px, transparent 0);
            background-size: 24px 24px;
        }
        .blinking-cursor {
            display: inline-block;
            width: 8px;
            height: 1.2em;
            background: #a5e7ff;
            animation: blink 1s step-start infinite;
            vertical-align: middle;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
        .glitch-hover:hover {
            text-shadow: 2px 0 #edb1ff, -2px 0 #00d2ff;
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
        }
        .noise-texture {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.02;
            pointer-events: none;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary overflow-x-hidden">
<div class="fixed inset-0 noise-texture z-[100]"></div>
<!-- Navigation -->
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#131313]/40 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto">
<div class="text-xl font-bold tracking-tighter text-[#a5e7ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)] font-headline">
            ARCHITECT.OS
        </div>
<div class="hidden md:flex gap-8 items-center">
<a class="font-headline tracking-tight text-sm uppercase text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 hover:tracking-widest" href="#">STAGES</a>
<a class="font-headline tracking-tight text-sm uppercase text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 hover:tracking-widest" href="#">VAULT</a>
<a class="font-headline tracking-tight text-sm uppercase text-[#a5e7ff] border-b border-[#00d2ff] pb-1 hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 hover:tracking-widest" href="#">TERMINAL</a>
<button class="bg-[#a5e7ff]/10 text-[#a5e7ff] px-6 py-2 rounded-sm font-headline text-xs tracking-widest border border-[#a5e7ff]/20 hover:bg-[#a5e7ff]/20 transition-all">CONNECT</button>
</div>
<div class="md:hidden">
<span class="material-symbols-outlined text-[#a5e7ff]">menu</span>
</div>
</nav>
<!-- Main Content -->
<main class="min-h-screen pt-32 pb-20 px-6 md:px-12 relative terminal-grid">
<!-- Background Ambient Elements -->
<div class="absolute top-1/4 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
<div class="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>
<div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<!-- Left Column: Holographic Stats & Intro -->
<div class="lg:col-span-4 space-y-12 order-2 lg:order-1">
<div class="space-y-4">
<h1 class="text-5xl font-headline font-bold tracking-tighter leading-tight text-on-surface">
                        SYSTEM<br/><span class="text-primary drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">OUTREACH</span>
</h1>
<p class="text-on-surface-variant max-w-sm text-sm leading-relaxed">
                        Initiate a direct uplink to the Architect. Secure channel encryption active. All transmission logs are stored in the obsidian vault.
                    </p>
</div>
<!-- Holographic Stats -->
<div class="space-y-6">
<!-- Network Graph Placeholder -->
<div class="glass-panel p-4 rounded-xl border-l-2 border-primary/40 relative overflow-hidden group">
<div class="flex justify-between items-center mb-4">
<span class="font-mono text-[10px] text-primary/60 tracking-widest uppercase">Network_Traffic</span>
<span class="material-symbols-outlined text-sm text-primary/40">sensors</span>
</div>
<div class="h-20 flex items-end gap-1 px-1">
<div class="flex-1 bg-primary/20 h-1/2 group-hover:h-3/4 transition-all duration-700"></div>
<div class="flex-1 bg-primary/20 h-3/4 group-hover:h-1/2 transition-all duration-700"></div>
<div class="flex-1 bg-primary/20 h-2/3 group-hover:h-5/6 transition-all duration-700"></div>
<div class="flex-1 bg-primary/30 h-1/3 group-hover:h-2/3 transition-all duration-700"></div>
<div class="flex-1 bg-primary/20 h-4/5 group-hover:h-1/3 transition-all duration-700"></div>
<div class="flex-1 bg-primary/40 h-2/3 group-hover:h-4/5 transition-all duration-700"></div>
<div class="flex-1 bg-primary/20 h-1/2 group-hover:h-1/2 transition-all duration-700"></div>
</div>
<div class="mt-2 font-mono text-[9px] text-on-surface-variant/40 flex justify-between">
<span>0.0.0.0</span>
<span>CONNECTED_SECURELY</span>
</div>
</div>
<!-- CPU/Core Stats -->
<div class="grid grid-cols-2 gap-4">
<div class="glass-panel p-4 rounded-xl border-l-2 border-secondary/40">
<span class="font-mono text-[10px] text-secondary/60 block mb-2 uppercase">Core_Load</span>
<div class="text-2xl font-headline font-bold text-on-surface">3.2%</div>
<div class="w-full bg-surface-container-highest h-1 mt-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full w-[3.2%] shadow-[0_0_8px_#edb1ff]"></div>
</div>
</div>
<div class="glass-panel p-4 rounded-xl border-l-2 border-primary/40">
<span class="font-mono text-[10px] text-primary/60 block mb-2 uppercase">Uptime</span>
<div class="text-2xl font-headline font-bold text-on-surface">99.9</div>
<div class="flex items-center gap-1 mt-2">
<div class="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00d2ff]"></div>
<span class="font-mono text-[9px] text-on-surface-variant/60 uppercase">System_Live</span>
</div>
</div>
</div>
</div>
<!-- Terminal Metadata -->
<div class="p-4 border border-outline-variant/20 rounded-xl bg-surface-container-lowest/50">
<div class="flex items-center gap-3 mb-3">
<img alt="User" class="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/30" data-alt="high-tech developer avatar profile picture with neon accents and futuristic clothing in a dark digital environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD411Ge4LHl_P_nrdIwk6a5xmHxKp5LroNXPgVTWYXLg2HCVtR9AwhoHxqHPOHGDcr55L13YhrD6ZIkzjOVHew2xb2rDzXyLkjPbkwbf2DLtkm5pQ3JTUFaAHmf84osIiJGEZcWO7seWx9ZspgpJ0-xsmOBMlmn8zZ4eQgRo_EWCCSMlNfJUN5_uJXt9TSqnx15DheP75u5VvEfy5R5CiHavUUTzK7kO0BQxtJVuIpAFXPtfz4jmRgvT3tWjC5dYNOAXezDa4CuMCz6"/>
<div>
<div class="text-xs font-headline font-bold tracking-wider">ROOT_USER</div>
<div class="text-[10px] font-mono text-primary/60 uppercase">Level_9_Architect</div>
</div>
</div>
<div class="space-y-1 font-mono text-[10px] text-on-surface-variant/40">
<p>&gt; IP: 192.168.1.101</p>
<p>&gt; REGION: GLOBAL_SOUTH_WEST</p>
<p>&gt; LATENCY: 14MS</p>
</div>
</div>
</div>
<!-- Right Column: Terminal Contact Interface -->
<div class="lg:col-span-8 order-1 lg:order-2">
<div class="glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-primary/5">
<!-- Terminal Header -->
<div class="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-white/5">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div class="font-mono text-xs text-on-surface-variant/60 tracking-widest uppercase">
                            arch-term — contact.sh — 80x24
                        </div>
<div class="w-12"></div>
</div>
<!-- Terminal Content -->
<div class="p-8 bg-[#0e0e0e]/90 font-mono text-sm leading-relaxed relative min-h-[500px]">
<!-- Subtle scanline effect -->
<div class="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
<div class="w-full h-[2px] bg-primary/20 absolute top-0 left-0 animate-scan"></div>
</div>
<div class="space-y-8 text-[#e5e2e1]">
<div class="space-y-1">
<p class="text-primary/80"># INITIALIZING COMMUNICATION PROTOCOL...</p>
<p class="text-on-surface-variant/40"># AUTHENTICATION BYPASS: GRANTED</p>
<p class="text-on-surface-variant/40"># ENCRYPTION: AES-256-GCM</p>
</div>
<form action="#" class="space-y-8">
<div class="group relative">
<div class="flex items-center gap-4">
<label class="text-primary whitespace-nowrap" for="name">NAME_IDENTIFIER:</label>
<input class="bg-transparent border-none focus:ring-0 p-0 text-secondary w-full placeholder:text-on-surface-variant/20 font-mono" id="name" name="name" placeholder="[Enter_subject_name]" type="text"/>
</div>
<div class="h-[1px] w-full bg-outline-variant/30 group-focus-within:bg-primary transition-colors mt-1"></div>
</div>
<div class="group relative">
<div class="flex items-center gap-4">
<label class="text-primary whitespace-nowrap" for="email">UPLINK_SOURCE:</label>
<input class="bg-transparent border-none focus:ring-0 p-0 text-secondary w-full placeholder:text-on-surface-variant/20 font-mono" id="email" name="email" placeholder="[user@domain.net]" type="email"/>
</div>
<div class="h-[1px] w-full bg-outline-variant/30 group-focus-within:bg-primary transition-colors mt-1"></div>
</div>
<div class="group relative">
<div class="flex items-center gap-4">
<label class="text-primary whitespace-nowrap" for="subject">REQUEST_TYPE:</label>
<select class="bg-transparent border-none focus:ring-0 p-0 text-secondary w-full font-mono cursor-pointer appearance-none" id="subject" name="subject">
<option class="bg-surface-container-highest" value="collaboration">SYSTEM_COLLAB</option>
<option class="bg-surface-container-highest" value="service">ARCHITECT_CONSULT</option>
<option class="bg-surface-container-highest" value="security">CORE_SECURITY</option>
<option class="bg-surface-container-highest" value="other">OTHER_QUERY</option>
</select>
</div>
<div class="h-[1px] w-full bg-outline-variant/30 group-focus-within:bg-primary transition-colors mt-1"></div>
</div>
<div class="group relative">
<div class="flex flex-col gap-4">
<label class="text-primary" for="message">ENCRYPTED_MESSAGE:</label>
<textarea class="bg-transparent border-none focus:ring-0 p-0 text-secondary w-full placeholder:text-on-surface-variant/20 font-mono resize-none" id="message" name="message" placeholder="[Transmit_payload_data_here...]" rows="4"></textarea>
</div>
<div class="h-[1px] w-full bg-outline-variant/30 group-focus-within:bg-primary transition-colors mt-1"></div>
</div>
<div class="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
<div class="flex items-center gap-2">
<span class="text-on-surface-variant/40">_SYSTEM_STATUS:</span>
<span class="text-primary animate-pulse uppercase text-xs">Awaiting_Input</span>
<span class="blinking-cursor"></span>
</div>
<button class="glitch-hover bg-primary/5 hover:bg-primary/20 border border-primary/40 text-primary px-10 py-4 font-headline font-bold tracking-[0.2em] transition-all duration-200 relative group overflow-hidden uppercase" type="submit">
<span class="relative z-10">SEND REQUEST</span>
<div class="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>
</div>
</form>
</div>
</div>
</div>
<!-- Security Footnote -->
<div class="mt-8 flex items-center justify-between px-4">
<div class="flex items-center gap-2 text-[10px] font-mono text-on-surface-variant/40">
<span class="material-symbols-outlined text-sm">lock</span>
                        END-TO-END ENCRYPTED VIA ARCHITECT_SHIELD_V4
                    </div>
<div class="text-[10px] font-mono text-on-surface-variant/40">
                        TIMESTAMP: 2024.05.21_23:14:02_UTC
                    </div>
</div>
</div>
</div>
</main>
<!-- Side Nav Sidebar (JSON-based) -->
<aside class="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-[#0e0e0e]/80 backdrop-blur-2xl hidden lg:flex flex-col py-8 z-40 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
<div class="px-8 mb-12">
<div class="text-[#edb1ff] font-black text-xl font-headline tracking-widest">ARCH.OS</div>
<div class="mt-2 flex items-center gap-3">
<div class="w-10 h-10 rounded-sm bg-secondary-container/30 border border-secondary/20 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">terminal</span>
</div>
<div>
<div class="text-on-surface font-headline font-bold text-sm tracking-tight">ROOT_USER</div>
<div class="text-[#edb1ff] text-[10px] font-mono uppercase tracking-tighter">LEVEL_9_ARCHITECT</div>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-2">
<a class="flex items-center gap-4 px-4 py-3 rounded-sm font-['Space_Grotesk'] text-xs font-medium text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-lg group-hover:text-secondary">terminal</span>
                INIT
            </a>
<a class="flex items-center gap-4 px-4 py-3 rounded-sm font-['Space_Grotesk'] text-xs font-medium text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-lg group-hover:text-secondary">layers</span>
                PROJECTS
            </a>
<a class="flex items-center gap-4 px-4 py-3 rounded-sm font-['Space_Grotesk'] text-xs font-medium text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-lg group-hover:text-secondary">memory</span>
                CORE
            </a>
<a class="flex items-center gap-4 px-4 py-3 rounded-sm font-['Space_Grotesk'] text-xs font-medium text-[#00d2ff] bg-[#00d2ff]/10 border-r-2 border-[#00d2ff] transition-all duration-300 group" href="#">
<span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">sensors</span>
                STATUS
            </a>
</nav>
<div class="px-4 mt-auto space-y-4">
<button class="w-full py-4 bg-secondary-container/20 border border-secondary/30 text-secondary font-headline font-bold text-xs tracking-widest hover:bg-secondary-container/40 transition-all uppercase rounded-sm">
                DEPLOY_REQUEST
            </button>
<a class="flex items-center gap-4 px-4 py-3 rounded-sm font-['Space_Grotesk'] text-xs font-medium text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300" href="#">
<span class="material-symbols-outlined text-lg">settings</span>
                SETTINGS
            </a>
</div>
</aside>
<!-- Footer Mobile Navigation (JSON-based) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-white/5 flex justify-around items-center h-16 px-4 z-50">
<button class="flex flex-col items-center gap-1 text-[#e5e2e1]/40">
<span class="material-symbols-outlined text-xl">terminal</span>
<span class="text-[10px] font-mono">INIT</span>
</button>
<button class="flex flex-col items-center gap-1 text-[#e5e2e1]/40">
<span class="material-symbols-outlined text-xl">layers</span>
<span class="text-[10px] font-mono">PROJ</span>
</button>
<button class="flex flex-col items-center gap-1 text-[#00d2ff]">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">sensors</span>
<span class="text-[10px] font-mono">STATUS</span>
</button>
<button class="flex flex-col items-center gap-1 text-[#e5e2e1]/40">
<span class="material-symbols-outlined text-xl">settings</span>
<span class="text-[10px] font-mono">SET</span>
</button>
</nav>
</body></html>

<!-- Hero Section: The Desk Scene -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#201f1f",
                    "surface": "#131313",
                    "inverse-surface": "#e5e2e1",
                    "error": "#ffb4ab",
                    "secondary": "#edb1ff",
                    "on-tertiary-fixed-variant": "#624000",
                    "on-surface-variant": "#bbc9cf",
                    "on-tertiary": "#442b00",
                    "primary-fixed-dim": "#47d6ff",
                    "tertiary-fixed-dim": "#ffba4a",
                    "surface-tint": "#47d6ff",
                    "surface-container-highest": "#353534",
                    "outline": "#859399",
                    "on-error-container": "#ffdad6",
                    "secondary-fixed-dim": "#edb1ff",
                    "on-primary-fixed-variant": "#004e60",
                    "secondary-container": "#6e208c",
                    "tertiary-container": "#ffb229",
                    "surface-container-high": "#2a2a2a",
                    "on-secondary-fixed": "#320046",
                    "tertiary": "#ffd79f",
                    "on-secondary-fixed-variant": "#6e208c",
                    "on-tertiary-container": "#6c4700",
                    "background": "#131313",
                    "on-tertiary-fixed": "#291800",
                    "on-primary": "#003543",
                    "primary-fixed": "#b6ebff",
                    "surface-container-low": "#1c1b1b",
                    "surface-dim": "#131313",
                    "outline-variant": "#3c494e",
                    "on-background": "#e5e2e1",
                    "inverse-on-surface": "#313030",
                    "on-primary-fixed": "#001f28",
                    "tertiary-fixed": "#ffddb1",
                    "primary": "#a5e7ff",
                    "surface-variant": "#353534",
                    "on-surface": "#e5e2e1",
                    "on-error": "#690005",
                    "primary-container": "#00d2ff",
                    "surface-container-lowest": "#0e0e0e",
                    "on-secondary-container": "#e498ff",
                    "secondary-fixed": "#f9d8ff",
                    "error-container": "#93000a",
                    "on-secondary": "#520070",
                    "surface-bright": "#3a3939",
                    "inverse-primary": "#00677f",
                    "on-primary-container": "#00566a"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Space Grotesk"],
                    "body": ["Inter"],
                    "label": ["Space Grotesk"]
            }
          },
        },
      }
    </script>
<style>
        body { background-color: #131313; color: #e5e2e1; font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-panel { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .hero-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); opacity: 0.02; pointer-events: none; }
        .text-glow { text-shadow: 0 0 10px rgba(0, 210, 255, 0.5); }
    </style>
</head>
<body class="selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#131313]/40 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto">
<div class="text-xl font-bold tracking-tighter text-[#a5e7ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)] font-headline">
            ARCHITECT.OS
        </div>
<div class="hidden md:flex items-center gap-10 font-label tracking-tight text-sm uppercase">
<a class="text-[#a5e7ff] border-b border-[#00d2ff] pb-1 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 duration-200 ease-out hover:tracking-widest" href="#">STAGES</a>
<a class="text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 duration-200 ease-out hover:tracking-widest" href="#">VAULT</a>
<a class="text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 duration-200 ease-out hover:tracking-widest" href="#">TERMINAL</a>
</div>
<div class="flex items-center gap-6">
<button class="font-label tracking-tight text-sm uppercase text-[#a5e7ff] border border-[#a5e7ff]/30 px-6 py-2 glass-panel hover:bg-[#a5e7ff]/10 transition-all duration-300">
                CONNECT
            </button>
<button class="material-symbols-outlined text-[#e5e2e1]/60 hover:text-[#a5e7ff]">menu</button>
</div>
</nav>
<aside class="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-[#0e0e0e]/80 backdrop-blur-2xl flex flex-col py-8 z-40 hidden xl:flex">
<div class="px-8 mb-12">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full border border-[#edb1ff]/30 overflow-hidden bg-surface-container">
<img alt="Developer Avatar" class="w-full h-full object-cover grayscale contrast-125" data-alt="Close-up portrait of a professional developer in soft cinematic lighting with a neutral digital workspace background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfG67b9JJWlXoevK8AekSdL41QrC2go2UmuObJ7eoOkDqXJc0gnKSsnguQZvEV9ApoPddWv0Ey3IPpmdksscHeJNy9vbLd_Ua5a_EVrAye45TaDqNzqGme7N43jqggKJ-Cs9DDhYwA9T9uTI5d8E1qbJJ4D1OrDT8Xneskd9tS1QuwdjpAYMTAN_jTX8LS_odBDrIFhIBGuk8XTQVhdDDIAMrRUhDJsVUHnSFydpTYA3EUmS6MqkmPbuya3t6Gzbbgrpa509aX2TM"/>
</div>
<div>
<h3 class="text-[#edb1ff] font-black font-headline text-xs tracking-widest">ROOT_USER</h3>
<p class="text-[#e5e2e1]/40 text-[10px] font-label">LEVEL_9_ARCHITECT</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-2">
<a class="flex items-center gap-4 px-4 py-3 bg-[#00d2ff]/10 text-[#00d2ff] border-r-2 border-[#00d2ff] font-label text-xs font-medium transition-all duration-300 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">terminal</span>
                INIT
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-label text-xs font-medium transition-all duration-300 hover:bg-white/5 hover:text-[#e5e2e1] hover:translate-x-1" href="#">
<span class="material-symbols-outlined">layers</span>
                PROJECTS
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-label text-xs font-medium transition-all duration-300 hover:bg-white/5 hover:text-[#e5e2e1] hover:translate-x-1" href="#">
<span class="material-symbols-outlined">memory</span>
                CORE
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-label text-xs font-medium transition-all duration-300 hover:bg-white/5 hover:text-[#e5e2e1] hover:translate-x-1" href="#">
<span class="material-symbols-outlined">sensors</span>
                STATUS
            </a>
</nav>
<div class="px-4 mt-auto space-y-4">
<button class="w-full py-3 bg-gradient-to-r from-[#edb1ff]/20 to-[#9d50bb]/20 border border-[#edb1ff]/30 text-[#edb1ff] font-label text-[10px] tracking-widest uppercase hover:from-[#edb1ff]/30 transition-all">
                DEPLOY_REQUEST
            </button>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-label text-xs font-medium transition-all duration-300 hover:text-[#e5e2e1]" href="#">
<span class="material-symbols-outlined">settings</span>
                SETTINGS
            </a>
</div>
</aside>
<main class="xl:pl-64 pt-20">
<section class="relative h-[921px] flex items-center justify-center overflow-hidden">
<div class="hero-noise absolute inset-0 z-10"></div>
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/60 to-[#131313] z-10"></div>
<img alt="Cinematic Developer Workspace" class="w-full h-full object-cover" data-alt="Cinematic 3D render from behind a person sitting at a dark desk coding. Ultra-wide curved monitor with glowing code, mechanical keyboard, soft desk lamp, and a steaming coffee mug. Moody atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Y6Qg6J5-BgXiJBQxDeT9o3eEbHDCXFWiIHFHl1BLMl_Zn-dFb5Jjx-3RT47ZbTRzFEQS8Vr6rFN_BzDoTw2WGlap6fFrfNRI79hmqT8EH7wNmTxI0EjXyNecgu6i9L1L6bQn_hFif5Th8IprP-GCBAgB2MZal2e9eJJ0hla0L259smKga5nTuZQuGuoFUHNwjFzd1TGnRhMwzOFj0Tia0dQMY0yOaCvT8hIeaYMWgW5bjyWfldsBqMYOi1ovl_K_whY0Jh2-2r4T"/>
</div>
<div class="relative z-20 container mx-auto px-8 text-center">
<div class="inline-block px-3 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full">
<span class="text-primary font-label text-[10px] tracking-[0.2em] uppercase">System_Active_v4.0.2</span>
</div>
<h1 class="text-6xl md:text-8xl font-black font-headline tracking-tighter text-glow leading-none mb-8 max-w-4xl mx-auto">
                    ARCHITECT THE <span class="text-secondary">FUTURE</span>
</h1>
<p class="text-on-surface-variant font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed">
                    A cinematic execution environment for high-level developers. Layering precision engineering with architectural vision.
                </p>
<div class="flex flex-col md:flex-row items-center justify-center gap-6">
<button class="group relative px-10 py-4 bg-surface-container-highest/40 glass-panel border border-primary/30 text-primary font-headline font-bold tracking-widest uppercase text-sm hover:border-primary transition-all duration-500">
<span class="relative z-10">INITIALIZE_CORE</span>
<div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
<button class="px-10 py-4 text-on-surface font-headline tracking-widest uppercase text-sm border border-white/5 hover:border-white/20 transition-all">
                        VIEW_DOCUMENTATION
                    </button>
</div>
</div>
<div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
<span class="font-label text-[10px] tracking-[0.4em] uppercase text-on-surface">SCROLL TO ENTER</span>
<div class="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
</div>
</section>
<section class="py-32 px-8 container mx-auto">
<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
<div class="md:col-span-8 bg-surface-container-low/50 glass-panel border border-white/5 p-12 relative group overflow-hidden">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700"></div>
<div class="flex flex-col h-full">
<div class="flex justify-between items-start mb-12">
<div>
<span class="text-primary font-label text-[10px] tracking-widest uppercase block mb-2">Primary_Node</span>
<h2 class="text-4xl font-headline font-bold text-on-surface">Digital Architecture</h2>
</div>
<span class="material-symbols-outlined text-4xl text-primary/30">architecture</span>
</div>
<div class="grid grid-cols-2 gap-8 mb-12">
<div>
<p class="text-on-surface-variant font-body text-sm leading-relaxed mb-4">
                                    Our core philosophy relies on the seamless integration of technical precision and visual elegance. Every line of code is a structural beam.
                                </p>
<ul class="space-y-2 text-xs font-label text-secondary/70">
<li class="flex items-center gap-2"><span class="w-1 h-1 bg-secondary rounded-full"></span> REACTIVE_LATENCY_CONTROL</li>
<li class="flex items-center gap-2"><span class="w-1 h-1 bg-secondary rounded-full"></span> NEURAL_DYNAMICS_V2</li>
</ul>
</div>
<div class="bg-surface-container-lowest p-6 border border-white/5 font-label text-[10px] text-primary/40 leading-tight">
<span class="block text-primary mb-2">// System Initialization</span>
<div>void main() {</div>
<div class="pl-4">Core.init();</div>
<div class="pl-4">Process.deploy(0x4F);</div>
<div>}</div>
<div class="mt-4 text-secondary/40">// Status: Optimized</div>
</div>
</div>
<button class="mt-auto self-start text-xs font-headline font-bold tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
                            EXPLORE_BLUEPRINTS
                        </button>
</div>
</div>
<div class="md:col-span-4 bg-surface-container-low border border-white/5 p-8 flex flex-col justify-between">
<div>
<div class="w-12 h-12 bg-secondary/10 flex items-center justify-center mb-8">
<span class="material-symbols-outlined text-secondary">memory</span>
</div>
<h3 class="text-2xl font-headline font-bold mb-4">Core_Module_Status</h3>
<div class="space-y-6">
<div class="space-y-2">
<div class="flex justify-between text-[10px] font-label text-on-surface-variant">
<span>PROCESSING_POWER</span>
<span class="text-secondary">94%</span>
</div>
<div class="h-1 bg-white/5 overflow-hidden">
<div class="h-full bg-secondary w-[94%]"></div>
</div>
</div>
<div class="space-y-2">
<div class="flex justify-between text-[10px] font-label text-on-surface-variant">
<span>MEMORY_ALLOCATION</span>
<span class="text-primary">68%</span>
</div>
<div class="h-1 bg-white/5 overflow-hidden">
<div class="h-full bg-primary w-[68%]"></div>
</div>
</div>
</div>
</div>
<div class="mt-12">
<p class="text-xs text-on-surface-variant/60 font-body mb-6">
                            Active architectural nodes spanning 14 global datacenters. Level 9 redundancy enabled.
                        </p>
<div class="flex items-center gap-2">
<span class="w-2 h-2 bg-green-500 rounded-full"></span>
<span class="text-[10px] font-label tracking-widest text-on-surface">SYSTEM_OPTIMAL</span>
</div>
</div>
</div>
</div>
</section>
<section class="py-20 bg-surface-container-lowest/50 border-y border-white/5 px-8">
<div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="flex gap-6">
<span class="text-4xl font-headline font-black text-white/5">01</span>
<div>
<h4 class="font-headline font-bold mb-2">PRECISION_ENG</h4>
<p class="text-sm text-on-surface-variant/80 font-body leading-relaxed">Engineered for sub-millisecond response times in high-concurrency environments.</p>
</div>
</div>
<div class="flex gap-6">
<span class="text-4xl font-headline font-black text-white/5">02</span>
<div>
<h4 class="font-headline font-bold mb-2">OBSIDIAN_CORE</h4>
<p class="text-sm text-on-surface-variant/80 font-body leading-relaxed">Built upon an immutable core layer that ensures security by design and total data integrity.</p>
</div>
</div>
<div class="flex gap-6">
<span class="text-4xl font-headline font-black text-white/5">03</span>
<div>
<h4 class="font-headline font-bold mb-2">FLUID_INTERFACE</h4>
<p class="text-sm text-on-surface-variant/80 font-body leading-relaxed">A cinematic UI that adapts to your mental model, reducing cognitive load for deep work.</p>
</div>
</div>
</div>
</section>
</main>
<footer class="xl:pl-64 border-t border-white/5 py-12 px-8">
<div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div class="text-left">
<h2 class="text-lg font-bold font-headline tracking-tighter text-[#a5e7ff] mb-2">ARCHITECT.OS</h2>
<p class="text-[10px] font-label text-on-surface-variant/40 tracking-widest">© 2024 DEPLOY_SEQUENCE_INITIATED</p>
</div>
<div class="flex gap-8 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">
<a class="hover:text-primary transition-colors" href="#">PRIVACY_PROTOCOL</a>
<a class="hover:text-primary transition-colors" href="#">ENCRYPTION_TERMS</a>
<a class="hover:text-primary transition-colors" href="#">VULNERABILITY_REPORTS</a>
</div>
<div class="flex gap-4">
<a class="w-8 h-8 flex items-center justify-center border border-white/5 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-sm">terminal</span>
</a>
<a class="w-8 h-8 flex items-center justify-center border border-white/5 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined text-sm">code</span>
</a>
</div>
</div>
</footer>
<div class="fixed bottom-8 right-8 z-50 md:hidden">
<button class="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">terminal</span>
</button>
</div>
</body></html>

<!-- Project Gallery: Immersive 3D -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ARCHITECT.OS // PROJECT_VAULT</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#201f1f",
                    "surface": "#131313",
                    "inverse-surface": "#e5e2e1",
                    "error": "#ffb4ab",
                    "secondary": "#edb1ff",
                    "on-tertiary-fixed-variant": "#624000",
                    "on-surface-variant": "#bbc9cf",
                    "on-tertiary": "#442b00",
                    "primary-fixed-dim": "#47d6ff",
                    "tertiary-fixed-dim": "#ffba4a",
                    "surface-tint": "#47d6ff",
                    "surface-container-highest": "#353534",
                    "outline": "#859399",
                    "on-error-container": "#ffdad6",
                    "secondary-fixed-dim": "#edb1ff",
                    "on-primary-fixed-variant": "#004e60",
                    "secondary-container": "#6e208c",
                    "tertiary-container": "#ffb229",
                    "surface-container-high": "#2a2a2a",
                    "on-secondary-fixed": "#320046",
                    "tertiary": "#ffd79f",
                    "on-secondary-fixed-variant": "#6e208c",
                    "on-tertiary-container": "#6c4700",
                    "background": "#131313",
                    "on-tertiary-fixed": "#291800",
                    "on-primary": "#003543",
                    "primary-fixed": "#b6ebff",
                    "surface-container-low": "#1c1b1b",
                    "surface-dim": "#131313",
                    "outline-variant": "#3c494e",
                    "on-background": "#e5e2e1",
                    "inverse-on-surface": "#313030",
                    "on-primary-fixed": "#001f28",
                    "tertiary-fixed": "#ffddb1",
                    "primary": "#a5e7ff",
                    "surface-variant": "#353534",
                    "on-surface": "#e5e2e1",
                    "on-error": "#690005",
                    "primary-container": "#00d2ff",
                    "surface-container-lowest": "#0e0e0e",
                    "on-secondary-container": "#e498ff",
                    "secondary-fixed": "#f9d8ff",
                    "on-secondary": "#520070",
                    "surface-bright": "#3a3939",
                    "inverse-primary": "#00677f",
                    "on-primary-container": "#00566a"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Space Grotesk"],
                    "body": ["Inter"],
                    "label": ["Space Grotesk"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .perspective-1000 {
            perspective: 1000px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
        .digital-grid {
            background-image: 
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .glass-gradient {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-primary-container/30">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#131313]/40 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div class="text-xl font-bold tracking-tighter text-[#a5e7ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)] font-headline">ARCHITECT.OS</div>
<div class="hidden md:flex gap-12 font-headline tracking-tight text-sm uppercase">
<a class="text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300" href="#">STAGES</a>
<a class="text-[#a5e7ff] border-b border-[#00d2ff] pb-1 hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300" href="#">VAULT</a>
<a class="text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300" href="#">TERMINAL</a>
</div>
<div class="flex items-center gap-6">
<button class="font-headline tracking-widest text-sm uppercase px-6 py-2 border border-[#a5e7ff]/30 text-[#a5e7ff] hover:bg-[#a5e7ff]/10 transition-all duration-200 active:scale-95">CONNECT</button>
<span class="material-symbols-outlined text-[#a5e7ff] cursor-pointer" data-icon="menu">menu</span>
</div>
</nav>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-[#0e0e0e]/80 backdrop-blur-2xl hidden lg:flex flex-col py-8 z-40 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
<div class="px-8 mb-12">
<div class="flex items-center gap-3 mb-8">
<div class="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
<img alt="ROOT_USER" data-alt="close-up portrait of a high-tech digital avatar with subtle blue neon interface reflections on skin and focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVGorGSkRH3rD9iiinO8N8FM0ra0I-2ia_JJkSuoRG1U6rG_biWCzH2prmChD91s9Lspnh_nwzVrZ6w0fTvjOsu3csSwM0OCz_AGDX-k5Oxy0ClvzeIAVVRC-npxcPxroRFG9MyQfcU8LCSds845g4gbWsg7zRATn9KZXA9eUtEsBDh7FpK7E2dycFkJRSVEAQ2SzaWtZaXLlzRrDaMB74cGYaPXHgCOxL3uB0AeIvRhaRE-Wvm05Q3Xg4SjcM8ZyoCtx53IkRgaQu"/>
</div>
<div>
<div class="text-[#edb1ff] font-black font-headline text-sm tracking-widest">ROOT_USER</div>
<div class="text-[#e5e2e1]/40 text-[10px] font-mono tracking-tighter uppercase">LEVEL_9_ARCHITECT</div>
</div>
</div>
<nav class="space-y-2">
<div class="flex items-center gap-4 px-4 py-3 rounded text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 group cursor-pointer">
<span class="material-symbols-outlined text-lg" data-icon="terminal">terminal</span>
<span class="font-headline text-xs font-medium tracking-widest">INIT</span>
</div>
<div class="flex items-center gap-4 px-4 py-3 rounded bg-[#00d2ff]/10 text-[#00d2ff] border-r-2 border-[#00d2ff] transition-all duration-300 group cursor-pointer translate-x-1">
<span class="material-symbols-outlined text-lg" data-icon="layers">layers</span>
<span class="font-headline text-xs font-medium tracking-widest">PROJECTS</span>
</div>
<div class="flex items-center gap-4 px-4 py-3 rounded text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 group cursor-pointer">
<span class="material-symbols-outlined text-lg" data-icon="memory">memory</span>
<span class="font-headline text-xs font-medium tracking-widest">CORE</span>
</div>
<div class="flex items-center gap-4 px-4 py-3 rounded text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 group cursor-pointer">
<span class="material-symbols-outlined text-lg" data-icon="sensors">sensors</span>
<span class="font-headline text-xs font-medium tracking-widest">STATUS</span>
</div>
</nav>
</div>
<div class="mt-auto px-8 space-y-6">
<button class="w-full py-3 bg-[#edb1ff]/10 border border-[#edb1ff]/20 text-[#edb1ff] font-headline text-[10px] tracking-widest uppercase hover:bg-[#edb1ff]/20 transition-all">DEPLOY_REQUEST</button>
<div class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 hover:text-[#e5e2e1] transition-all cursor-pointer">
<span class="material-symbols-outlined text-lg" data-icon="settings">settings</span>
<span class="font-headline text-xs font-medium tracking-widest uppercase">SETTINGS</span>
</div>
</div>
</aside>
<!-- Main Content: Digital Vault -->
<main class="ml-0 lg:ml-64 pt-20 min-h-screen relative overflow-hidden bg-surface-dim">
<!-- Atmospheric Background Elements -->
<div class="absolute inset-0 digital-grid opacity-20 pointer-events-none"></div>
<div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
<div class="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>
<!-- Translucent Background Text -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
<h2 class="font-headline font-black text-[25vw] leading-none text-white/[0.02] tracking-tighter rotate-[-5deg] translate-y-20">PROJECTS</h2>
</div>
<!-- Project Gallery Header -->
<header class="relative z-10 px-8 md:px-16 pt-16 pb-8 max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div class="flex items-center gap-2 mb-4">
<span class="h-[1px] w-12 bg-primary"></span>
<span class="font-headline text-xs tracking-[0.3em] text-primary uppercase">Stage 03 / The Vault</span>
</div>
<h1 class="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface">IMMERSIVE_ARTEFACTS</h1>
</div>
<div class="flex gap-4 mb-2">
<div class="bg-surface-container-highest/40 border border-outline-variant/30 px-4 py-2 backdrop-blur-md">
<span class="font-headline text-[10px] tracking-widest text-on-surface-variant uppercase">TOTAL_ENTITIES: 12</span>
</div>
<div class="bg-surface-container-highest/40 border border-outline-variant/30 px-4 py-2 backdrop-blur-md">
<span class="font-headline text-[10px] tracking-widest text-on-surface-variant uppercase">FILTER: ALL_CORES</span>
</div>
</div>
</div>
</header>
<!-- Gallery Grid -->
<section class="relative z-10 px-8 md:px-16 pb-32 max-w-7xl mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 perspective-1000">
<!-- Project Card 1 -->
<div class="group preserve-3d transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 cursor-pointer">
<div class="relative bg-surface-container-high/40 backdrop-blur-2xl border-l-[3px] border-primary shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all">
<div class="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
<img alt="Cyberpunk Interface" class="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" data-alt="highly detailed digital UI dashboard with floating holographic data points and deep cyan light glows in a dark obsidian space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAccHwJOdwLFg1qJXlGL06O3zuW47Xkdjk9EM3OFWfp7jiTYvsZNdBtIRhbk2Rgs3X-FrmWDqnTDQw1ODJ5x_NAp--3hiw45WryF9x8BX3ALcTw_s4PQyvL1ykSHkRTQqY6PD6stl0K5dd00wMyioZILZOdkVF_capEZweWKrRZZ6caRGn9yLxGXWMbJFRPm5rzPVw0cxmCUE9Ah02OMheNRaxFv33FxHd8Fp6DHV3bDj-qFDpAYBiAZZfRwaTVgGDP3PWp4-Thv9Sy"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<!-- Overlay Info -->
<div class="absolute bottom-0 left-0 w-full p-8 translate-z-20">
<div class="font-headline text-[10px] tracking-widest text-primary mb-2">ARCH_01 / CORE_SYSTEM</div>
<h3 class="font-headline text-2xl font-bold tracking-tight text-on-surface mb-4">NEURAL_DASH</h3>
<div class="flex gap-2">
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">WEBGL</span>
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">R3F</span>
</div>
</div>
</div>
</div>
</div>
<!-- Project Card 2 (Staggered) -->
<div class="group preserve-3d transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 cursor-pointer md:mt-24">
<div class="relative bg-surface-container-high/40 backdrop-blur-2xl border-l-[3px] border-secondary shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 group-hover:shadow-[0_0_30px_rgba(237,177,255,0.2)] transition-all">
<div class="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
<img alt="Ethereal Geometry" class="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" data-alt="minimalist 3D abstract geometric spheres floating in a foggy violet atmosphere with dramatic soft studio lighting and refractions" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfI5gm_nCQKpRf0sMfGVcodWDD6y4QxrdK_nqeLdhzspIXoSbeM1LWHBnmO-lWi1tg-VYe20Yploy_vqOE5ReDDnWlrDWyjzbEgWIJLeIKj-9c9OjOLTK2KCUdTCqdd7y3FCcqnAri4f0ewJEGP59BzdghZITI9Yo5DMDaIdVnTMIOnjEpVLEdlB_abXzSU2gNChsH7ur-KXV1dDJoQAny39MChwmM3W87BNIZDxOmRXO9Smw5deuT1QKmkJBC6kj3R44K8BoE8Hu"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 w-full p-8 translate-z-20">
<div class="font-headline text-[10px] tracking-widest text-secondary mb-2">ARCH_02 / SPATIAL_UI</div>
<h3 class="font-headline text-2xl font-bold tracking-tight text-on-surface mb-4">VOID_SPHERE</h3>
<div class="flex gap-2">
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">THREE.JS</span>
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">GSAP</span>
</div>
</div>
</div>
</div>
</div>
<!-- Project Card 3 -->
<div class="group preserve-3d transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 cursor-pointer">
<div class="relative bg-surface-container-high/40 backdrop-blur-2xl border-l-[3px] border-primary-container shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all">
<div class="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
<img alt="Hardware Core" class="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" data-alt="close up of advanced futuristic computer circuit board with glowing electric blue trails and metallic obsidian components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJgCgXmHopfRLwDxeWk55Bpn2uuRGZVivyxPk9qMgExt93ruyOUGJ6I-a8L9rukAqvA_cTz4JjHhYF7Db-oVJVesZdNlQayWKIqJdJrXBIjsupKW8Dc_2RVtLf6-EjNM1cadTaUPZBKK_c6e4WVUx_P5Jtvms9CZWbTc3Gc49cv_UTD0twKkl_BZYmei3jTyD2KncDggmVojS9VyavgdxR4OLWwY_dLh4sQqrmQkyYsQbDG9vEYBNspXZebzyub0QXx0G-lDsUvEM0"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 w-full p-8 translate-z-20">
<div class="font-headline text-[10px] tracking-widest text-primary-container mb-2">ARCH_03 / COMPUTE_ENGINE</div>
<h3 class="font-headline text-2xl font-bold tracking-tight text-on-surface mb-4">OS_CORE_V2</h3>
<div class="flex gap-2">
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">C++</span>
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">VULKAN</span>
</div>
</div>
</div>
</div>
</div>
<!-- Project Card 4 (Staggered Row 2) -->
<div class="group preserve-3d transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 cursor-pointer md:-mt-12">
<div class="relative bg-surface-container-high/40 backdrop-blur-2xl border-l-[3px] border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
<div class="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
<img alt="Global Network" class="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" data-alt="view of earth from space at night showing glowing network connections across continents in white and gold light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPBxF82dxyh1Nk77Lh7CVvzUnItcwcEsy1AB0zcpF3uqQguyOcz1WYm0P9qaf51Cxr_vQCe75nU0rBTV3qkoEPia_D7vY9e1guIq6DtEDywlOZEqd3CTYjMM6_zEYsbWquYViRytxLZrzcEqf_YerzC9X7HE8CTMxbmyRS3RGhtcc5pIwOVV8bWMoDTA4o1S1rpv293kb1VtJYAVjheMLNYUBX0kH2XVAiyQfJljVk-1-t5_MJfTAX7DjdiBS8irVjuX6QR90v1_o"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 w-full p-8 translate-z-20">
<div class="font-headline text-[10px] tracking-widest text-on-surface-variant mb-2">ARCH_04 / GLOBAL_LINK</div>
<h3 class="font-headline text-2xl font-bold tracking-tight text-on-surface mb-4">ZENITH_API</h3>
<div class="flex gap-2">
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">GO</span>
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">gRPC</span>
</div>
</div>
</div>
</div>
</div>
<!-- Project Card 5 -->
<div class="group preserve-3d transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 cursor-pointer md:mt-12">
<div class="relative bg-surface-container-high/40 backdrop-blur-2xl border-l-[3px] border-secondary shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 group-hover:shadow-[0_0_30px_rgba(237,177,255,0.2)] transition-all">
<div class="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
<img alt="Liquid Interface" class="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" data-alt="abstract liquid chrome flowing in zero gravity with neon purple and pink reflections and sharp high-contrast highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWlkSHy7ImNJV5Y6Y0j6KSnE0yynIKSPQIBxWPL2Z8RtC5JLJbWfEv4Himee1wF9SkkGsh1lgC5X7ZJYcE72K54fp56aMm1H30e58y882XqfSc3tK_4gY7NRrtP0KTx4rA8LNnwsLC-_ErR4uCGE7OMNuJoYW57o7XaX-RsoXaceHmw0Q8pw1i7vFrr_7UpbrlIwofWnM6OBO-N6whH0z2-YxFPubBChNil8bADfoOlvMsdAanH5SpvwXHfZrvyewdSb2RVjIGVDm4"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 w-full p-8 translate-z-20">
<div class="font-headline text-[10px] tracking-widest text-secondary mb-2">ARCH_05 / LIQUID_DESIGN</div>
<h3 class="font-headline text-2xl font-bold tracking-tight text-on-surface mb-4">FLUID_ENGINE</h3>
<div class="flex gap-2">
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">GLSL</span>
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">P5.JS</span>
</div>
</div>
</div>
</div>
</div>
<!-- Project Card 6 -->
<div class="group preserve-3d transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 cursor-pointer md:-mt-12">
<div class="relative bg-surface-container-high/40 backdrop-blur-2xl border-l-[3px] border-primary shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all">
<div class="aspect-[4/5] relative overflow-hidden bg-surface-container-lowest">
<img alt="Vector Art" class="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" data-alt="minimalist architectural vector lines forming a complex 3D grid in blue light on a pitch black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4eAbcMi6fGQSZSYrBDj17llaa1BykW_snLbQG8_pzqGNmNk-3-kcWbQOZ1eIwd7SPdzFacUaGAxNyg_8CKCRfV3STt5toGDysahGSWBe5bsSM6o__RsC6y4NwHBEIyK1rsUTZmbSKuEYNYgn7lo21GEmYIC-ZmeZB0yP9iPt2BKO209Drb6VeHImHeFF6yeisW6bj8aGyfMY0t1jt1Oiu4V63ZU8rVNYikiYJilywLZsWsYs_UFucpvAFe2CjQXagHwrBPmFLWvEO"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
<div class="absolute bottom-0 left-0 w-full p-8 translate-z-20">
<div class="font-headline text-[10px] tracking-widest text-primary mb-2">ARCH_06 / VECTOR_GRID</div>
<h3 class="font-headline text-2xl font-bold tracking-tight text-on-surface mb-4">GRID_X</h3>
<div class="flex gap-2">
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">SVG</span>
<span class="px-2 py-1 bg-surface-container-lowest/80 text-[10px] font-headline border border-outline-variant/20">D3.JS</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Scanning Line Decor -->
<div class="fixed top-0 left-0 w-full h-[1px] bg-primary/20 shadow-[0_0_15px_#00d2ff] opacity-10 pointer-events-none z-50 animate-[scan_8s_linear_infinite]"></div>
<!-- Terminal Snippet Sidebar Decor -->
<div class="fixed right-8 bottom-8 hidden xl:block w-72 bg-surface-container-lowest/60 backdrop-blur-md border border-outline-variant/20 p-6 z-20">
<div class="flex justify-between items-center mb-4">
<div class="flex gap-1.5">
<div class="w-2 h-2 rounded-full bg-error/40"></div>
<div class="w-2 h-2 rounded-full bg-tertiary/40"></div>
<div class="w-2 h-2 rounded-full bg-primary/40"></div>
</div>
<span class="font-headline text-[8px] tracking-widest text-on-surface-variant/50">VAULT_LOGGER.LOG</span>
</div>
<div class="font-mono text-[9px] text-on-surface-variant leading-relaxed space-y-1">
<p class="text-primary">&gt; INITIALIZING VAULT_STAGE_03...</p>
<p class="text-on-surface-variant/40">STATUS: SCANNING_ASSETS</p>
<p class="text-on-surface-variant/40">ENTITIES_LOADED: 12/12</p>
<p class="text-secondary">&gt; DEPLOYING SPATIAL_GRID</p>
<p class="text-on-surface-variant/40">RENDER_LATENCY: 4.2ms</p>
<p class="text-primary animate-pulse">&gt; WAITING_FOR_INPUT_</p>
</div>
</div>
<!-- Scroll Indicator -->
<div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer z-20">
<span class="font-headline text-[10px] tracking-[0.5em] text-on-surface-variant group-hover:text-primary transition-colors">DESCEND</span>
<div class="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent"></div>
</div>
</main>
<style>
        @keyframes scan {
            from { top: -10%; }
            to { top: 110%; }
        }
        
        /* Custom Hover Perspective Effects */
        .group:hover {
            transform: translateZ(50px);
        }
        
        .translate-z-20 {
            transform: translateZ(20px);
        }
    </style>
</body></html>

<!-- About & Skills: Inside the Monitor -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#201f1f",
                    "surface": "#131313",
                    "inverse-surface": "#e5e2e1",
                    "error": "#ffb4ab",
                    "secondary": "#edb1ff",
                    "on-tertiary-fixed-variant": "#624000",
                    "on-surface-variant": "#bbc9cf",
                    "on-tertiary": "#442b00",
                    "primary-fixed-dim": "#47d6ff",
                    "tertiary-fixed-dim": "#ffba4a",
                    "surface-tint": "#47d6ff",
                    "surface-container-highest": "#353534",
                    "outline": "#859399",
                    "on-error-container": "#ffdad6",
                    "secondary-fixed-dim": "#edb1ff",
                    "on-primary-fixed-variant": "#004e60",
                    "secondary-container": "#6e208c",
                    "tertiary-container": "#ffb229",
                    "surface-container-high": "#2a2a2a",
                    "on-secondary-fixed": "#320046",
                    "tertiary": "#ffd79f",
                    "on-secondary-fixed-variant": "#6e208c",
                    "on-tertiary-container": "#6c4700",
                    "background": "#131313",
                    "on-tertiary-fixed": "#291800",
                    "on-primary": "#003543",
                    "primary-fixed": "#b6ebff",
                    "surface-container-low": "#1c1b1b",
                    "surface-dim": "#131313",
                    "outline-variant": "#3c494e",
                    "on-background": "#e5e2e1",
                    "inverse-on-surface": "#313030",
                    "on-primary-fixed": "#001f28",
                    "tertiary-fixed": "#ffddb1",
                    "primary": "#a5e7ff",
                    "surface-variant": "#353534",
                    "on-surface": "#e5e2e1",
                    "on-error": "#690005",
                    "primary-container": "#00d2ff",
                    "surface-container-lowest": "#0e0e0e",
                    "on-secondary-container": "#e498ff",
                    "secondary-fixed": "#f9d8ff",
                    "error-container": "#93000a",
                    "on-secondary": "#520070",
                    "surface-bright": "#3a3939",
                    "inverse-primary": "#00677f",
                    "on-primary-container": "#00566a"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Space Grotesk"],
                    "body": ["Inter"],
                    "label": ["Space Grotesk"]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #131313;
            color: #e5e2e1;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .glass-panel {
            background: rgba(53, 53, 52, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .skill-node {
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
        }
        .noise-overlay {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.02;
            pointer-events: none;
        }
        .light-streak {
            background: linear-gradient(90deg, transparent, rgba(165, 231, 255, 0.1), transparent);
            filter: blur(40px);
        }
    </style>
</head>
<body class="min-h-screen relative selection:bg-primary/30">
<div class="fixed inset-0 noise-overlay z-[100]"></div>
<!-- Background Atmosphere -->
<div class="fixed inset-0 z-0 overflow-hidden">
<div class="absolute top-[10%] left-[-5%] w-[40%] h-[1px] light-streak rotate-[-15deg]"></div>
<div class="absolute bottom-[20%] right-[-10%] w-[50%] h-[1px] light-streak rotate-[25deg]"></div>
<div class="absolute top-[60%] left-[20%] w-[30%] h-[2px] bg-secondary/5 blur-[80px]"></div>
</div>
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#131313]/40 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div class="text-xl font-bold tracking-tighter text-[#a5e7ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)] font-['Space_Grotesk']">
            ARCHITECT.OS
        </div>
<div class="hidden md:flex gap-8 items-center">
<a class="font-['Space_Grotesk'] tracking-tight text-sm uppercase text-[#a5e7ff] border-b border-[#00d2ff] pb-1 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300" href="#">STAGES</a>
<a class="font-['Space_Grotesk'] tracking-tight text-sm uppercase text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300" href="#">VAULT</a>
<a class="font-['Space_Grotesk'] tracking-tight text-sm uppercase text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300" href="#">TERMINAL</a>
</div>
<div class="flex items-center gap-6">
<button class="font-['Space_Grotesk'] tracking-tight text-sm uppercase text-[#a5e7ff] border border-[#a5e7ff]/30 px-4 py-1.5 hover:bg-[#a5e7ff]/10 transition-all scale-95 duration-200 ease-out hover:tracking-widest">
                CONNECT
            </button>
<span class="material-symbols-outlined text-[#e5e2e1]/60 cursor-pointer" data-icon="menu">menu</span>
</div>
</nav>
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-[#0e0e0e]/80 backdrop-blur-2xl flex flex-col h-full py-8 z-40 hidden xl:flex shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
<div class="px-8 mb-12">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
<img alt="Developer Avatar" data-alt="abstract geometric shape avatar with purple and blue gradients on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJHRRSqWDlTjk4JUgO0BjasZMZCvEwenRbtnzLR9q4heANRU1vygEsS-AInffEPg9IoxDbvi-r3nL9jQ6jV894DACETeUAAfCJzNG_08sMpEhYjHDCNH1lk3BeiPZ2Uym7sz5qCJGdJLQHa7wtnQEbKULEF433K_kLzp3em4IqVV5A-FzDPBgrfqziwdpsd-AvC84amRdwzPMOWgmoFFnh3Rij6PP_5TltOtz0XC6E12HJTvGewowq05ukFAL2jWdgkgF3DQ-qmYdR"/>
</div>
<div>
<div class="text-[#edb1ff] font-black font-['Space_Grotesk'] text-sm tracking-widest">ROOT_USER</div>
<div class="text-[10px] text-on-surface-variant font-mono opacity-50 uppercase">LEVEL_9_ARCHITECT</div>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-2">
<a class="flex items-center gap-4 px-4 py-3 bg-[#00d2ff]/10 text-[#00d2ff] border-r-2 border-[#00d2ff] font-['Space_Grotesk'] text-xs font-medium transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined text-lg" data-icon="terminal">terminal</span>
                INIT
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-['Space_Grotesk'] text-xs font-medium hover:bg-white/5 hover:text-[#e5e2e1] transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined text-lg" data-icon="layers">layers</span>
                PROJECTS
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-['Space_Grotesk'] text-xs font-medium hover:bg-white/5 hover:text-[#e5e2e1] transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined text-lg" data-icon="memory">memory</span>
                CORE
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-['Space_Grotesk'] text-xs font-medium hover:bg-white/5 hover:text-[#e5e2e1] transition-all hover:translate-x-1" href="#">
<span class="material-symbols-outlined text-lg" data-icon="sensors">sensors</span>
                STATUS
            </a>
</nav>
<div class="px-4 mt-auto space-y-4">
<button class="w-full py-3 bg-secondary/10 border border-secondary/20 text-secondary font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase hover:bg-secondary/20 transition-all">
                DEPLOY_REQUEST
            </button>
<a class="flex items-center gap-4 px-4 py-3 text-[#e5e2e1]/40 font-['Space_Grotesk'] text-xs font-medium hover:bg-white/5 hover:text-[#e5e2e1] transition-all" href="#">
<span class="material-symbols-outlined text-lg" data-icon="settings">settings</span>
                SETTINGS
            </a>
</div>
</aside>
<!-- Main Canvas -->
<main class="pt-20 xl:pl-64 min-h-screen flex flex-col items-center justify-center relative px-6 md:px-12">
<!-- Hero Header -->
<div class="w-full max-w-7xl mb-12 relative z-10">
<div class="inline-block px-3 py-1 mb-6 border border-primary/20 bg-primary/5 text-primary text-[10px] tracking-[0.3em] font-mono uppercase">
                Transition_Phase::01 / Inside_Monitor
            </div>
<h1 class="text-6xl md:text-8xl lg:text-9xl font-bold font-headline tracking-tighter text-on-surface leading-none">
                ABOUT <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ME</span>
</h1>
</div>
<!-- Floating UI Grid -->
<div class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
<!-- Bio Card (Glassmorphism) -->
<div class="lg:col-span-7 flex flex-col gap-6">
<div class="glass-panel p-8 rounded-lg relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-primary text-4xl" data-icon="data_object">data_object</span>
</div>
<div class="font-mono text-primary/60 text-xs mb-4">&lt;identity_profile&gt;</div>
<h3 class="text-2xl font-headline font-bold mb-4 text-primary">Senior Systems Architect</h3>
<p class="text-on-surface-variant leading-relaxed text-lg mb-6">
                        Bridging the gap between brutalist machine efficiency and fluid human experience. Specializing in high-performance digital ecosystems and immersive interface logic.
                    </p>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 bg-surface-container-lowest/50 border border-white/5">
<div class="text-[10px] uppercase text-on-surface-variant/50 mb-1">Status</div>
<div class="text-secondary font-mono">AVAILABLE_FOR_NODES</div>
</div>
<div class="p-4 bg-surface-container-lowest/50 border border-white/5">
<div class="text-[10px] uppercase text-on-surface-variant/50 mb-1">Location</div>
<div class="text-primary font-mono">GRID_COORDINATE_91</div>
</div>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="glass-panel p-6 rounded-lg border-l-2 border-primary/50">
<span class="material-symbols-outlined text-primary mb-3" data-icon="rocket_launch">rocket_launch</span>
<div class="text-sm font-headline font-bold uppercase tracking-widest mb-2">Exp: 12.0 Cycles</div>
<div class="text-xs text-on-surface-variant leading-relaxed">Scaling decentralized protocols from zero-state to mass adoption.</div>
</div>
<div class="glass-panel p-6 rounded-lg border-l-2 border-secondary/50">
<span class="material-symbols-outlined text-secondary mb-3" data-icon="auto_awesome">auto_awesome</span>
<div class="text-sm font-headline font-bold uppercase tracking-widest mb-2">Visual Logic</div>
<div class="text-xs text-on-surface-variant leading-relaxed">Mastery of spatial UI/UX and cinematic digital storytelling.</div>
</div>
</div>
</div>
<!-- Skills Visualization -->
<div class="lg:col-span-5 relative min-h-[400px] glass-panel rounded-lg overflow-hidden flex flex-col">
<div class="p-6 border-b border-white/5 flex justify-between items-center bg-surface-container-low/30">
<span class="text-xs font-headline font-bold tracking-widest text-[#a5e7ff]">SKILL_NODES</span>
<span class="material-symbols-outlined text-sm text-primary" data-icon="hub">hub</span>
</div>
<div class="flex-1 relative p-8">
<!-- Abstract Skill Connections -->
<svg class="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none">
<line stroke="#a5e7ff" stroke-width="1" x1="20%" x2="50%" y1="20%" y2="50%"></line>
<line stroke="#edb1ff" stroke-width="1" x1="80%" x2="50%" y1="30%" y2="50%"></line>
<line stroke="#a5e7ff" stroke-width="1" x1="50%" x2="60%" y1="50%" y2="80%"></line>
<line stroke="#edb1ff" stroke-width="1" x1="20%" x2="10%" y1="20%" y2="60%"></line>
</svg>
<!-- Interactive Nodes -->
<div class="absolute top-[15%] left-[15%] skill-node w-16 h-16 rounded-full bg-primary-container/20 border border-primary flex items-center justify-center text-[10px] font-mono text-primary backdrop-blur-md">
                        REACT
                    </div>
<div class="absolute top-[45%] left-[45%] skill-node w-24 h-24 rounded-full bg-secondary-container/20 border border-secondary flex flex-col items-center justify-center text-[12px] font-mono text-secondary backdrop-blur-md">
<span class="material-symbols-outlined mb-1" data-icon="token">token</span>
                        WEBGL
                    </div>
<div class="absolute top-[25%] right-[15%] skill-node w-14 h-14 rounded-full bg-surface-container-highest/40 border border-outline-variant flex items-center justify-center text-[10px] font-mono text-on-surface backdrop-blur-md">
                        RUST
                    </div>
<div class="absolute bottom-[15%] left-[25%] skill-node w-20 h-20 rounded-full bg-primary-container/10 border border-primary/40 flex items-center justify-center text-[10px] font-mono text-primary/80 backdrop-blur-md">
                        TYPESCRIPT
                    </div>
<div class="absolute bottom-[25%] right-[20%] skill-node w-12 h-12 rounded-full bg-surface-container-highest/20 border border-white/10 flex items-center justify-center text-[8px] font-mono text-on-surface-variant backdrop-blur-md">
                        AWS
                    </div>
</div>
<div class="p-6 bg-surface-container-low/30 border-t border-white/5">
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 bg-surface-container-highest text-[10px] font-mono rounded">DOCKER</span>
<span class="px-2 py-1 bg-surface-container-highest text-[10px] font-mono rounded">SOLIDITY</span>
<span class="px-2 py-1 bg-surface-container-highest text-[10px] font-mono rounded">PYTHON</span>
<span class="px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-mono rounded">AI_MODELS</span>
</div>
</div>
</div>
</div>
<!-- Details Secondary Section (Bento Style) -->
<div class="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
<div class="glass-panel p-6 rounded-lg relative overflow-hidden group h-48 flex flex-col justify-end">
<img class="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" data-alt="extreme close up of green glowing server hardware circuitry in a dark futuristic server room environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhWgT6R1tHDbRMPDiSOSb9dOcw-kN96CEhwGViqcEpPr3Tnjj8dDBNyEqGBtEqGw4FSxnR7pCHidg12qXfBqjyhTB6Eqp0EXl9w5ILM1y-ZcpNAUeBmuYQ5suNVNMtNpEbiO9u2AiUUxwjfomTWivxbW6Iufpk_AyqaObOjaJ8CWaVumXB2hXFnK5IDvRqBcvP4ONv5gL_Kx8HNXZ4yOlVpZAO2r9Oxi1SI_gtPDNRfCwOD1tHOo1DaWs7PyutkNfyFA1t1b6vMVel"/>
<div class="relative z-10">
<div class="text-[10px] font-mono text-primary mb-1">01_CORE</div>
<h4 class="font-headline font-bold tracking-wider">HARDWARE_INTEGRATION</h4>
</div>
</div>
<div class="glass-panel p-6 rounded-lg relative overflow-hidden group h-48 flex flex-col justify-end">
<img class="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" data-alt="abstract 3d blockchain node network visual with glowing blue points and digital web connections in dark space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ewEJL72kyr_-P-ho3FIqRlBtfJG7jKcISyl6Z39_AFip_WoxzpMa0ObIQxpBtS7tWyM1rk84MN0NaoNpwndr9Vqf9v8Cl04U5D3NPnucgv1N-NDzAP_u9RpJ-gPwaauTyYOq_VgdRxO_cjNdD1dmNM96O613POmj2sZyzN0gygh9nVdK1jIW2uOEpxlPXyKW4P8z5D71_tva7XKeairiIQ-ZTYYXdOeVgQ4ByDP9cEImpZ4Ke9sdkMGAs0ZSaR-d8YaQwqMNJq0z"/>
<div class="relative z-10">
<div class="text-[10px] font-mono text-secondary mb-1">02_NETWORK</div>
<h4 class="font-headline font-bold tracking-wider">DISTRIBUTED_SYSTEMS</h4>
</div>
</div>
<div class="glass-panel p-6 rounded-lg relative overflow-hidden group h-48 flex flex-col justify-end">
<img class="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" data-alt="smooth flowing colorful abstract liquid gradient silk texture with purple and cyan neon lighting effects" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0HkMwJsfqynn4jR1Ry_rBsuFEjlvOidGRRhbbGi2DTjL3a31sZX3MMzk50RHAqMENbUyLmcOokTINrSb8n2sYWYFd0PbcjDYRMKMYyPN14WzwIw5xJLbT2a5yMdd2j1-2Iz8JQ2Ql2cyn7RrrKNaxqUzNvlgzgCtvJCdqY_TvZQCKiRT3XFr3NwJKKURywEDOBpEJk2MPrjzmgFO2Baw9xagoOrICIZ98IbnUI6xQ09Fr4wgHp1l2qltu-Es2vlkIYlElEc482q3u"/>
<div class="relative z-10">
<div class="text-[10px] font-mono text-primary mb-1">03_INTERFACE</div>
<h4 class="font-headline font-bold tracking-wider">SPATIAL_COMPUTING</h4>
</div>
</div>
</div>
</main>
<!-- Footer Terminal -->
<footer class="w-full py-6 px-12 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-on-surface-variant/40">
<div>SYS_TIME: 14:02:44_UTC</div>
<div class="flex gap-6 uppercase tracking-widest">
<a class="hover:text-primary transition-colors" href="#">Documentation</a>
<a class="hover:text-primary transition-colors" href="#">Security_Protocol</a>
<a class="hover:text-primary transition-colors" href="#">Manifesto</a>
</div>
<div>ARCHITECT_v9.4.2</div>
</footer>
</body></html>

<!-- Design System -->
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ARCHITECT.OS | TERMINAL_CONTACT</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;family=Fira+Code:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container": "#201f1f",
                    "surface": "#131313",
                    "inverse-surface": "#e5e2e1",
                    "error": "#ffb4ab",
                    "secondary": "#edb1ff",
                    "on-tertiary-fixed-variant": "#624000",
                    "on-surface-variant": "#bbc9cf",
                    "on-tertiary": "#442b00",
                    "primary-fixed-dim": "#47d6ff",
                    "tertiary-fixed-dim": "#ffba4a",
                    "surface-tint": "#47d6ff",
                    "surface-container-highest": "#353534",
                    "outline": "#859399",
                    "on-error-container": "#ffdad6",
                    "secondary-fixed-dim": "#edb1ff",
                    "on-primary-fixed-variant": "#004e60",
                    "secondary-container": "#6e208c",
                    "tertiary-container": "#ffb229",
                    "surface-container-high": "#2a2a2a",
                    "on-secondary-fixed": "#320046",
                    "tertiary": "#ffd79f",
                    "on-secondary-fixed-variant": "#6e208c",
                    "on-tertiary-container": "#6c4700",
                    "background": "#131313",
                    "on-tertiary-fixed": "#291800",
                    "on-primary": "#003543",
                    "primary-fixed": "#b6ebff",
                    "surface-container-low": "#1c1b1b",
                    "surface-dim": "#131313",
                    "outline-variant": "#3c494e",
                    "on-background": "#e5e2e1",
                    "inverse-on-surface": "#313030",
                    "on-primary-fixed": "#001f28",
                    "tertiary-fixed": "#ffddb1",
                    "primary": "#a5e7ff",
                    "surface-variant": "#353534",
                    "on-surface": "#e5e2e1",
                    "on-error": "#690005",
                    "primary-container": "#00d2ff",
                    "surface-container-lowest": "#0e0e0e",
                    "on-secondary-container": "#e498ff",
                    "secondary-fixed": "#f9d8ff",
                    "error-container": "#93000a",
                    "on-secondary": "#520070",
                    "surface-bright": "#3a3939",
                    "inverse-primary": "#00677f",
                    "on-primary-container": "#00566a"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Space Grotesk"],
                    "body": ["Inter"],
                    "label": ["Space Grotesk"],
                    "mono": ["Fira Code", "monospace"]
            }
          },
        }
      }
    </script>
<style>
      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      }
      .glass-panel {
        background: rgba(19, 19, 19, 0.4);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(229, 226, 225, 0.05);
      }
      .terminal-scanline {
        background: linear-gradient(to bottom, transparent 50%, rgba(0, 210, 255, 0.05) 51%, transparent 100%);
        background-size: 100% 4px;
        pointer-events: none;
      }
      .cursor-blink {
        animation: blink 1s step-end infinite;
      }
      @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
      }
      .glitch-hover:hover {
        box-shadow: 0 0 15px rgba(0, 210, 255, 0.4), inset 0 0 5px rgba(237, 177, 255, 0.4);
        text-shadow: 2px 0 #edb1ff, -2px 0 #00d2ff;
      }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#131313]/40 backdrop-blur-xl flex justify-between items-center px-8 h-20 max-w-full mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div class="text-xl font-bold tracking-tighter text-[#a5e7ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.5)] font-['Space_Grotesk']">
            ARCHITECT.OS
        </div>
<div class="hidden md:flex items-center gap-8 font-['Space_Grotesk'] tracking-tight text-sm uppercase">
<a class="text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 duration-200 ease-out hover:tracking-widest" href="#">STAGES</a>
<a class="text-[#e5e2e1]/60 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 duration-200 ease-out hover:tracking-widest" href="#">VAULT</a>
<a class="text-[#a5e7ff] border-b border-[#00d2ff] pb-1 hover:text-[#a5e7ff] hover:drop-shadow-[0_0_5px_#00d2ff] transition-all duration-300 scale-95 duration-200 ease-out hover:tracking-widest" href="#">TERMINAL</a>
</div>
<div class="flex items-center gap-4">
<button class="px-6 py-2 border border-[#a5e7ff]/30 text-[#a5e7ff] font-['Space_Grotesk'] text-sm tracking-widest hover:bg-[#a5e7ff]/10 transition-all duration-300">
                CONNECT
            </button>
<span class="material-symbols-outlined text-[#a5e7ff] cursor-pointer">menu</span>
</div>
</nav>
<!-- SideNavBar -->
<aside class="hidden lg:flex fixed left-0 top-0 h-full w-64 border-r border-white/5 bg-[#0e0e0e]/80 backdrop-blur-2xl flex-col h-full py-8 z-40 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
<div class="px-8 mb-12">
<div class="text-[#edb1ff] font-black font-['Space_Grotesk'] text-lg">ROOT_USER</div>
<div class="text-[10px] text-[#e5e2e1]/40 font-['Space_Grotesk'] tracking-[0.2em]">LEVEL_9_ARCHITECT</div>
</div>
<div class="flex-grow space-y-2">
<a class="flex items-center gap-4 px-8 py-4 text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 font-['Space_Grotesk'] text-xs font-medium" href="#">
<span class="material-symbols-outlined">terminal</span>
                INIT
            </a>
<a class="flex items-center gap-4 px-8 py-4 text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 font-['Space_Grotesk'] text-xs font-medium" href="#">
<span class="material-symbols-outlined">layers</span>
                PROJECTS
            </a>
<a class="flex items-center gap-4 px-8 py-4 text-[#e5e2e1]/40 hover:bg-white/5 hover:text-[#e5e2e1] transition-all duration-300 font-['Space_Grotesk'] text-xs font-medium" href="#">
<span class="material-symbols-outlined">memory</span>
                CORE
            </a>
<a class="flex items-center gap-4 px-8 py-4 bg-[#00d2ff]/10 text-[#00d2ff] border-r-2 border-[#00d2ff] font-['Space_Grotesk'] text-xs font-medium" href="#">
<span class="material-symbols-outlined">sensors</span>
                STATUS
            </a>
</div>
<div class="px-6 mb-8">
<button class="w-full py-3 bg-secondary-container/20 border border-secondary/30 text-secondary font-['Space_Grotesk'] text-[10px] tracking-widest hover:bg-secondary/10 transition-all">
                DEPLOY_REQUEST
            </button>
</div>
<div class="px-8 border-t border-white/5 pt-6">
<a class="flex items-center gap-4 text-[#e5e2e1]/40 hover:text-[#edb1ff] transition-all font-['Space_Grotesk'] text-xs" href="#">
<span class="material-symbols-outlined">settings</span>
                SETTINGS
            </a>
</div>
</aside>
<main class="lg:pl-64 pt-20 min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
<!-- Ambient Decorative Elements -->
<div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
<div class="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
<div class="max-w-5xl w-full px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
<!-- Left Side: Holographic UI Elements -->
<div class="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
<div class="glass-panel p-6 rounded-lg relative overflow-hidden group">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
<div class="flex justify-between items-center mb-4">
<span class="text-[10px] font-mono text-primary/70 tracking-tighter">CPU_LOAD_DYNAMICS</span>
<span class="material-symbols-outlined text-sm text-primary">monitoring</span>
</div>
<div class="flex items-end gap-1 h-20">
<div class="flex-1 bg-primary/20 h-[40%]" style="transition: height 0.3s ease;"></div>
<div class="flex-1 bg-primary/40 h-[60%]"></div>
<div class="flex-1 bg-primary/20 h-[30%]"></div>
<div class="flex-1 bg-primary/60 h-[80%]"></div>
<div class="flex-1 bg-primary/30 h-[50%]"></div>
<div class="flex-1 bg-primary/50 h-[70%]"></div>
<div class="flex-1 bg-primary/20 h-[45%]"></div>
</div>
</div>
<div class="glass-panel p-6 rounded-lg border-l-2 border-secondary/30">
<div class="text-[10px] font-mono text-secondary/70 mb-2 uppercase">Network_Protocol_v4.2</div>
<div class="space-y-3">
<div class="flex justify-between text-[11px] font-mono">
<span class="text-on-surface/40">LATENCY:</span>
<span class="text-secondary">22ms</span>
</div>
<div class="flex justify-between text-[11px] font-mono">
<span class="text-on-surface/40">THROUGHPUT:</span>
<span class="text-secondary">4.2GB/s</span>
</div>
<div class="w-full bg-white/5 h-1 rounded-full overflow-hidden">
<div class="w-3/4 h-full bg-secondary shadow-[0_0_8px_#edb1ff]"></div>
</div>
</div>
</div>
<div class="relative rounded-lg overflow-hidden h-48 group">
<img class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" data-alt="Dark aesthetic server room with glowing blue cables and data center racks in a high-tech laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt9y4J-F6QuUMEM6pp1lmTK6CyQu5vXOPCNmxi0EXkFzvEKbyN_KwaJQKr_gMqhIKKJDUemeN-8cVbPiaM4SeR39T_mWxYRQqIsuADAt2EMxcRY90o_3L9K8vUpwjNVIVRxXKAdjeYP5ZA0Hb4lniYCtBK-yS6dcTd9nFGPDI_xEmRsSzAVJUnn8KLNDCVYnGOlsl3pbLF8CWbQcZTx0P8WpKS8csyBeeNEJVLbovvQfTZA8gd4uxwucPt2RQKNAM4jRqudFeYmMwd"/>
<div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
<div class="absolute bottom-4 left-4">
<div class="text-[10px] font-mono text-primary tracking-widest">LIVE_FEED_SEC_01</div>
</div>
</div>
</div>
<!-- Right Side: Terminal Interface -->
<div class="lg:col-span-8 order-1 lg:order-2">
<div class="mb-10">
<h1 class="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-2">
                        OPEN_<span class="text-primary">TERMINAL</span>
</h1>
<p class="text-on-surface-variant font-body max-w-md leading-relaxed">
                        Initialize a direct communication protocol with the lead architect. All data streams are encrypted via Quantum-Link.
                    </p>
</div>
<div class="glass-panel rounded-xl overflow-hidden shadow-2xl relative">
<!-- Terminal Header -->
<div class="bg-surface-container-high px-6 py-3 flex items-center justify-between border-b border-white/5">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-error/40"></div>
<div class="w-3 h-3 rounded-full bg-tertiary-container/40"></div>
<div class="w-3 h-3 rounded-full bg-primary/40"></div>
</div>
<div class="text-[10px] font-mono text-on-surface/40 tracking-widest uppercase">system@architect_os:~/contact</div>
<span class="material-symbols-outlined text-on-surface/20 text-sm">settings_ethernet</span>
</div>
<!-- Terminal Body -->
<div class="p-8 font-mono text-sm relative">
<div class="terminal-scanline absolute inset-0"></div>
<div class="space-y-8 relative z-10">
<div class="flex flex-col md:flex-row md:items-center gap-4">
<label class="text-primary w-24">NAME:</label>
<div class="flex-grow flex items-center gap-2 border-b border-outline-variant focus-within:border-primary transition-colors py-1">
<span class="text-primary/50">[</span>
<input class="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface/20 w-full font-mono py-0" placeholder="IDENTITY_REQUIRED" type="text"/>
<span class="text-primary/50">]</span>
</div>
</div>
<div class="flex flex-col md:flex-row md:items-center gap-4">
<label class="text-primary w-24">EMAIL:</label>
<div class="flex-grow flex items-center gap-2 border-b border-outline-variant focus-within:border-primary transition-colors py-1">
<span class="text-primary/50">[</span>
<input class="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface/20 w-full font-mono py-0" placeholder="COMM_LINK_ADDRESS" type="email"/>
<span class="text-primary/50">]</span>
</div>
</div>
<div class="flex flex-col gap-4">
<label class="text-primary">MESSAGE_BODY:</label>
<div class="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-sm focus-within:border-primary transition-colors">
<textarea class="bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface/20 w-full font-mono resize-none py-0" placeholder="Input string payload..." rows="4"></textarea>
</div>
</div>
<div class="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div class="flex items-center gap-3">
<span class="text-secondary font-mono animate-pulse">&gt;&gt;</span>
<span class="text-on-surface/40 font-mono text-xs">Awaiting payload injection...</span>
<span class="w-2 h-4 bg-primary cursor-blink inline-block"></span>
</div>
<button class="glitch-hover px-10 py-4 bg-primary text-on-primary font-mono text-sm font-bold tracking-widest relative overflow-hidden group transition-all">
                                    SEND_REQUEST
                                    <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
</button>
</div>
</div>
</div>
</div>
<div class="mt-8 flex flex-wrap gap-4">
<div class="px-4 py-1 rounded-full bg-surface-container-lowest border border-outline-variant text-[10px] font-mono text-on-surface/60 flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        SECURE_HANDSHAKE: ACTIVE
                    </div>
<div class="px-4 py-1 rounded-full bg-surface-container-lowest border border-outline-variant text-[10px] font-mono text-on-surface/60 flex items-center gap-2">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        ENCRYPTION: AES-256-GCM
                    </div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="w-full border-t border-white/5 py-12 px-8 mt-12 bg-surface-container-lowest/50">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div class="flex flex-col items-center md:items-start">
<div class="text-[#a5e7ff] font-headline font-bold text-lg tracking-tighter mb-2">ARCHITECT.OS</div>
<div class="text-[10px] font-mono text-on-surface/30 uppercase tracking-[0.3em]">Built for the elite code architect</div>
</div>
<div class="flex flex-wrap justify-center gap-8 font-mono text-[10px] tracking-widest">
<a class="text-on-surface/40 hover:text-primary transition-colors" href="#">PRIVACY_PROTOCOL</a>
<a class="text-on-surface/40 hover:text-primary transition-colors" href="#">ENCRYPTION_TERMS</a>
<a class="text-on-surface/40 hover:text-primary transition-colors" href="#">VULNERABILITY_REPORTS</a>
</div>
<div class="text-[10px] font-mono text-on-surface/20">
                    © 2024 SYSTEM_ARCHITECT. ALL_RIGHTS_RESERVED.
                </div>
</div>
</footer>
</main>
</body></html>
