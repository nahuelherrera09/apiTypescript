export interface Track {
    name: string;
    artist: string;
    genre: string;
    label: string;
    bpm: number;
    moment: "warmap" | "bomb" | "after" | "transition";
}