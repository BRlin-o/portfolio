import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ResumeLayoutStore {
    // 'single' = 單頁垂直滾動, 'dual' = 雙頁並排
    viewMode: 'single' | 'dual'
    // 各模式的縮放比例 (0.5 ~ 1.5)
    singleScale: number
    dualScale: number
    // 是否由使用者手動切換過
    hasUserManuallyChanged: boolean
    hasUserManuallyZoomed: boolean

    // Actions
    toggleViewMode: () => void
    setViewMode: (mode: 'single' | 'dual') => void
    initializeLayout: (width: number) => void

    setScale: (scale: number) => void
    zoomIn: () => void
    zoomOut: () => void
    resetZoom: () => void
}

const SCALE_STEP = 0.1
const MIN_SCALE = 0.5
const MAX_SCALE = 1.5
const DEFAULT_SINGLE_SCALE = 1.2
const DEFAULT_DUAL_SCALE = 1

export const useResumeLayoutStore = create<ResumeLayoutStore>()(
    persist(
        (set, get) => ({
            viewMode: 'dual',
            singleScale: DEFAULT_SINGLE_SCALE,
            dualScale: DEFAULT_DUAL_SCALE,
            hasUserManuallyChanged: false,
            hasUserManuallyZoomed: false,

            toggleViewMode: () => set((state) => {
                const newMode = state.viewMode === 'dual' ? 'single' : 'dual'
                return {
                    viewMode: newMode,
                    hasUserManuallyChanged: true,
                }
            }),

            setViewMode: (mode) => set({
                viewMode: mode,
                hasUserManuallyChanged: true
            }),

            // Auto-detect layouts logic
            initializeLayout: (width: number) => set((state) => {
                const changes: Partial<ResumeLayoutStore> = {}

                // 1. View Mode Logic (Only if not manually set)
                if (!state.hasUserManuallyChanged) {
                    const recommendedMode = width < 1100 ? 'single' : 'dual'
                    if (state.viewMode !== recommendedMode) {
                        changes.viewMode = recommendedMode
                    }
                }

                // 2. Scaling Logic (Only if not manually zoomed)
                if (!state.hasUserManuallyZoomed) {
                    // Current (or new) mode to determine scale
                    const currentMode = changes.viewMode || state.viewMode
                    let newScale = 1

                    if (currentMode === 'single') {
                        // For single view (mobile/tablet), rely on responsive CSS and default to 100% scale.
                        // The user prefers 100% readability over maintaining strict A4 dimensions.
                        newScale = 1

                        // Only update if significantly different
                        if (Math.abs(state.singleScale - newScale) > 0.01) {
                            changes.singleScale = newScale
                        }
                    } else {
                        // Dual mode: Fit 2 pages + gap (~1650px base)
                        const targetWidth = Math.max(1000, width - 48)
                        newScale = Math.min(1, targetWidth / 1650)

                        if (Math.abs(state.dualScale - newScale) > 0.01) {
                            changes.dualScale = newScale
                        }
                    }
                }

                return changes
            }),

            setScale: (scale) => set((state) => {
                const clampedScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale))
                if (state.viewMode === 'single') {
                    return { singleScale: clampedScale, hasUserManuallyZoomed: true }
                } else {
                    return { dualScale: clampedScale, hasUserManuallyZoomed: true }
                }
            }),

            zoomIn: () => set((state) => {
                const currentScale = state.viewMode === 'single' ? state.singleScale : state.dualScale
                const newScale = Math.min(MAX_SCALE, currentScale + SCALE_STEP)
                if (state.viewMode === 'single') {
                    return { singleScale: newScale, hasUserManuallyZoomed: true }
                } else {
                    return { dualScale: newScale, hasUserManuallyZoomed: true }
                }
            }),

            zoomOut: () => set((state) => {
                const currentScale = state.viewMode === 'single' ? state.singleScale : state.dualScale
                const newScale = Math.max(MIN_SCALE, currentScale - SCALE_STEP)
                if (state.viewMode === 'single') {
                    return { singleScale: newScale, hasUserManuallyZoomed: true }
                } else {
                    return { dualScale: newScale, hasUserManuallyZoomed: true }
                }
            }),

            resetZoom: () => {
                set((state) => {
                    // Reset manual flag to allow auto-scale to take over on next resize/update
                    const changes: Partial<ResumeLayoutStore> = { hasUserManuallyZoomed: false }

                    // Immediately trigger a "re-cacl" or reset to safe defaults?
                    // Actually, if we just set hasUserManuallyZoomed to false, we need to re-run layout logic.
                    // But we don't have width here. So we'll set defaults first.
                    if (state.viewMode === 'single') {
                        changes.singleScale = DEFAULT_SINGLE_SCALE
                    } else {
                        changes.dualScale = DEFAULT_DUAL_SCALE
                    }
                    return changes
                })
                // Note: The next resize event (or if we ask the component to re-init) will fix the exact scale.
                // ideally we passed window width here but we can't easily.
                // The component listener will pick it up if resizing, but immediate snap-back might not happen perfectly 
                // unless we rely on 'initializeLayout' being called by the component.
                // For now, resetting to component default is fine.
            },
        }),
        {
            name: 'resume-layout-storage',
            storage: createJSONStorage(() => localStorage),
            // Only persist these fields
            partialize: (state) => ({
                viewMode: state.viewMode,
                singleScale: state.singleScale,
                dualScale: state.dualScale,
                hasUserManuallyChanged: state.hasUserManuallyChanged,
                hasUserManuallyZoomed: state.hasUserManuallyZoomed
            }),
        }
    )
)

