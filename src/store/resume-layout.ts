import { create } from 'zustand'

interface ResumeLayoutStore {
    // 'single' = 單頁垂直滾動, 'dual' = 雙頁並排
    viewMode: 'single' | 'dual'
    // 各模式的縮放比例 (0.5 ~ 1.5)
    singleScale: number
    dualScale: number
    // 當前縮放 (computed from viewMode)
    scale: number
    toggleViewMode: () => void
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

export const useResumeLayoutStore = create<ResumeLayoutStore>((set, get) => ({
    viewMode: 'dual',
    singleScale: DEFAULT_SINGLE_SCALE,
    dualScale: DEFAULT_DUAL_SCALE,
    get scale() {
        const state = get()
        return state.viewMode === 'single' ? state.singleScale : state.dualScale
    },
    toggleViewMode: () => set((state) => {
        const newMode = state.viewMode === 'dual' ? 'single' : 'dual'
        return {
            viewMode: newMode,
        }
    }),
    setScale: (scale) => set((state) => {
        const clampedScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale))
        if (state.viewMode === 'single') {
            return { singleScale: clampedScale }
        } else {
            return { dualScale: clampedScale }
        }
    }),
    zoomIn: () => set((state) => {
        const currentScale = state.viewMode === 'single' ? state.singleScale : state.dualScale
        const newScale = Math.min(MAX_SCALE, currentScale + SCALE_STEP)
        if (state.viewMode === 'single') {
            return { singleScale: newScale }
        } else {
            return { dualScale: newScale }
        }
    }),
    zoomOut: () => set((state) => {
        const currentScale = state.viewMode === 'single' ? state.singleScale : state.dualScale
        const newScale = Math.max(MIN_SCALE, currentScale - SCALE_STEP)
        if (state.viewMode === 'single') {
            return { singleScale: newScale }
        } else {
            return { dualScale: newScale }
        }
    }),
    resetZoom: () => set((state) => {
        if (state.viewMode === 'single') {
            return { singleScale: DEFAULT_SINGLE_SCALE }
        } else {
            return { dualScale: DEFAULT_DUAL_SCALE }
        }
    }),
}))
