
export enum BinColor {
  RED = 'Vermelho (Plástico)',
  BLUE = 'Azul (Papel)',
  GREEN = 'Verde (Vidro)',
  YELLOW = 'Amarelo (Metal)',
  BROWN = 'Marrom (Orgânico)',
  GRAY = 'Cinza (Não Reciclável)'
}

export interface WasteAnalysis {
  objectName: string;
  material: string;
  binColor: string;
  recyclability: boolean;
  instructions: string;
  points: number;
}

export interface UserStats {
  totalPoints: number;
  scansCount: number;
  level: number;
}
