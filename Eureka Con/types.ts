
export type ModelMode = 'fast' | 'standard' | 'thinking';
export type ViewMode = 'quantum' | 'mind' | 'annihilator' | 'time' | 'bender' | 'explorer' | 'portfolio' | 'factory' | 'design';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  mode?: ModelMode;
  attachments?: {
    type: 'image' | 'video' | 'blueprint' | 'project';
    url: string;
    mimeType: string;
  }[];
}

export interface TrainingMetric {
  epoch: number;
  loss: number;
  accuracy: number;
  status: 'learning' | 'optimized' | 'sentient' | 'universal';
}

export interface CosmicMetrics {
  universalSatisfaction: number;
  realityStability: number;
  quantumEfficiency: string;
  multiverseSimulations: number;
  creationVelocity: string;
  annihilationFactor: string;
  activeDimensions: number;
}

export interface EvolutionCycle {
  generation: number;
  fitness: number;
  mutations: string[];
  status: 'optimizing' | 'stable' | 'evolving' | 'transcendent';
}

export interface ProjectArtifact {
  id: string;
  name: string;
  type: 'web' | 'mobile' | 'ai' | 'robotics' | 'omni' | 'quantum';
  timestamp: number;
  buildTime: string;
  status: 'live' | 'fabricating' | 'archived';
  reach: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  content: string;
  language: string;
  isOpen?: boolean;
}

export interface DatabaseTable {
  name: string;
  columns: { name: string; type: string; constraints?: string }[];
}

export interface FactoryStats {
  projectsDeployed: number;
  avgBuildTime: string;
  activeDeployments: number;
  successRate: number;
  coresActive: number;
}

export interface SafetyStatus {
  ethicalAlignment: number;
  forbiddenPatternsBlocked: number;
  containmentLevel: 'secure' | 'critical';
}

export interface DepartmentStatus {
  name: string;
  staff: number;
  budget: number;
  efficiency: number;
  tasks: string[];
}
