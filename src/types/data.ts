export type Encounter = {
  id: number;
  last_combat_packet: number;
  local_player: string;
  current_boss: string;
  duration: number;
  total_damage_dealt: number;
  top_damage_dealt: number;
  dps: number;
  buffs: string;
  debuffs: string;
  misc: string;
  difficulty: string;
  favorite: boolean;
  version: number;
  cleared: boolean;
  boss_only_damage: boolean;
  total_shielding: number;
  total_effective_shielding: number;
  applied_shield_buffs: string;
};

export type Entity = {
  name: string;
  encounter_id: number;
  npc_id: number;
  entity_type: string;
  class_id: string;
  class: string;
  gear_score: number;
  current_hp: number;
  max_hp: number;
  is_dead: number;
  skills: string;
  damage_state: string;
  skill_stats: string;
  last_update: number;
  dps: number;
  character_id: number;
  engravings: string;
  gear_hash: string;
};
