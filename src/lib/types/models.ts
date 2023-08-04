export interface Display {
  diagonal: number;
  name: string;
  resolution: {
    height: number;
    width: number;
  };
}

export type DisplaysList = Display[];
