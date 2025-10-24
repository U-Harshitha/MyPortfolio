// import { useEffect, useRef } from 'react';

// export default function Character3D() {
//   const iframeRef = useRef<HTMLIFrameElement>(null);
//   const apiRef = useRef<any>(null);
//   const runUidRef = useRef<string | null>(null);
//   const sitUidRef = useRef<string | null>(null);
//   const scrollTimerRef = useRef<number | null>(null);
//   const isRunningRef = useRef<boolean>(false);

//   useEffect(() => {
//     const ensureScript = () =>
//       new Promise<void>((resolve, reject) => {
//         const existing = document.getElementById('sketchfab-api');
//         if (existing) {
//           resolve();
//           return;
//         }
//         const s = document.createElement('script');
//         s.id = 'sketchfab-api';
//         s.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
//         s.async = true;
//         s.onload = () => resolve();
//         s.onerror = () => reject(new Error('Failed to load Sketchfab API'));
//         document.head.appendChild(s);
//       });

//     let scrollHandler: (() => void) | null = null;

//     ensureScript().then(() => {
//       if (!iframeRef.current) return;
//       const Sketchfab = (window as any).Sketchfab;
//       const client = new Sketchfab(iframeRef.current);
//       client.init('ff95785538a445eb8d5ee3c913aa76f6', {
//         transparent: 1,
//         ui_controls: 0,
//         ui_infos: 0,
//         ui_watermark: 0,
//         ui_annotations: 0,
//         ui_hint: 0,
//         dnt: 1,
//         autostart: 1,
//         preload: 1,
//         success: (api: any) => {
//           apiRef.current = api;
//           api.addEventListener('viewerready', () => {
//             api.getAnimations((err: any, animations: any[]) => {
//               if (err || !animations) return;
//               const findUid = (names: string[]) => {
//                 const nset = names.map((n) => n.toLowerCase());
//                 const m = animations.find((a: any) => {
//                   const name = String(a.name || '').toLowerCase();
//                   return nset.some((n) => name.includes(n));
//                 });
//                 return m ? String(m.uid || m.id || '') : null;
//               };
//               runUidRef.current = findUid(['run', 'walk', 'running']);
//               sitUidRef.current = findUid(['sit', 'idle', 'rest']);
//               if (sitUidRef.current) {
//                 api.setCurrentAnimationByUID(sitUidRef.current);
//                 api.play();
//                 isRunningRef.current = false;
//               }
//             });
//           });

//           scrollHandler = () => {
//             if (!apiRef.current) return;
//             if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
//             if (!isRunningRef.current) {
//               if (runUidRef.current) {
//                 apiRef.current.setCurrentAnimationByUID(runUidRef.current);
//                 apiRef.current.play();
//               } else {
//                 apiRef.current.play();
//               }
//               isRunningRef.current = true;
//             }
//             scrollTimerRef.current = window.setTimeout(() => {
//               if (!apiRef.current) return;
//               if (sitUidRef.current) {
//                 apiRef.current.setCurrentAnimationByUID(sitUidRef.current);
//                 apiRef.current.play();
//               } else {
//                 apiRef.current.pause();
//               }
//               isRunningRef.current = false;
//             }, 300);
//           };

//           window.addEventListener('scroll', scrollHandler as EventListener, { passive: true } as any);
//         },
//         error: () => {}
//       });
//     });

//     return () => {
//       if (scrollHandler) window.removeEventListener('scroll', scrollHandler as EventListener);
//       if (scrollTimerRef.current) window.clearTimeout(scrollTimerRef.current);
//     };
//   }, []);

//   return (
//     <div className="fixed bottom-8 right-8 w-48 h-38 pointer-events-auto z-50">
//       <div className="sketchfab-embed-wrapper" style={{ width: '100%', height: '100%' }}>
//         <iframe
//           ref={iframeRef}
//           title="Chibi Nezuko (Kimetsu no Yaiba) - VRChat Avatar"
//           allow="autoplay; fullscreen; xr-spatial-tracking"
//           frameBorder={0}
//           allowFullScreen
//           style={{ width: '62%', height: '62%', background: 'transparent', pointerEvents: 'none' }}
//         />
//       </div>
//     </div>
//   );
// }